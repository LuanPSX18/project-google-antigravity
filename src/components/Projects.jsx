import React from 'react';

const Projects = () => {
    const sectionStyle = {
        padding: '5rem 5%',
        textAlign: 'center',
        background: 'rgba(0,0,0,0.2)',
    };

    const titleStyle = {
        fontSize: '2.5rem',
        marginBottom: '3rem',
        color: 'var(--color-text-primary)',
    };

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        maxWidth: '1200px',
        margin: '0 auto',
    };

    const cardStyle = {
        background: 'var(--color-glass)',
        border: '1px solid var(--color-glass-border)',
        borderRadius: '16px',
        overflow: 'hidden',
        textAlign: 'left',
    };

    const imagePlaceholderStyle = {
        width: '100%',
        height: '200px',
        background: 'linear-gradient(45deg, #1a1a1a, #2a2a2a)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--color-text-secondary)',
    };

    const contentStyle = {
        padding: '1.5rem',
    };

    const projectTitleStyle = {
        fontSize: '1.2rem',
        marginBottom: '0.5rem',
        color: 'var(--color-text-primary)',
    };

    const projectDescStyle = {
        fontSize: '0.9rem',
        color: 'var(--color-text-secondary)',
        marginBottom: '1rem',
    };

    return (
        <section id="projects" style={sectionStyle}>
            <h2 style={titleStyle}>Meus Projetos</h2>
            <div style={gridStyle}>
                {[1, 2, 3].map((item) => (
                    <div key={item} style={cardStyle}>
                        <div style={imagePlaceholderStyle}>Em Breve</div>
                        <div style={contentStyle}>
                            <h3 style={projectTitleStyle}>Projeto {item}</h3>
                            <p style={projectDescStyle}>
                                Descrição do projeto que será adicionado futuramente.
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
