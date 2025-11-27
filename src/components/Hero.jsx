import React from 'react';

const Hero = () => {
    const sectionStyle = {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '0 5%',
        paddingTop: '80px', // Offset for fixed header
    };

    const titleStyle = {
        fontSize: '4rem',
        fontWeight: '800',
        marginBottom: '1rem',
        background: 'linear-gradient(to right, #fff, var(--color-accent))',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    };

    const subtitleStyle = {
        fontSize: '1.5rem',
        color: 'var(--color-text-secondary)',
        marginBottom: '2rem',
    };

    const buttonStyle = {
        padding: '1rem 2rem',
        fontSize: '1.1rem',
        fontWeight: '600',
        color: 'var(--color-bg-dark)',
        background: 'var(--color-accent)',
        borderRadius: '50px',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)',
    };

    return (
        <section id="home" style={sectionStyle}>
            <h1 style={titleStyle}>Olá, sou Luan Soares</h1>
            <p style={subtitleStyle}>Front-End Developer | React & Vite Enthusiast</p>
            <a href="#projects">
                <button style={buttonStyle}>Ver Meus Projetos</button>
            </a>
        </section>
    );
};

export default Hero;
