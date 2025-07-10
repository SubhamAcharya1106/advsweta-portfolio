"use client";
import React, { useState } from 'react';
import './ContactForm.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-form-container" id="contact">
      {submitted ? (
        <div className="success-message">Thank you! Your message has been received.</div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <label>
            Your Name *
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </label>
          <label>
            Your Email *
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>
          <label>
            Phone (optional)
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
          </label>
          <label>
            Your Message *
            <textarea name="message" value={formData.message} onChange={handleChange} required />
          </label>
          <button type="submit">Send Message</button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
