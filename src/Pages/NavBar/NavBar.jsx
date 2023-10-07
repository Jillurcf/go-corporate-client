import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isActive ? "text-blue-600" : isPending ? "pending" : ""
          }
        >
          Home
        </NavLink>
        </li>
        <li>
        <NavLink
          to="/aboutus"
          className={({ isActive, isPending }) =>
            isActive ? "text-blue-600" : isPending ? "pending" : ""
          }
        >
          About Us
        </NavLink>
        </li>
        <li>
        <NavLink
          to="/services"
          className={({ isActive, isPending }) =>
            isActive ? "text-blue-600" : isPending ? "pending" : ""
          }
        >
          Services
        </NavLink>
        </li>
        <li>
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isActive ? "text-blue-600" : isPending ? "pending" : ""
          }
        >
          Contact
        </NavLink>
        </li>
     
    </>
  );

  return (
    <div className="navbar bg-base-100 px-12 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost font-bold normal-case text-2xl">GOcorporate</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
         {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-secondary"><Link to="/login">Login</Link></button>
      </div>
    </div>
  );
};

export default NavBar;
