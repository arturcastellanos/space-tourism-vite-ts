import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <header className="navbar">
        <Link className="logo" to="/">
          <img className="logo" src="./assets/shared/logo.svg" alt="" />
        </Link>
        <div className="line"></div>
        <ol className="links">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isActive ? "active" : isPending ? "pending" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/destination">Destination</NavLink>
          </li>
          <li>
            <NavLink to="/crew">Crew</NavLink>
          </li>
          <li>
            <NavLink to="/technology">Technology</NavLink>
          </li>
        </ol>
      </header>
    </>
  );
}
