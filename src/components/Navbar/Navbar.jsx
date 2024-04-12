"use client";
import { useEffect, useState } from "react";
import MenuBar from "./MenuBar";
import DropdownMenu from "./DropdownMenu";
import "./Navbar.css";
const Navbar = () => {
  const navLinks = [
    { id: 1, url: "/", label: "Home" },
    { id: 2, url: "/about", label: "About" },
    { id: 3, url: "/projects", label: "Projects" },
    { id: 4, url: "/uses", label: "Uses" },
  ];
  const [size, setSize] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth);
      console.log(size);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [size]);
  if (size < 650) return <DropdownMenu links={navLinks} />;
  return <MenuBar links={navLinks} />;
};

export default Navbar;
