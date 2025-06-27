import React, { useState } from 'react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
     
      <button
        onClick={handleToggleChat}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 999,
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '30px',
          cursor: 'pointer',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        }}
      >
        👋 Привет
      </button>

      {isOpen && (
        <div
          style={{
            width: '350px',
            height: '500px',
            position: 'fixed',
            bottom: '80px',
            right: '20px',
            zIndex: 1000,
            boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
            borderRadius: '10px',
            overflow: 'hidden',
          }}
        >
          <iframe
            src="https://www.chatbase.co/chatbot/UFK5T_4Xt-hRrEbFPOXmd"
            width="100%"
            height="100%"
            style={{ border: 'none' }}
            title="AI Chatbot"
          ></iframe>
        </div>
      )}
    </>
  );
};

export default Chatbot;
