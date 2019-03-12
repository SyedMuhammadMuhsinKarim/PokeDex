import React from "react";

const Navbar = () => {
  function openNav() {
    // .style.width = "250px";
  }

  /* Set the width of the side navigation to 0 */
  function closeNav() {
    // .style.width = "0";
  }

  return (
    <nav className="navbar navbar-expand-md bg-primary navbar-dark">
      <a className="navbar-brand" href="#">
        Toon Network Pakistan
      </a>
      <button
        className="navbar-toggler"
        type="button"
        onClick="openNav()"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
