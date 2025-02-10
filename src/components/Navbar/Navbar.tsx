import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

interface Props {
  activeSelection: string;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const Navbar = ({ activeSelection, onClick }: Props) => {
  return (
    <div className="sticky-navbar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          {/* <!-- Toggle Button for Responsive Design --> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* <!-- Navbar Links --> */}
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              {/* <!-- Tab 1 --> */}
              <li className="nav-item">
                <Link
                  className={
                    activeSelection === "homeTab"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  id="homeTab"
                  to="/"
                  onClick={onClick}
                >
                  Home
                </Link>
              </li>
              {/* <!-- Tab 2 --> */}
              <li className="nav-item">
                <Link
                  className={
                    activeSelection === "portfolioTab"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  id="portfolioTab"
                  to="/Portfolio"
                  onClick={onClick}
                >
                  Portfolio
                </Link>
              </li>
              {/* <!-- Tab 3 --> */}
              <li className="nav-item">
                <Link
                  className={
                    activeSelection === "contactTab"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  id="contactTab"
                  to="/contact"
                  onClick={onClick}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
