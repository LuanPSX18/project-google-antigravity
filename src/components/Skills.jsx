import React from 'react';

const Skills = () => {
    const sectionStyle = {
        padding: '5rem 5%',
        textAlign: 'center',
    };

    const titleStyle = {
        fontSize: '2.5rem',
        marginBottom: '3rem',
        color: 'var(--color-text-primary)',
    };

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '2rem',
        maxWidth: '1000px',
        margin: '0 auto',
    };

    const cardStyle = {
        background: 'var(--color-glass)',
        border: '1px solid var(--color-glass-border)',
        padding: '2rem',
        borderRadius: '16px',
        transition: 'transform 0.3s ease, background 0.3s ease',
        cursor: 'default',
    };

    const skillNameStyle = {
        fontSize: '1.2rem',
        fontWeight: '600',
        color: 'var(--color-accent)',
    };

    const skills = ['HTML', 'CSS', 'JavaScript', 'React (Básico)'];

    return (
        <section id="skills" style={sectionStyle}>
            <h2 style={titleStyle}>Minhas Habilidades</h2>
            <div style={gridStyle}>
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        style={cardStyle}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-5px)';
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.background = 'var(--color-glass)';
                        }}
                    >
                        <h3 style={skillNameStyle}>{skill}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
