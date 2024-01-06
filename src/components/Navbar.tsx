"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MaxWidthContainer } from "./styled/MaxWidthContainer";

const Navbar = () => {
  const path = usePathname();

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "LOCATIONS", href: "/locations" },
    { name: "ABOUT", href: "/about" },
    { name: "ATTEND CLASS", href: "/attend-a-class" },
    { name: "CONTACT US", href: "/contact-us" },
  ];

  return (
    <nav className="flex justify-center py-8 px-6 fixed z-40 w-full">
      <MaxWidthContainer>
        <ul className="text-white font-bold flex justify-between w-full max-w-[645px]">
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
        </ul>
      </MaxWidthContainer>
    </nav>
  );
};

export default Navbar;
