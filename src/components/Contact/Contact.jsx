import React, { useState, useEffect } from 'react'
import './contact.css'

const Contact = () => {
     const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Tutaj logika przetwarzania danych formularza
        console.log(formData);
    };

  return (
    <div className="contact-form-container">
        <h2>Masz pytania? Daj znać!</h2>
    <form onSubmit={handleSubmit}>
        <div className="form-group">
            <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                placeholder="Imię"
                required 
            />
        </div>
        <div className="form-group">
            <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                placeholder="Email"
                required 
            />
        </div>
        <div className="form-group">
            <input 
                type="text" 
                name="subject" 
                value={formData.subject} 
                onChange={handleChange} 
                placeholder="Tytuł"
                required 
            />
        </div>
        <div className="form-group">
            <textarea 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                placeholder="Wiadomość"
                required 
            />
        </div>
        <button type="submit" className="button">Wyślij</button>
    </form>
</div>

  )
}

export default Contact