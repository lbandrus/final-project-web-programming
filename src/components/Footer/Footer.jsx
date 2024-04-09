import PropTypes from "prop-types";
import "./Footer.css"; // Import the CSS file
import Link from "next/link";

function Footer() {
  const navLinks = [
    { id: 1, url: "/", label: "Home" },
    { id: 2, url: "/about", label: "About" },
    { id: 3, url: "/projects", label: "Projects" },
    { id: 4, url: "/uses", label: "Uses" },
  ];
  return (
    <footer data-testid="footer" className="footer">
      <ul>
        {navLinks.map((link, index) => (
          <li key={index} data-testid={`footerLink${index}`}>
            <Link href={link.url}>{link.label}</Link>
          </li>
        ))}
      </ul>
      <p data-testid="footerContent">© John Doe All rights reserved. {new Date().getFullYear()}</p>
    </footer>
  );
}

Footer.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Footer;
