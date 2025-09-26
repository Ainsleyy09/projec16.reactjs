import React from "react";

const Footer = () => {
    return (
        <div style={{ backgroundColor: "#2b4a87", color: "white" }}>
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-4 my-0 border-top-0 container">
                <div className="col-md-4 d-flex align-items-center">
                    <a
                        href="/"
                        className="mb-3 me-2 mb-md-0 text-decoration-none lh-1"
                        aria-label="Logo"
                    >
                        <svg className="bi" width="30" height="24" aria-hidden="true">
                            <use xlinkHref="#bootstrap"></use>
                        </svg>
                    </a>
                    <span className="mb-3 mb-md-0" style={{ color: "white" }}>
                        © 2025 Siti Aisyah. All rights reserved.
                    </span>
                </div>

                <ul className="nav justify-content-end list-unstyled d-flex gap-4">
                    <li>
                        <a href="https://www.instagram.com/slcca_?igsh=MnI2eDBrbTY5amdu" aria-label="Instagram">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/733/733558.png"
                                alt="Instagram"
                                width="28"
                                height="28"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Ainsleyy09" aria-label="GitHub">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/733/733609.png"
                                alt="GitHub"
                                width="28"
                                height="28"
                            />
                        </a>
                    </li>
                </ul>
            </footer>
        </div>
    );
};

export default Footer;
