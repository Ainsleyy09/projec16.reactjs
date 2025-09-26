import React from "react";

const Contact = () => {
    return (
        <div id="contact" className="container my-5">
            <h2 className="text-center mb-5" style={{ color: "#0f2879", fontWeight: 700, fontSize: "2.5rem" }}>
                Contact Us
            </h2>

            <div className="row g-4 justify-content-center align-items-start">

                {/* Form Card */}
                <div className="col-lg-7">
                    <div className="card shadow-lg border-0 rounded-4 p-4 h-100" style={{ borderTop: "5px solid #0f2879" }}>
                        <h5 className="card-title mb-4" style={{ color: "#0f2879", fontWeight: 600 }}>Send Us a Message</h5>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label fw-semibold">Name</label>
                                <input type="text" className="form-control shadow-sm rounded-3" id="name" placeholder="Your Name" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email" className="form-label fw-semibold">Email</label>
                                <input type="email" className="form-control shadow-sm rounded-3" id="email" placeholder="you@example.com" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="message" className="form-label fw-semibold">Message</label>
                                <textarea className="form-control shadow-sm rounded-3" id="message" rows="6" placeholder="Write your message..."></textarea>
                            </div>

                            <button type="submit" className="btn shadow-sm rounded-3 px-4" style={{background:"#0f2879", color:"white"}}>
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

                {/* Info Card */}
                <div className="col-lg-4">
                    <div className="card shadow-lg border-0 rounded-4 p-4 h-100" style={{ backgroundColor: "#e7f1ff", borderLeft: "5px solid #0f2879" }}>
                        <h5 className="card-title mb-3" style={{ color: "#0f2879", fontWeight: 600 }}>Reach Us</h5>
                        <p className="card-text mb-3 text-secondary">
                            We're here to help you. Feel free to send us a message or contact through our social media.
                        </p>
                        <p className="mb-2"><strong>Email:</strong> contact@gobook.com</p>
                        <p className="mb-2"><strong>Phone:</strong> +62 812 3456 7890</p>
                        <p className="mb-0"><strong>Address:</strong> Jl. Kemang No. 12, Jakarta</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contact;
