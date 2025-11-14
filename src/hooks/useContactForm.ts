import { useState } from 'react';
import emailjs from '@emailjs/browser';
import type { ContactFormData, FormStatus } from '../types';

export const useContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<FormStatus>({
    type: null,
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: '' });

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Ryan Thompson',
        },
        publicKey
      );

      setStatus({
        type: 'success',
        message: 'Thank you for your message! I will get back to you soon.'
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Email sending failed:', error);
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or contact me directly at Ryan_JThompson@outlook.com'
      });
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    loading,
    status,
    handleChange,
    handleSubmit,
  };
};
