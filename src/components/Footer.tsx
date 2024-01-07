import { MaxWidthContainer } from "./styled/MaxWidthContainer";
import Link from "next/link";

const Footer = () => {
  const firstQuickLinks = [
    { name: "Home", href: "/" },
    { name: "Locations", href: "/locations" },
    { name: "Attend Class", href: "/attend-a-class" },
  ];

  const secondQuickLinks = [
    { name: "About", href: "/about" },
    { name: "Contact Us", href: "/contact-us" },
    { name: "Donate Now", href: "/donate" },
  ];

  return (
    <footer className="pt-[30px] pb-[10px]">
      <MaxWidthContainer className="flex flex-col">
        <div className="flex justify-between mb-10">
          <p className="font-bold text-5xl">Logo here</p>
          <div className="flex justify-between max-w-[300px] w-full">
            <ul className="flex flex-col gap-5">
              {firstQuickLinks.map((l, idx) => (
                <li key={idx}>
                  <Link
                    href={l.href}
                    className="hover:text-primary duration-300"
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="flex flex-col gap-5">
              {secondQuickLinks.map((l, idx) => (
                <li key={idx}>
                  <Link
                    href={l.href}
                    className="hover:text-primary duration-300"
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center w-full">
          <span className="w-full h-[4px] bg-secondary mb-4 mt-1"></span>
          <p className="mb-2">
            © {new Date().getFullYear()} Chai Defense - All rights reserved.
          </p>
          {/* <Link href={"https://tenmedia.co"} target="_blank">
            Built by TenMedia
          </Link> */}
        </div>
      </MaxWidthContainer>
    </footer>
  );
};

export default Footer;
