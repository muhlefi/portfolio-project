import React from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/project", label: "Project" },
  { href: "/contact", label: "Contact" },
];

const Navbar: React.FC = () => {
  return (
    <nav className="bg-primary text-primary-foreground p-4 shadow-lg transition duration-300">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-lg font-bold">Lefi M Rachmad</a>
        <ul className="flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-muted-foreground transition duration-300 hover:scale-110"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

