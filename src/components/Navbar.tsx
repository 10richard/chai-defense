import Link from "next/link";
import { MaxWidthContainer } from "./styled/MaxWidthContainer";

const Navbar = () => {
  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "LOCATIONS", href: "/locations" },
    { name: "ABOUT", href: "/about" },
    { name: "ATTEND CLASS", href: "/attend-a-class" },
    { name: "CONTACT US", href: "/contact-us" },
  ];

  return (
    <nav className="flex justify-center py-4 px-6 fixed w-full">
      <MaxWidthContainer>
        <ul className="font-bold flex justify-between w-full max-w-[645px]">
          {navLinks.map((navLink, idx) => (
            <li key={idx}>
              <Link href={navLink.href}>{navLink.name}</Link>
            </li>
          ))}
        </ul>
      </MaxWidthContainer>
    </nav>
  );
};

export default Navbar;
