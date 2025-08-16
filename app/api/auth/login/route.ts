// app/api/auth/login/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import crypto from 'crypto';

// Store these in environment variables
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@gritliy.com';
const ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH; // You'll need to generate this

// Helper function to hash passwords
function hashPassword(password: string): string {
  return crypto.createHash('sha256').update(password).digest('hex');
}

// Helper function to generate a secure session token
function generateSessionToken(): string {
  return crypto.randomBytes(32).toString('hex');
}

// In-memory session store (in production, use Redis or a database)
const sessions = new Map<string, { email: string; expiresAt: Date }>();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body;

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    // Hash the provided password
    const hashedPassword = hashPassword(password);

    // Check credentials
    // In production, you should check against a database
    // For now, we're checking against environment variables
    const isValidCredentials = 
      email === ADMIN_EMAIL && 
      hashedPassword === ADMIN_PASSWORD_HASH;

    if (!isValidCredentials) {
      // Add rate limiting here in production
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Generate session token
    const sessionToken = generateSessionToken();
    const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours

    // Store session
    sessions.set(sessionToken, {
      email,
      expiresAt
    });

    // Set secure HTTP-only cookie
    const cookieStore = await cookies();
    cookieStore.set('admin-session', sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24, // 24 hours
      path: '/'
    });

    return NextResponse.json(
      { success: true, email },
      { status: 200 }
    );
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Verify session endpoint
export async function GET(request: NextRequest) {
  try {
    const cookieStore = await cookies();
    const sessionToken = cookieStore.get('admin-session')?.value;

    if (!sessionToken) {
      return NextResponse.json(
        { authenticated: false },
        { status: 401 }
      );
    }

    const session = sessions.get(sessionToken);

    if (!session || session.expiresAt < new Date()) {
      // Session expired or invalid
      if (session) {
        sessions.delete(sessionToken);
      }
      return NextResponse.json(
        { authenticated: false },
        { status: 401 }
      );
    }

    return NextResponse.json(
      { authenticated: true, email: session.email },
      { status: 200 }
    );
  } catch (error) {
    console.error('Session verification error:', error);
    return NextResponse.json(
      { authenticated: false },
      { status: 500 }
    );
  }
}