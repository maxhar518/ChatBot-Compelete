import React, { useState } from 'react';

const SendMail = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSendEmail = async () => {
        try {
            const response = await fetch('/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ to: email }),
            });

            const result = await response.json();

            if (response.status === 200) {
                setMessage(result.message);
            } else {
                setMessage('Failed to send email');
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('Error sending email');
        }
    };

    return (
        <div>
            <h2>Send Email</h2>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter recipient's email"
            />
            <button onClick={handleSendEmail}>Send Email</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default SendMail;
