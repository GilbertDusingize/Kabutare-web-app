import React, { useState } from 'react';
import "../App.css";

const ContactForm = () => {
  // 1. Initialize state for all fields
  const [formData, setFormData] = useState({
    fullname: '',
    phone: '',
    email: '',
    content: ''
  });

  const [status, setStatus] = useState('');

  // 2. Generic change handler for all inputs
  const handleChange = (e) => {
    const { name ,value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // 3. Submit handler to talk to Node.js
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('http://localhost:5000/api/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ fullname: '', phone: '', email: '', content: '' }); // Reset form
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      setStatus('Server error. Please try again later.');
    }
  };

  return (
    <form className="section-about__form" onSubmit={handleSubmit}>
      {status && <p className="status-msg">{status}</p>}

      <input 
        type="text" 
        name="fullname"
        className="text-field" 
        placeholder="Your Full name" 
        value={formData.fullname}
        onChange={handleChange}
        required 
      />
      
      <input 
        type="tel" 
        name="phone"
        className="text-field" 
        placeholder="Your phone" 
        value={formData.phone}
        onChange={handleChange}
      />
      <input 
        type="email" 
        name="email"
        className="text-field" 
        placeholder="Your Email" 
        value={formData.email}
        onChange={handleChange}
        required 
      />
      <textarea
        name="content"
        className="text-field text-field--textarea"
        placeholder="Your message"
        rows="5"
        value={formData.content}
        onChange={handleChange}
        required
      ></textarea>
      
      <button type="submit" className="section-contact__form-button secondary-button">
        Send message
      </button>
    </form>
  );
};

export default ContactForm;