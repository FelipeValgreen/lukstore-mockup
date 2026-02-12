import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, ChevronRight } from 'lucide-react';
import './WhatsAppWidget.css';

const PHONE_NUMBER = "56948100032";

const QUICK_REPLIES = [
    { label: "Consultar por un pedido", text: "Hola Lukstore, necesito información sobre mi pedido." },
    { label: "Ayuda con tallas", text: "Hola, tengo dudas sobre qué talla elegir." },
    { label: "Ver disponibilidad de stock", text: "Hola, quiero saber si tienen stock de un producto." },
    { label: "Hablar con alguien", text: "Hola, quiero hablar con un asesor." }
];

const WhatsAppWidget = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOptionClick = (text) => {
        const url = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank');
        setIsOpen(false);
    };

    return (
        <div className="whatsapp-widget">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="wa-chat-window"
                    >
                        <div className="wa-header">
                            <div className="wa-header-info">
                                <span className="wa-avatar">LK</span>
                                <div>
                                    <h4>Lukstore Support</h4>
                                    <span className="wa-status">Responde en minutos</span>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="wa-close-btn">
                                <X size={18} />
                            </button>
                        </div>
                        <div className="wa-body">
                            <div className="wa-message-received">
                                <p>¡Hola! 👋 Bienvenido a Lukstore. ¿En qué podemos ayudarte hoy?</p>
                                <span className="wa-time">{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                            </div>

                            <div className="wa-options">
                                {QUICK_REPLIES.map((option, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => handleOptionClick(option.text)}
                                        className="wa-option-btn"
                                    >
                                        <span>{option.label}</span>
                                        <ChevronRight size={14} />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`wa-float-btn ${isOpen ? 'active' : ''}`}
            >
                <div className="wa-icon-container">
                    <svg viewBox="0 0 24 24" width="32" height="32" className="wa-logo-svg">
                        <path fill="currentColor" d="M12.0117 0C5.39453 0 0.0117188 5.38281 0.0117188 12C0.0117188 14.125 0.5625 16.1133 1.53516 17.8477L0.128906 23.0859L5.47266 21.6836C7.14453 22.5859 9.04688 23.0859 11.0117 23.0859H12.0117C18.6289 23.0859 24.0117 17.7031 24.0117 11.0859V11.0117C24.0117 4.39453 18.6289 0 12.0117 0ZM12.0117 21.1328C10.2305 21.1328 8.53125 20.6641 7.03125 19.7969L6.65625 19.5859L2.74219 20.6172L3.79688 16.7969L3.5625 16.4219C2.60156 14.8984 2.10938 13.1172 2.10938 11.2695C2.10938 5.78125 6.53906 1.35156 12.0117 1.35156C17.4844 1.35156 21.9141 5.78125 21.9141 11.2695C21.9141 16.7578 17.4844 21.1328 12.0117 21.1328ZM17.4141 14.3672C17.1328 14.2266 15.6836 13.5234 15.4023 13.4062C15.1445 13.3125 14.9336 13.2656 14.7461 13.5703C14.5352 13.8516 13.9727 14.5312 13.7852 14.7188C13.6211 14.9297 13.4336 14.9531 13.1523 14.8125C12.8711 14.6719 11.9336 14.3672 10.832 13.3828C9.96484 12.6094 9.37891 11.6484 9.21484 11.3672C9.05078 11.0859 9.21484 10.9453 9.35547 10.8047C9.47266 10.6875 9.61328 10.4766 9.77734 10.2891C9.91797 10.0781 9.98828 9.9375 10.082 9.72656C10.1758 9.53906 10.1289 9.375 10.0586 9.23438C9.98828 9.09375 9.37891 7.64062 9.14453 7.05469C8.88672 6.49219 8.65234 6.5625 8.46484 6.5625C8.27734 6.5625 8.06641 6.5625 7.85547 6.5625C7.62109 6.5625 7.26953 6.65625 6.94141 7.00781C6.63672 7.35938 5.74609 8.17969 5.74609 9.89062C5.74609 11.5781 6.98828 13.2422 7.15234 13.4531C7.33984 13.6875 9.58984 17.1562 13.0117 18.6328C13.832 18.9844 14.4648 19.2188 14.957 19.3594C15.8945 19.6641 16.7383 19.6172 17.418 19.5234C18.1445 19.4297 19.6914 18.5859 20.0195 17.6719C20.3242 16.7578 20.3242 15.9844 20.2305 15.8203C20.1367 15.6562 19.9258 15.5625 19.668 15.4219L17.4141 14.3672Z" />
                    </svg>
                </div>
            </motion.button>
        </div>
    );
};

export default WhatsAppWidget;
