import React from 'react';

const Header = () => {
  const headerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    padding: '1.5rem 5%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'var(--color-glass)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid var(--color-glass-border)',
    zIndex: 1000,
  };

  const logoStyle = {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: 'var(--color-accent)',
    letterSpacing: '1px',
  };

  const navStyle = {
    display: 'flex',
    gap: '2rem',
  };

  const linkStyle = {
    fontSize: '1rem',
    fontWeight: '500',
    color: 'var(--color-text-primary)',
    cursor: 'pointer',
  };

  return (
    <header style={headerStyle}>
      <div style={logoStyle}>Luan S Dev</div>
      <nav>
        <ul style={navStyle}>
          <li><a href="#home" style={linkStyle}>Home</a></li>
          <li><a href="#skills" style={linkStyle}>Habilidades</a></li>
          <li><a href="#projects" style={linkStyle}>Projetos</a></li>
          <li><a href="#contact" style={linkStyle}>Contato</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
