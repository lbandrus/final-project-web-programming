import Navbar from "@/components/Navbar/Navbar";
import DarkModeBotton from "@/components/DarkModeBotton/DarkModeBotton";
import "./Header.css";

export function Header({ links, currentPath }) {
  return (
    <header id="header">
      <div className="empty"></div>
      <Navbar links={links} breakpoint={750} currentPath={currentPath} />
      <div className="darkModeButton">
        <DarkModeBotton />
      </div>
    </header>
  );
}

export default Header;
