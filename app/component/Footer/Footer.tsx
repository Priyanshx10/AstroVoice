import React from 'react';


const Footer: React.FC = () => {
  const links = [
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
    { href: '/privacy', label: 'Privacy Policy' },
  ];

  return (
    <footer className="bg-slate-500">
      <div className="footer-content">
        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} Astor Nova Labs</p>
        </div>
        <nav className="footer-navigation">
          <ul>
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{(link.label)}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
