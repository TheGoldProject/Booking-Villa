"use client";

import { navbarLinks } from "@/data/constants";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useScroll } from "@/hooks/use-scroll";

const NavbarLinks = navbarLinks.map(({ label, link }) => {
  const [baseLink, hashLink] = link.split("#");

  return {
    label,
    baseLink,
    hashLink: hashLink ? hashLink : null,
  };
});

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { scrollToSection } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Change background after 50px scroll
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-sm transition-colors duration-200 text-white text-xl font-bold ${
        isScrolled ? "bg-cyan-400/70" : ""
      } ${!isHome && "bg-cyan-400/70"}`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center ">
        {/* Logo */}
        <h1
          className={`text-4xl font-bold transition-all duration-200 ${
            isScrolled ? "text-[30px]" : ""
          }`}
        >
          TG Villa
        </h1>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8 py-5">
          {NavbarLinks.map((item, i) =>
            item.hashLink ? (
              <Link
                key={i}
                href={item.baseLink}
                onClick={(e) => scrollToSection(e, item.hashLink)}
                className="border-b-2 border-transparent hover:border-white"
              >
                {item.label}
              </Link>
            ) : (
              <Link
                key={i}
                href={item.baseLink}
                className="border-b-2 border-transparent hover:border-white"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* CTA Button */}
        {/* <Button size="sm" className="md:ml-4" onClick={(e) => scrollToSection(e, "contact")}>
          Book Now
        </Button> */}
      </div>
    </header>
  );
}
