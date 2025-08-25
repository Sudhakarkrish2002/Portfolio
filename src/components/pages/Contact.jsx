import React, { useState } from 'react';
import { SiGmail } from 'react-icons/si';
import Section from '../common/Section';
import SocialLinks from '../common/SocialLinks';
import Button from '../common/Button';
import { contactInfo } from '../../data/contactInfo';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    };
    
    try {
      console.log('Sending contact form data:', data);
      
      // Updated backend URL - check if your backend is running on port 3000
      const response = await fetch('https://portfolio-backend-1-840a.onrender.com/api/contact', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data),
      });
      
      const result = await response.json();
      console.log('Contact form response:', result);
      
      if (response.ok && result.success) {
        setSubmitStatus({ type: 'success', message: 'Message sent successfully! 🎉' });
        e.target.reset();
        setTimeout(() => setSubmitStatus(null), 3000);
      } else {
        setSubmitStatus({ type: 'error', message: `Failed to send message: ${result.error || 'Unknown error'}` });
        setTimeout(() => setSubmitStatus(null), 5000);
      }
    } catch (error) {
      console.error('Contact form error:', error);
      
      // Better error handling
      let errorMessage = 'Failed to send message. ';
      if (error.name === 'TypeError' && error.message.includes('fetch')) {
        errorMessage += 'Please check if the backend server is running on port 3000.';
      } else {
        errorMessage += error.message;
      }
      
      setSubmitStatus({ type: 'error', message: errorMessage });
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact" title="Get In Touch" className="pb-16 md:pb-20">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        <div className="card p-6 md:p-8">
          <h3 className="text-2xl font-semibold mb-6 text-blue-300">Send Message</h3>
          <form onSubmit={handleContactSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              disabled={isSubmitting}
              className="w-full px-4 py-3 bg-black/40 border border-blue-400 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:border-blue-300 disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              disabled={isSubmitting}
              className="w-full px-4 py-3 bg-black/40 border border-blue-400 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:border-blue-300 disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              disabled={isSubmitting}
              className="w-full px-4 py-3 bg-black/40 border border-blue-400 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:border-blue-400 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
            ></textarea>
            
            {submitStatus && (
              <div className={`p-4 rounded-lg border ${
                submitStatus.type === 'success' 
                  ? 'bg-green-900/20 border-green-400 text-green-300' 
                  : 'bg-red-900/20 border-red-400 text-red-300'
              }`}>
                {submitStatus.message}
              </div>
            )}
            
            <Button 
              type="submit"
              variant="primary"
              size="lg"
              loading={isSubmitting}
              disabled={isSubmitting}
              className="w-full"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </div>
        <div className="space-y-6">
          <div className="card p-6 md:p-8">
            <h3 className="text-2xl font-semibold mb-6 text-blue-300">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <SiGmail className="text-2xl text-blue-400 mr-4" />
                <div>
                  <p className="text-blue-200 text-sm">Email</p>
                  <a href={`mailto:${contactInfo.email}`} className="text-white hover:text-blue-400 transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-2xl text-blue-400 mr-4">📍</span>
                <div>
                  <p className="text-blue-200 text-sm">Location</p>
                  <p className="text-white">{contactInfo.location}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card p-6 md:p-8">
            <h3 className="text-2xl font-semibold mb-6 text-blue-300">Connect With Me</h3>
            <SocialLinks variant="contact" />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;