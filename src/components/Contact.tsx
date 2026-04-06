import { MessageSquare } from 'lucide-react';
import React, { useState } from 'react';

export default function Contact({ isTechMode }: { isTechMode: boolean }) {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult(isTechMode ? "TRANSMITTING DATA..." : "Sending Message...");
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "e0100368-2909-4339-a688-dab355107986");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      // 👇 DEBUG HERE
      console.log("Response status:", response.status);
      console.log("Response OK:", response.ok);
      console.log("Response data:", data);
      if (data.success) {
        setResult(isTechMode
          ? "TRANSMISSION SUCCESSFUL. DATA UPLOADED."
          : "Message Sent Successfully!"
        );
      } else {
        setResult("ERROR: API REJECTED TRANSMISSION.");
      }
    } catch (error) {
      setResult("ERROR: TRANSMISSION FAILED.");
    }
  };

  return (
    <section id="contact" className="section" style={{ minHeight: '80vh' }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
        <h2 className={`section-title ${isTechMode ? 'neon-text-pink' : ''}`}>
          {isTechMode ? 'PING_ME()' : 'Get In Touch'}
        </h2>

        <div className="glass-panel" style={{ marginTop: '2rem', padding: '3rem', textAlign: 'left' }}>
          <p style={{ color: 'var(--text-main)', fontSize: '1.2rem', marginBottom: '2rem', textAlign: 'center' }}>
            {isTechMode
              ? "Ready to collaborate on something awesome? Send a transmission across the network."
              : "I'm currently open to new opportunities. Feel free to shoot me a message!"}
          </p>

          <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} onSubmit={onSubmit}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="name" className={isTechMode ? "tech-font" : ""} style={{ color: isTechMode ? 'var(--primary-cyan)' : 'var(--text-main)', fontSize: '0.9rem', fontWeight: isTechMode ? 'normal' : '600' }}>
                {isTechMode ? 'IDENTIFIER' : 'Name'}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder={isTechMode ? "Enter your name..." : "John Doe"}
                style={{
                  background: isTechMode ? 'rgba(0,0,0,0.5)' : '#fff',
                  border: isTechMode ? '1px solid var(--text-muted)' : '1px solid #ccc',
                  padding: '1rem',
                  borderRadius: '4px',
                  color: isTechMode ? 'white' : 'black',
                  fontFamily: 'inherit',
                  outline: 'none',
                  transition: 'border-color 0.3s, box-shadow 0.3s'
                }}
                onFocus={e => {
                  e.target.style.borderColor = 'var(--primary-pink)';
                  if (isTechMode) e.target.style.boxShadow = '0 0 10px rgba(255, 0, 127, 0.3)';
                }}
                onBlur={e => {
                  e.target.style.borderColor = isTechMode ? 'var(--text-muted)' : '#ccc';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="email" className={isTechMode ? "tech-font" : ""} style={{ color: isTechMode ? 'var(--primary-cyan)' : 'var(--text-main)', fontSize: '0.9rem', fontWeight: isTechMode ? 'normal' : '600' }}>
                {isTechMode ? 'NETWORK_ADDRESS' : 'Email Address'}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder={isTechMode ? "Enter your email..." : "john@example.com"}
                style={{
                  background: isTechMode ? 'rgba(0,0,0,0.5)' : '#fff',
                  border: isTechMode ? '1px solid var(--text-muted)' : '1px solid #ccc',
                  padding: '1rem',
                  borderRadius: '4px',
                  color: isTechMode ? 'white' : 'black',
                  fontFamily: 'inherit',
                  outline: 'none',
                  transition: 'border-color 0.3s, box-shadow 0.3s'
                }}
                onFocus={e => {
                  e.target.style.borderColor = 'var(--primary-pink)';
                  if (isTechMode) e.target.style.boxShadow = '0 0 10px rgba(255, 0, 127, 0.3)';
                }}
                onBlur={e => {
                  e.target.style.borderColor = isTechMode ? 'var(--text-muted)' : '#ccc';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="message" className={isTechMode ? "tech-font" : ""} style={{ color: isTechMode ? 'var(--primary-cyan)' : 'var(--text-main)', fontSize: '0.9rem', fontWeight: isTechMode ? 'normal' : '600' }}>
                {isTechMode ? 'PAYLOAD' : 'Message'}
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder={isTechMode ? "Secure transmission ready..." : "How can I help you?"}
                style={{
                  background: isTechMode ? 'rgba(0,0,0,0.5)' : '#fff',
                  border: isTechMode ? '1px solid var(--text-muted)' : '1px solid #ccc',
                  padding: '1rem',
                  borderRadius: '4px',
                  color: isTechMode ? 'white' : 'black',
                  fontFamily: 'inherit',
                  resize: 'vertical',
                  outline: 'none',
                  transition: 'border-color 0.3s, box-shadow 0.3s'
                }}
                onFocus={e => {
                  e.target.style.borderColor = isTechMode ? 'var(--primary-cyan)' : 'var(--primary-pink)';
                  if (isTechMode) e.target.style.boxShadow = '0 0 10px rgba(0, 243, 255, 0.3)';
                }}
                onBlur={e => {
                  e.target.style.borderColor = isTechMode ? 'var(--text-muted)' : '#ccc';
                  e.target.style.boxShadow = 'none';
                }}
              ></textarea>
            </div>

            <button type="submit" className="btn btn-cyan" style={{ alignSelf: 'flex-start', marginTop: '1rem' }}>
              <MessageSquare size={18} />
              {isTechMode ? 'TRANSMIT_DATA' : 'Send Message'}
            </button>
            {result && <div style={{ color: isTechMode ? 'var(--primary-cyan)' : 'var(--text-main)', marginTop: '0.5rem', fontWeight: 'bold' }}>{result}</div>}
          </form>
        </div>
      </div>
    </section>
  );
}
