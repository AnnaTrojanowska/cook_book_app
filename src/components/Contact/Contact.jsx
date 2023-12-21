import React, { useState, useEffect } from 'react'
import './contact.css'
import { db } from '../../firebase';
import { collection, addDoc} from 'firebase/firestore'

const Contact = () => {
     const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [messageSent, setMessageSent] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, "contactMessages"), {
                name: formData.name,
                email: formData.email,
                subject: formData.subject,
                message: formData.message,
                timestamp: new Date(),
            });
            console.log("Wiadomość zapisana w Firestore");
            setFormData({ name: '', email: '', subject: '', message: '' }); // Wyczyszczenie formularza
            setMessageSent(true);
            // Opcjonalnie, możesz ustawić timeout, aby komunikat zniknął po pewnym czasie
            setTimeout(() => setMessageSent(false), 5000);
        } catch (error) {
            console.error("Błąd podczas zapisywania dokumentu: ", error);
            // Opcjonalnie, obsłuż błąd
        }
    };
    

  return (
    <div className="contact-form-container">
        <h2>Masz pytania? Daj znać!</h2>
        {messageSent && <div className="success-message">Dziękujemy za kontakt!</div>}
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