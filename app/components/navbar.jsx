import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Navbar({ isDarkMode, setIsDarkMode, isDetailPage }) {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  const navigationLinks = [
    { href: "top", label: "Home" },
    { href: "about", label: "About Me" },
    { href: "services", label: "Services" },
    { href: "work", label: "My Work" },
    { href: "contact", label: "Contact Me" },
  ];

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>

      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${
          isScroll
            ? "bg-white/60 backdrop-blur-lg shadow-sm dark:bg-dark-theme dark:shadow-white/20"
            : ""
        }`}
      >
        {isDetailPage ? (
          <Link href="/">
            <Image
              src={isDarkMode ? assets.logo_dark : assets.logo}
              alt=""
              className="w-35 cursor-pointer mr-14"
            />
          </Link>
        ) : (
          <a href="#top">
            <Image
              src={isDarkMode ? assets.logo_dark : assets.logo}
              alt=""
              className="w-35 cursor-pointer mr-14"
            />
          </a>
        )}

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll
              ? ""
              : "bg-white/50 shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"
          } `}
        >
          {navigationLinks.map((link) => (
            <li key={link.href}>
              {isDetailPage ? (
                <Link
                  href={`/#${link.href}`}
                  className="font-Ovo hover:text-blue-600"
                >
                  {link.label}
                </Link>
              ) : (
                <a className="font-Ovo" href={`#${link.href}`}>
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button onClick={() => setIsDarkMode((prev) => !prev)}>
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt=""
              className="w-6"
            />
          </button>
          {isDetailPage ? (
            <Link
              href="/#contact"
              className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50"
            >
              Contact{" "}
              <Image
                src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
                alt="logo"
                className="w-3"
              />
            </Link>
          ) : (
            <a
              href="#contact"
              className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50"
            >
              Contact{" "}
              <Image
                src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
                alt="logo"
                className="w-3"
              />
            </a>
          )}

          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt=""
              className="w-6"
            />
          </button>
        </div>

        {/* mobile menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-dark-hover dark:text-white"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt=""
              className="w-5 cursor-pointer"
            />
          </div>

          {navigationLinks.map((link) => {
            <li key={link.href}>
              {isDetailPage ? (
                <Link
                  href={`/#${link.href}`}
                  className="font-Ovo"
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  className="font-Ovo"
                  onClick={closeMenu}
                  href={`#${link.href}`}
                >
                  {link.label}
                </a>
              )}
            </li>;
          })}
        </ul>
      </nav>
    </>
  );
}
