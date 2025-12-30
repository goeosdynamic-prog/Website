import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  // Detect scroll for thin underline
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 5);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full bg-white z-50 transition-all duration-300
        ${scrolled ? "border-b border-gray-300" : "border-b-transparent"}
      `}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* LOGO */}
        <div className="flex-1 flex justify-center md:justify-start">
          <NavLink to="/">
            <img src="Logo.png" alt="Dynamic Logo" className="w-40 select-none" />
          </NavLink>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-14">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className="relative group text-black pb-1 transition-all duration-300 hover:text-gray-700"
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  <span
                    className={`
                      absolute left-0 bottom-0 h-[1px] transition-all duration-300
                      ${isActive ? "w-full bg-blue-200" : "w-0 group-hover:w-full h-[1px] bg-black"}
                    `}
                  ></span>
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden cursor-pointer relative w-4 h-4 flex flex-col justify-between items-center group"
        >
          {/* Top line */}
          <span
            className={`
              h-[2px] w-full bg-black rounded transition-all duration-300
              ${open ? "rotate-45 translate-y-1" : ""}
            `}
          ></span>

          {/* Middle line */}
          <span
            className={`
              h-[2px] w-full bg-black rounded transition-all duration-300
              ${open ? "opacity-0" : "opacity-100"}
            `}
          ></span>

          {/* Bottom line */}
          <span
            className={`
              h-[2px] w-full bg-black rounded transition-all duration-300
              ${open ? "-rotate-45 -translate-y-3" : ""}
            `}
          ></span>
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300 bg-white
          ${open ? "max-h-60 py-4 border-t" : "max-h-0 py-0"}
        `}
      >
        <div className="flex flex-col text-center space-y-5">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `
                relative text-lg transition-all duration-300
                ${isActive ? "text-black" : "text-gray-800"}
              `
              }
            >
              {({ isActive }) => (
                <span className="relative">
                  {link.name}
                  {isActive && (
                    <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-200"></span>
                  )}
                </span>
              )}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
