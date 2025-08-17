"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Plus, 
  Edit, 
  Trash2, 
  Save, 
  X, 
  Star, 
  Building2, 
  Calendar, 
  User,
  Briefcase
} from 'lucide-react';
import AdminAuthWrapper from './AdminAuthWrapper';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  rating: number;
  text: string;
  project: string;
  date: string;
  highlight: string;
}

export default function AdminPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    company: '',
    image: '',
    rating: 5,
    text: '',
    project: '',
    date: '',
    highlight: ''
  });

  // Load testimonials from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('testimonials');
    if (stored) {
      setTestimonials(JSON.parse(stored));
    } else {
      // Default testimonials if none exist
      const defaultTestimonials = [
        {
          id: 1,
          name: "Sarah Chen",
          role: "VP of Engineering",
          company: "TechVentures Inc.",
          image: "/testimonials/sarah.jpg",
          rating: 5,
          text: "Nadeem's approach to technical recruiting is unparalleled. He found us a senior architect who not only had the exact skillset we needed but also became a key culture champion. His understanding of both technical requirements and team dynamics is exceptional.",
          project: "Senior Software Architect",
          date: "2024",
          highlight: "Filled in 2 weeks"
        },
        {
          id: 2,
          name: "Marcus Rodriguez",
          role: "CTO & Co-founder",
          company: "AI Dynamics",
          image: "/testimonials/marcus.jpg",
          rating: 5,
          text: "Working with Nadeem transformed our hiring process. He sourced ML engineers from companies we hadn't even considered, and his screening saved us countless hours. Three of our best engineers came through his pipeline.",
          project: "ML Engineering Team",
          date: "2024",
          highlight: "3 successful hires"
        }
      ];
      setTestimonials(defaultTestimonials);
      localStorage.setItem('testimonials', JSON.stringify(defaultTestimonials));
    }
  }, []);

  // Save testimonials to localStorage whenever the array changes
  useEffect(() => {
    if (testimonials.length > 0) {
      localStorage.setItem('testimonials', JSON.stringify(testimonials));
      // Dispatch custom event to notify testimonials component
      window.dispatchEvent(new CustomEvent('testimonialsUpdated', { 
        detail: testimonials 
      }));
    }
  }, [testimonials]);

  const openModal = (testimonial?: Testimonial) => {
    if (testimonial) {
      setEditingTestimonial(testimonial);
      setFormData({
        name: testimonial.name,
        role: testimonial.role,
        company: testimonial.company,
        image: testimonial.image,
        rating: testimonial.rating,
        text: testimonial.text,
        project: testimonial.project,
        date: testimonial.date,
        highlight: testimonial.highlight
      });
    } else {
      setEditingTestimonial(null);
      setFormData({
        name: '',
        role: '',
        company: '',
        image: '/testimonials/placeholder.jpg',
        rating: 5,
        text: '',
        project: '',
        date: new Date().getFullYear().toString(),
        highlight: ''
      });
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingTestimonial(null);
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.role || !formData.company || !formData.text || !formData.project || !formData.date || !formData.highlight) {
      alert('Please fill in all required fields');
      return;
    }
    
    if (editingTestimonial) {
      // Update existing testimonial
      setTestimonials(prev => prev.map(t => 
        t.id === editingTestimonial.id 
          ? { ...formData, id: editingTestimonial.id }
          : t
      ));
    } else {
      // Add new testimonial
      const newTestimonial = {
        ...formData,
        id: Date.now() // Simple ID generation
      };
      setTestimonials(prev => [...prev, newTestimonial]);
    }
    
    closeModal();
  };

  const deleteTestimonial = (id: number) => {
    if (confirm('Are you sure you want to delete this testimonial?')) {
      setTestimonials(prev => prev.filter(t => t.id !== id));
    }
  };

  const handleInputChange = (field: string, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <AdminAuthWrapper>
      <div className="min-h-screen bg-gray-50 py-8 gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
            <p className="text-gray-600">Manage testimonials and website content</p>
            </div>

            {/* Testimonials Section */}
            <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-900">Testimonials</h2>
                <button
                    onClick={() => openModal()}
                    className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                >
                    <Plus className="w-4 h-4" />
                    Add Testimonial
                </button>
                </div>
            </div>

            <div className="p-6">
                {testimonials.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                    {`No testimonials yet. Click "Add Testimonial" to get started.`}
                </div>
                ) : (
                <div className="grid gap-4">
                    {testimonials.map((testimonial) => (
                    <motion.div
                        key={testimonial.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="border border-gray-200 rounded-lg p-6"
                    >
                        <div className="flex items-start justify-between">
                        <div className="flex-1">
                            <div className="flex items-center gap-4 mb-3">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                                <User className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg text-gray-900">
                                {testimonial.name}
                                </h3>
                                <p className="text-gray-600">{testimonial.role}</p>
                                <div className="flex items-center gap-1 text-gray-500 text-sm">
                                <Building2 className="w-4 h-4" />
                                {testimonial.company}
                                </div>
                            </div>
                            </div>
                            
                            <p className="text-gray-700 mb-4 line-clamp-3">
                            {`"${testimonial.text}"`}
                            </p>
                            
                            <div className="flex flex-wrap gap-2 mb-3">
                            <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 rounded text-sm">
                                <Briefcase className="w-3 h-3" />
                                {testimonial.project}
                            </span>
                            <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 rounded text-sm">
                                <Calendar className="w-3 h-3" />
                                {testimonial.date}
                            </span>
                            <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-sm">
                                ✓ {testimonial.highlight}
                            </span>
                            </div>
                            
                            <div className="flex gap-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                            ))}
                            </div>
                        </div>
                        
                        <div className="flex gap-2 ml-4">
                            <button
                            onClick={() => openModal(testimonial)}
                            className="p-2 text-blue-600 hover:bg-blue-50 rounded"
                            >
                            <Edit className="w-4 h-4" />
                            </button>
                            <button
                            onClick={() => deleteTestimonial(testimonial.id)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded"
                            >
                            <Trash2 className="w-4 h-4" />
                            </button>
                        </div>
                        </div>
                    </motion.div>
                    ))}
                </div>
                )}
            </div>
            </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            >
                <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">
                    {editingTestimonial ? 'Edit Testimonial' : 'Add Testimonial'}
                </h3>
                <button
                    onClick={closeModal}
                    className="p-2 text-gray-500 hover:text-gray-700"
                >
                    <X className="w-5 h-5" />
                </button>
                </div>

                <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Name *
                    </label>
                    <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent text-gray-800"
                    />
                    </div>
                    <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Role *
                    </label>
                    <input
                        type="text"
                        value={formData.role}
                        onChange={(e) => handleInputChange('role', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent text-gray-800"
                    />
                    </div>
                    <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company *
                    </label>
                    <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent text-gray-800"
                    />
                    </div>
                    <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Project *
                    </label>
                    <input
                        type="text"
                        value={formData.project}
                        onChange={(e) => handleInputChange('project', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent text-gray-800"
                    />
                    </div>
                    <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Date *
                    </label>
                    <input
                        type="text"
                        value={formData.date}
                        onChange={(e) => handleInputChange('date', e.target.value)}
                        placeholder="2024"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent text-gray-800"
                    />
                    </div>
                    <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Highlight *
                    </label>
                    <input
                        type="text"
                        value={formData.highlight}
                        onChange={(e) => handleInputChange('highlight', e.target.value)}
                        placeholder="e.g., Filled in 2 weeks"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent text-gray-800"
                    />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                    Testimonial Text *
                    </label>
                    <textarea
                    rows={4}
                    value={formData.text}
                    onChange={(e) => handleInputChange('text', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent text-gray-800"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                    Rating
                    </label>
                    <select
                    value={formData.rating}
                    onChange={(e) => handleInputChange('rating', parseInt(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                    >
                    <option value={5}>5 Stars</option>
                    <option value={4}>4 Stars</option>
                    <option value={3}>3 Stars</option>
                    </select>
                </div>

                <div className="flex justify-end gap-3 pt-4">
                    <button
                    onClick={closeModal}
                    className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                    >
                    Cancel
                    </button>
                    <button
                    onClick={handleSubmit}
                    className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800"
                    >
                    <Save className="w-4 h-4" />
                    {editingTestimonial ? 'Update' : 'Save'} Testimonial
                    </button>
                </div>
                </div>
            </motion.div>
            </div>
        )}
    </div>
    </AdminAuthWrapper>
  );
}



