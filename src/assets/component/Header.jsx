// assets/component/Header.jsx
import React from "react";
import { Link } from "react-router";

const Header = () => {
    return (
        <div className="container-fluid header-custom">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 border-bottom">
                {/* Logo */}
                <div className="col-md-3 mb-2 mb-md-0 d-flex align-items-center">
                    <a href="/" className="d-inline-flex align-items-center text-decoration-none">
                        <img
                            src="https://img.pikbest.com/png-images/20240821/simple-modern-book-logo-vector_10745589.png!sw800" // logo buku
                            alt="Logo Buku"
                            width="40"
                            height="40"
                            className="me-2"
                        />
                        <span className="fw-bold fs-5" style={{ color: "white" }}>GoBook</span>
                    </a>
                </div>

                {/* Navbar */}
                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li><Link to="/" className="nav-link px-3 text-white">Home</Link></li>
                    <li><Link to="/books" className="nav-link px-3 text-white">Catalog</Link></li>
                    <li><Link to="/teams" className="nav-link px-3 text-white">Team</Link></li>
                    <li><Link to="/contacts" className="nav-link px-3 text-white">Contact</Link></li>
                </ul>

                {/* Buttons */}
                <div className="col-md-3 text-end">
                    <Link
                        to="/logins"
                        className="btn btn-outline-light me-2"
                        style={{ textDecoration: "none" }}
                    >
                        Sign-in
                    </Link>
                    <Link
                        to="/registers"
                        className="btn btn-light text-dark"
                        style={{ textDecoration: "none" }}
                    >
                        Sign-up
                    </Link>
                </div>
            </header>
        </div>
    );
};

export default Header;
