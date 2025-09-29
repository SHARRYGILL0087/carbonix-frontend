import { NavLink } from "react-router-dom";
import { CircleUserRound } from "lucide-react";

export default function Header() {
  const navLinkClasses =
    "relative px-2 mx-3 inline-block pb-1 border-b-2 border-transparent hover:border-white transition duration-500";

  return (
    <div className="px-4 z-50 bg-[#0D2C54] flex justify-between items-center h-20 fixed top-0 left-0 w-full">

      <div className="logo flex items-center pt-2 px-6">
        <img src="logo.png" className="h-14 pb-2.5" alt="Logo" />
        <h4 className="text-white text-4xl font-garamond pl-2 hover:cursor-default pb-2.5">
          Carbonix
        </h4>
      </div>

      
      <div className="text-white text-xl font-garamond">
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
    </div>
  );
}
