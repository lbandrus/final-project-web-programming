import React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const MenuBar = ({ links }) => {
  const pathname = usePathname();
  const [changes, setChanges] = useState(0);

  useEffect(() => {
    setChanges((prev) => prev + 1);
  }, [pathname]);
  return (
    <nav className="navbar">
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <span className={pathname === link.url ? "active span-line" : ""}>
              <Link href={link.url} className={pathname === link.url ? "link active" : "link"}>
                {link.label}
              </Link>
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MenuBar;
