import { NavLink } from "react-router-dom";
import { CircleUserRound, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClasses =
    "relative px-2 mx-3 inline-block pb-1 border-b-2 border-transparent hover:border-white transition duration-500";

  return (
    <div className="px-4 z-50 bg-[#0D2C54] flex justify-between items-center h-20 fixed top-0 left-0 w-full">
      {/* Logo */}
      <div className="logo flex items-center pt-2 px-2">
        <img src="logo.png" className="h-12 md:h-14 pb-2.5" alt="Logo" />
        <h4 className="text-white text-2xl md:text-4xl font-garamond pl-2 hover:cursor-default pb-2.5">
          Carbonix
        </h4>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex text-white text-lg md:text-xl font-garamond">
        <nav className="flex items-center">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${navLinkClasses} ${isActive ? "border-white " : ""}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/buyer"
            className={({ isActive }) =>
              `${navLinkClasses} ${isActive ? "border-white " : ""}`
            }
          >
            Buyer
          </NavLink>

          <NavLink
            to="/seller"
            className={({ isActive }) =>
              `${navLinkClasses} ${isActive ? "border-white " : ""}`
            }
          >
            Seller
          </NavLink>

          <NavLink
            to="/admin"
            className={({ isActive }) =>
              `${navLinkClasses} ${isActive ? "border-white " : ""}`
            }
          >
            Admin
          </NavLink>

          <NavLink
            to="/map"
            className={({ isActive }) =>
              `${navLinkClasses} ${isActive ? "border-white " : ""}`
            }
          >
            Map
          </NavLink>

          <NavLink
            to="/user"
            className="pl-4 pr-4 transform transition-transform duration-300 hover:scale-105"
          >
            <CircleUserRound />
          </NavLink>
        </nav>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center text-white">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-[#0D2C54] text-white flex flex-col items-center py-4 space-y-4 md:hidden font-garamond text-lg">
          <NavLink to="/" onClick={() => setIsOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/buyer" onClick={() => setIsOpen(false)}>
            Buyer
          </NavLink>
          <NavLink to="/seller" onClick={() => setIsOpen(false)}>
            Seller
          </NavLink>
          <NavLink to="/admin" onClick={() => setIsOpen(false)}>
            Admin
          </NavLink>
          <NavLink to="/map" onClick={() => setIsOpen(false)}>
            Map
          </NavLink>
          <NavLink to="/user" onClick={() => setIsOpen(false)}>
            <CircleUserRound />
          </NavLink>
        </div>
      )}
    </div>
  );
}
