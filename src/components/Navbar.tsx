"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MaxWidthContainer } from "./styled/MaxWidthContainer";
import { useState, useEffect } from "react";

const Navbar = () => {
  const path = usePathname();
  const [navbar, setNavbar] = useState(false);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "LOCATIONS", href: "/locations" },
    { name: "ATTEND CLASS", href: "/attend-a-class" },
    { name: "ABOUT", href: "/about" },
    { name: "CONTACT US", href: "/contact-us" },
  ];

  if (typeof window !== "undefined") {
    useEffect(() => {
      const changeBackground = () => {
        if (window.scrollY >= 80) {
          setNavbar(true);
        } else {
          setNavbar(false);
        }
      };

      window.addEventListener("scroll", changeBackground);
    }, []);
  }

  return (
    <nav
      className={`flex justify-center py-5 px-6 fixed z-40 w-full duration-500 ${
        navbar ? "bg-black bg-opacity-75" : ""
      }`}
    >
      <MaxWidthContainer className="flex justify-center">
        <ul className="text-white font-bold flex justify-between items-center w-full max-w-[850px]">
          {navLinks.map((navLink, idx) => (
            <li
              key={idx}
              className={`hover:text-sky-400 duration-300 ${
                path === navLink.href ? "text-sky-400" : ""
              }`}
            >
              <Link href={navLink.href}>{navLink.name}</Link>
            </li>
          ))}
          <Link
            href={"https://paypal.com"}
            target="_blank"
            className="px-5 py-2 bg-sky-500 border border-white rounded-xl hover:bg-white hover:text-sky-400 duration-300"
          >
            DONATE NOW
          </Link>
        </ul>
      </MaxWidthContainer>
    </nav>
  );
};

export default Navbar;
