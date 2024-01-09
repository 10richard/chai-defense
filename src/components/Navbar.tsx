"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MaxWidthContainer } from "./styled/MaxWidthContainer";
import { useState, useEffect } from "react";

const Navbar = () => {
  const path = usePathname();
  const [navbar, setNavbar] = useState(false);

  const NavLinks = [
    { name: "HOME", href: "/" },
    { name: "LOCATIONS", href: "/locations" },
    { name: "ATTEND CLASS", href: "/attend-a-class" },
    { name: "ABOUT", href: "/about" },
    { name: "CONTACT", href: "/contact-us" },
  ];

  const LocationsLinks = [
    { name: "Location 1", href: "/locations" },
    { name: "Location 2", href: "/locations" },
    { name: "Location 3", href: "/locations" },
    { name: "Location 4", href: "/locations" },
  ];

  const Sublinks = () => (
    <div className="text-black hidden absolute max-w-[200px] w-full rounded-sm hover:flex hover:flex-col group-hover:flex group-hover:flex-col">
      {LocationsLinks.map((location, idx) => (
        <Link
          key={idx}
          href={location.href}
          className="font-medium bg-zinc-300 border-[0.5px] border-black py-2 px-4 w-full self-start hover:text-white hover:bg-zinc-600 duration-200"
        >
          {location.name}
        </Link>
      ))}
    </div>
  );

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
        <ul className="flex justify-between items-center w-full max-w-[850px]">
          {NavLinks.map((navLink, idx) => (
            <li
              key={idx}
              className={`font-bold hover:text-sky-400 duration-300 ${
                path === navLink.href ? "text-secondary" : "text-white"
              } ${navLink.name === "LOCATIONS" ? "group" : ""}`}
            >
              <Link href={navLink.href}>{navLink.name}</Link>
              {navLink.name === "LOCATIONS" && <Sublinks />}
            </li>
          ))}
          <Link
            href={"/donate"}
            className={`px-5 py-2 border border-white rounded-xl hover:bg-white hover:text-secondary duration-300 ${
              path === "/donate"
                ? "bg-white text-secondary"
                : "text-white bg-primary"
            }`}
          >
            DONATE NOW
          </Link>
        </ul>
      </MaxWidthContainer>
    </nav>
  );
};

export default Navbar;
