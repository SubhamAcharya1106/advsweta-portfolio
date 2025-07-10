'use client';
import React, { useState } from 'react';
import './ContactForm.css';
import { FaUser, FaEnvelope, FaPhone, FaCommentDots } from 'react-icons/fa';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert('Message sent successfully! (Not connected to backend yet)');
    setForm({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section className="contact-section">
      <div className="contact-card">
        <h2>Let's Talk</h2>
        <p>Have a legal question or want to discuss your case? Drop a message below.</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <FaUser />
            <input
              type="text"
              name="name"
              placeholder="Your Name *"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <FaEnvelope />
            <input
              type="email"
              name="email"
              placeholder="Your Email *"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <FaPhone />
            <input
              type="text"
              name="phone"
              placeholder="Phone (optional)"
              value={form.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <FaCommentDots />
            <textarea
              name="message"
              placeholder="Your Message *"
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
