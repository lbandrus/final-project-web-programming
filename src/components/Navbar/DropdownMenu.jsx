"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const useDropdownMenu = ({ links }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const menu = (
    <ul>
      {links.map((link, index) => (
        <li key={index}>
          <Link href={link.url} onClick={handleOpen}>
            {" "}
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
  const dropdown = (
    <nav className="dropdown">
      <button onClick={handleOpen}>Menu</button>
      {open ? menu : null}
    </nav>
  );
  return dropdown;
};

export default useDropdownMenu;
