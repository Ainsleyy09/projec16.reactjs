import React from "react";

const Register = () => {
    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-5">
                    <div className="card p-4 shadow-lg rounded-4" style={{ borderTop: "5px solid #0f2879" }}>
                        <h2 className="text-center mb-4" style={{ color: "#0f2879", fontWeight: 700 }}>
                            Sign Up
                        </h2>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label fw-semibold" style={{ color: "#0f2879" }}>
                                    Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control shadow-sm rounded-3"
                                    id="name"
                                    placeholder="Your Name"
                                    required
                                    style={{ borderColor: "#0f2879", color: "#0f2879" }}
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email" className="form-label fw-semibold" style={{ color: "#0f2879" }}>
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="form-control shadow-sm rounded-3"
                                    id="email"
                                    placeholder="you@example.com"
                                    required
                                    style={{ borderColor: "#0f2879", color: "#0f2879" }}
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="password" className="form-label fw-semibold" style={{ color: "#0f2879" }}>
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control shadow-sm rounded-3"
                                    id="password"
                                    placeholder="Enter password"
                                    required
                                    style={{ borderColor: "#0f2879", color: "#0f2879" }}
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="confirmPassword" className="form-label fw-semibold" style={{ color: "#0f2879" }}>
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control shadow-sm rounded-3"
                                    id="confirmPassword"
                                    placeholder="Confirm password"
                                    required
                                    style={{ borderColor: "#0f2879", color: "#0f2879" }}
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn w-100 shadow-sm rounded-3"
                                style={{ backgroundColor: "#0f2879", color: "white", fontWeight: 600 }}
                            >
                                Sign Up
                            </button>
                        </form>

                        <p className="text-center mt-3" style={{ color: "#0f2879" }}>
                            Already have an account? <a href="/logins" style={{ color: "#0f2879", fontWeight: 600 }}>Sign In</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
