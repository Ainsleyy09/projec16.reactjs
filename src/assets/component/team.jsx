import React from "react";

const Team = () => {
    const teamMembers = [
        {
            name: "Siti Aisyah",
            role: "Founder & CEO",
            img: "https://png.pngtree.com/png-clipart/20250117/original/pngtree-smiling-cartoon-woman-with-headset-for-customer-support-illustrations-png-image_19913374.png"
        },
        {
            name: "Tiara Cahya",
            role: "CTO",
            img: "https://thumbs.dreamstime.com/b/smiling-cartoon-illustration-female-customer-service-representative-has-long-brown-hair-wears-glasses-headset-dressed-390988356.jpg"
        },
        {
            name: "Amelia Ardhana",
            role: "Marketing Head",
            img: "https://png.pngtree.com/png-clipart/20221008/original/pngtree-cute-cartoon-girl-png-image_8664629.png"
        },
        {
            name: "Aqila Fariza",
            role: "UI/UX Designer",
            img: "https://png.pngtree.com/png-vector/20250719/ourlarge/pngtree-girl-in-black-suit-passport-photo-avatar-illustration-png-image_16804385.webp"
        }
    ];

    return (
        <div id="team" style={{ backgroundColor: "#ffffff", padding: "80px 0" }}>
            <h2 className="text-center mb-5" style={{ color: "#0f2879", fontWeight: 700, fontSize: "2.5rem" }}>
                Meet Our Team
            </h2>

            <div className="row g-4 justify-content-center">
                {teamMembers.map((member, index) => (
                    <div key={index} className="col-sm-6 col-md-4 col-lg-3">
                        <div
                            className="card shadow-lg border-0 rounded-4 text-center p-3 h-100"
                            style={{
                                transition: "transform 0.3s, box-shadow 0.3s",
                                cursor: "pointer",
                                background: "#f8f9fa"
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.transform = "translateY(-10px)";
                                e.currentTarget.style.boxShadow = "0 15px 30px rgba(0,0,0,0.2)";
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.transform = "translateY(0)";
                                e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.1)";
                            }}
                        >
                            <img
                                src={member.img}
                                alt={member.name}
                                className="rounded-circle mb-3"
                                style={{ width: "120px", height: "120px", objectFit: "cover", margin: "0 auto", border: "3px solid #0f2879" }}
                            />
                            <div className="card-body">
                                <h5 className="card-title" style={{ color: "#0f2879", fontWeight: 600 }}>
                                    {member.name}
                                </h5>
                                <p className="card-text" style={{ color: "#495057", fontWeight: 500 }}>
                                    {member.role}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Team;
