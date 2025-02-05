import { useState } from "react";
import { navLinks } from "../constant";
import Theme from "../components/Theme";

const NavItems = () => (
  <div className="flex justify-center items-center gap-4">
    <ul className="nav-ul">
      {navLinks.map((item) => (
        <li key={item.id} className="nav-li">
          <a href={item.href} className="nav-li_a">
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-lg bg-white/90 dark:bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a
            href="#home"
            className="text-white-500 dark:text-neutral-400 font-bold text-2xl dark:hover:text-white transition-colors"
          >
            Herbert
          </a>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleMenu}
              className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
              aria-label="Toggle menu"
            >
              <img
                src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
                alt="toggle"
                className="w-10 h-10 bg-black-100 dark:bg-transparent p-2 rounded-full"
              />
            </button>
            <Theme />
          </div>

          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>

      <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
        <nav className="p-5 bg-white/45 dark:bg-black-200">
          <NavItems onClick={closeMenu} />
        </nav>
      </div>
    </header>
  );
};
export default Navbar;
