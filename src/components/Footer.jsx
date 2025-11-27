import React from 'react';

const Footer = () => {
    const footerStyle = {
        padding: '3rem 5%',
        textAlign: 'center',
        borderTop: '1px solid var(--color-glass-border)',
        background: 'var(--color-bg-dark)',
    };

    const socialStyle = {
        display: 'flex',
        justifyContent: 'center',
        gap: '2rem',
        marginBottom: '1.5rem',
    };

    const linkStyle = {
        color: 'var(--color-text-secondary)',
        fontSize: '1rem',
    };

    const copyrightStyle = {
        color: 'var(--color-text-secondary)',
        fontSize: '0.9rem',
        opacity: 0.7,
    };

    return (
        <footer id="contact" style={footerStyle}>
            <div style={socialStyle}>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                    GitHub
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                    LinkedIn
                </a>
            </div>
            <p style={copyrightStyle}>
                &copy; {new Date().getFullYear()} Luan Soares. Todos os direitos reservados.
            </p>
        </footer>
    );
};

export default Footer;
