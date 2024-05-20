import { useState } from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const menuItems = [
  { name: "Inicio", href: "/" },
  { name: "Sobre Nosotros", href: "/about-us" },
  { name: "Four Pillars", href: "/pillars" },
  { name: "Contacto", href: "#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log("click");
    console.log("menuOpen", menuOpen);
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="py-5 px-10 flex justify-between items-center flex-wrap relative">
      <img
        width="80px"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/2560px-Cisco_logo_blue_2016.svg.png"
        alt="Cisco Logo"
      />
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-2xl">
          ☰
        </button>
      </div>
      <ul
        className={twMerge(
          "flex flex-col items-center gap-4 text-[#181D26] w-full md:w-auto absolute md:relative top-full md:top-0 left-0 bg-orange-400 p-5 rounded-xl shadow-xl transition-all duration-600 ease-in-out md:flex-row",
          clsx({
            hidden: !menuOpen,
            "md:flex": !menuOpen,
          })
        )}
      >
        {menuItems.map((item) => (
          <li key={item.name}>
            <a href={item.href} className="hover:text-blue-500">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      <button className="py-2 px-4 bg-amber-500 text-black rounded-xl hidden md:block">
        ¡Síguenos!
      </button>
    </nav>
  );
};

export default Navbar;
