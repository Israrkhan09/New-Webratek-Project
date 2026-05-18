import React, { useState } from 'react';
import FlipButton from './FlipButton';
import './ProjectDrawer.css';

const ProjectDrawer = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    
    const [status, setStatus] = useState('idle'); // idle, sending, success, error

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        // --- REALTIME EMAIL OPERATION (Web3Forms Implementation) ---
        try {
            // Using a simple JSON fetch with the state values directly
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: "ad6567bf-16a4-41ee-9d4b-9b951477da9f",
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    message: formData.message,
                    subject: `New Project Inquiry from ${formData.name}`,
                    from_name: "Webratek Portfolio",
                }),
            });

            const result = await response.json();
            if (result.success) {
                setStatus('success');
            } else {
                console.error("Submission failed:", result.message);
                setStatus('error');
            }
        } catch (error) {
            console.error("Network error:", error);
            setStatus('error');
        }
    };

    const handleClose = () => {
        onClose();
        setTimeout(() => {
            setStatus('idle');
            setFormData({ name: '', email: '', phone: '', message: '' });
        }, 500);
    };

    return (
        <>
            {/* Backdrop */}
            <div className={`drawer-backdrop ${isOpen ? 'show' : ''}`} onClick={handleClose} />
            
            {/* Main Drawer */}
            <div className={`project-drawer ${isOpen ? 'open' : ''}`}>
                <div className="drawer-header">
                    <button className="close-btn" onClick={handleClose}><span>×</span></button>
                </div>
                
                <div className="drawer-content">
                    {status === 'sending' ? (
                        <div className="spinner-container">
                            <div className="premium-loader"></div>
                            <p style={{ color: '#006A63', fontWeight: '500' }}>Sending details...</p>
                        </div>
                    ) : status !== 'success' ? (
                        <>
                            <h2>Got a <span className="highlight">project?</span></h2>
                            <p className="description">
                                Brief us on your vision. Our experts will review your requirements and get back to you with a tailored strategic solution.
                            </p>
                            
                            <form className="project-form" onSubmit={handleSubmit}>
                                <div className="form-input-wrapper">
                                    <input 
                                        type="text" 
                                        name="name"
                                        placeholder="Name" 
                                        value={formData.name}
                                        onChange={handleChange}
                                        required 
                                    />
                                </div>
                                <div className="form-input-wrapper">
                                    <input 
                                        type="email" 
                                        name="email"
                                        placeholder="Email" 
                                        value={formData.email}
                                        onChange={handleChange}
                                        required 
                                    />
                                </div>
                                <div className="form-input-wrapper">
                                    <input 
                                        type="tel" 
                                        name="phone"
                                        placeholder="Phone" 
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required 
                                    />
                                </div>
                                <div className="form-input-wrapper">
                                    <textarea 
                                        name="message"
                                        placeholder="Message" 
                                        rows="3" 
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>
                                
                                <FlipButton
                                    frontText="Send Message"
                                    backText="Send Message"
                                    bgColor="bg-[#006A63]"
                                    className="w-full !rounded-xl"
                                    textSize="text-[17px]"
                                />

                                {status === 'error' && (
                                    <p className="text-danger mt-3 small">
                                        Something went wrong. Please check your API key or try again.
                                    </p>
                                )}
                            </form>

                            <p className="privacy-note mt-auto">
                                We'll keep your information in our CRM to respond to your request. 
                                For more details, consult our <a href="#">privacy policy</a>.
                            </p>
                        </>
                    ) : (
                        <div className="thank-you-content text-center">
                            <div className="success-icon-wrapper">
                                <svg className="success-icon-svg" viewBox="0 0 24 24" fill="none" stroke="#006A63" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                            </div>
                            <h2>Thank You!</h2>
                            <p className="description">
                                Your message has been sent successfully to our team.
                            </p>
                            <p className="mt-3" style={{ color: '#888', fontSize: '14px' }}>
                                We will review your project details and get back to you shortly.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default ProjectDrawer;
