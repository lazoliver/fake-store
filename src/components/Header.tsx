import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="flex justify-center border-b border-stone-300 fixed top-0 left-0 right-0 bg-white">
      <div className="flex justify-between items-center lg:w-[98rem] w-full px-5 py-5">
        <div>
          <Link to="/" className="text-2xl font-bold p-4">
            Fake Store
          </Link>
        </div>
        <div>
          <nav className="flex gap-4">
            <NavLink
              to="/contact"
              className="text-lg p-3 border border-transparent min-w-[100px] text-center rounded-lg hover:bg-stone-100 hover:border-stone-300 transition delay-2"
            >
              Contact
            </NavLink>
            <NavLink
              to="/about"
              className="text-lg p-3 border border-transparent min-w-[100px] text-center rounded-lg hover:bg-stone-100 hover:border-stone-300 transition delay-2"
            >
              Sobre
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
