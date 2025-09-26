import React from "react";

const Login = () => {
    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-5">
                    <div className="card p-4 shadow-lg rounded-4" style={{ borderTop: "5px solid #0f2879" }}>
                        <h2 className="text-center mb-4" style={{ color: "#0f2879", fontWeight: 700 }}>
                            Login
                        </h2>

                        <form>
                            {/* Email */}
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label fw-semibold" style={{ color: "#0f2879" }}>
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="form-control shadow-sm rounded-3"
                                    id="email"
                                    placeholder="you@example.com"
                                    style={{ borderColor: "#0f2879", color: "#0f2879" }}
                                />
                            </div>

                            {/* Password */}
                            <div className="mb-4">
                                <label htmlFor="password" className="form-label fw-semibold" style={{ color: "#0f2879" }}>
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control shadow-sm rounded-3"
                                    id="password"
                                    placeholder="Your password"
                                    style={{ borderColor: "#0f2879", color: "#0f2879" }}
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="d-grid mb-3">
                                <button
                                    type="submit"
                                    className="btn btn-primary shadow-sm rounded-3"
                                    style={{ backgroundColor: "#0f2879", borderColor: "#0f2879", fontWeight: 600 }}
                                >
                                    Sign In
                                </button>
                            </div>

                            {/* Signup Link */}
                            <div className="text-center">
                                <a href="/signup" style={{ color: "#0f2879", fontWeight: 600, textDecoration: "none" }}>
                                    Create an account
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
