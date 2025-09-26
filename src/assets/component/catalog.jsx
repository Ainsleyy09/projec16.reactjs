import React from "react";

const Catalog = () => {
    return (
        <div id="catalog">
            <section className="hero-section py-5 text-center container">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-bold">GoBook Best Sellers</h1>
                        <p className="lead">
                            Discover our top-selling books handpicked for readers who love
                            adventure, mystery, and inspiration.
                        </p>
                        <p>
                            <a href="#" className="btn btn-primary my-2 me-2">Browse Collection</a>
                            <a href="#" className="btn btn-outline-light my-2">Learn More</a>
                        </p>
                    </div>
                </div>
            </section>

            <div className="album py-5 bg-body-tertiary">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

                        <div className="col">
                            <div className="card shadow-sm" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
                                <img
                                    src="https://m.media-amazon.com/images/I/71R7LSgGQEL._UF1000,1000_QL80_.jpg"
                                    alt="The Great Adventure"
                                    style={{
                                        width: "100%",
                                        height: "500px",
                                        objectFit: "cover"
                                    }}
                                />
                                <div className="card-body" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "180px" }}>
                                    <p className="card-text">An exciting journey through uncharted lands with unforgettable characters and epic storytelling.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Buy</button>
                                        </div>
                                        <small className="text-body-secondary">12 mins read</small>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* 2 */}
                        <div className="col">
                            <div className="card shadow-sm" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
                                <img
                                    src="https://m.media-amazon.com/images/I/71ftvoougQL._UF1000,1000_QL80_.jpg"
                                    className="card-img-top"
                                    alt="Mystery of the Night"
                                    style={{ width: "100%", height: "500px", objectFit: "cover" }}
                                />
                                <div className="card-body" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "180px" }}>
                                    <p className="card-text">Dive into a thrilling tale of suspense, secrets, and the darkness that hides in plain sight.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Buy</button>
                                        </div>
                                        <small className="text-body-secondary">8 mins read</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 3 */}
                        <div className="col">
                            <div className="card shadow-sm" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
                                <img
                                    src="https://divapress-online.com/Files/cover_buku/1692175901_-.jpeg"
                                    className="card-img-top"
                                    alt="Inspiration Daily"
                                    style={{ width: "100%", height: "500px", objectFit: "cover" }}
                                />
                                <div className="card-body" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "180px" }}>
                                    <p className="card-text">A collection of motivational stories and tips to inspire you every single day.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Buy</button>
                                        </div>
                                        <small className="text-body-secondary">15 mins read</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 4 */}
                        <div className="col">
                            <div className="card shadow-sm" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
                                <img
                                    src="https://files.idyllic.app/files/static/2806533"
                                    className="card-img-top"
                                    alt="Science Wonders"
                                    style={{ width: "100%", height: "500px", objectFit: "cover" }}
                                />
                                <div className="card-body" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "180px" }}>
                                    <p className="card-text">Explore fascinating scientific discoveries and breakthrough innovations in this must-read.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Buy</button>
                                        </div>
                                        <small className="text-body-secondary">10 mins read</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 5 */}
                        <div className="col">
                            <div className="card shadow-sm" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
                                <img
                                    src="https://templates.mediamodifier.com/5db5545e9c6a2d4111c8e42a/simple-cooking-book-cover-design-template.jpg"
                                    className="card-img-top"
                                    alt="Cooking Made Easy"
                                    style={{ width: "100%", height: "500px", objectFit: "cover" }}
                                />
                                <div className="card-body" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "180px" }}>
                                    <p className="card-text">Simple and delicious recipes that anyone can cook at home, perfect for beginners and pros.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Buy</button>
                                        </div>
                                        <small className="text-body-secondary">7 mins read</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 6 */}
                        <div className="col">
                            <div className="card shadow-sm" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
                                <img
                                    src="https://store.ums.ac.id/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/w/o/world_history_sejara_dunia_lengkap.jpg"
                                    className="card-img-top"
                                    alt="History Unveiled"
                                    style={{ width: "100%", height: "500px", objectFit: "cover" }}
                                />
                                <div className="card-body" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "180px" }}>
                                    <p className="card-text">A compelling journey into the past, revealing hidden stories and legendary events.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Buy</button>
                                        </div>
                                        <small className="text-body-secondary">20 mins read</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 7 */}
                        <div className="col">
                            <div className="card shadow-sm" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
                                <img
                                    src="https://i.redd.it/fantasy-book-covers-v0-8q607ht2fb0e1.png?width=928&format=png&auto=webp&s=ba5aa7eb1c969d13c2004f66e815e322cb5a3cd6"
                                    className="card-img-top"
                                    alt="Fantasy Realm"
                                    style={{ width: "100%", height: "500px", objectFit: "cover" }}
                                />
                                <div className="card-body" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "180px" }}>
                                    <p className="card-text">Enter a magical world full of wonder, dragons, and quests that ignite your imagination.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Buy</button>
                                        </div>
                                        <small className="text-body-secondary">18 mins read</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 8 */}
                        <div className="col">
                            <div className="card shadow-sm" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUlRtScIak71Ktc6hV_pecPkntI2Z59YR-wA&s"
                                    className="card-img-top"
                                    alt="Mind & Meditation"
                                    style={{ width: "100%", height: "500px", objectFit: "cover" }}
                                />
                                <div className="card-body" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "180px" }}>
                                    <p className="card-text">Techniques and insights to help you relax, focus, and improve your mental wellbeing daily.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Buy</button>
                                        </div>
                                        <small className="text-body-secondary">14 mins read</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 9 */}
                        <div className="col">
                            <div className="card shadow-sm" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
                                <img
                                    src="https://m.media-amazon.com/images/I/71kBuo6G00L._UF1000,1000_QL80_.jpg"
                                    className="card-img-top"
                                    alt="Tech Innovations"
                                    style={{ width: "100%", height: "500px", objectFit: "cover" }}
                                />
                                <div className="card-body" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "180px" }}>
                                    <p className="card-text">Explore cutting-edge technology trends and ideas shaping the future of our world.</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Buy</button>
                                        </div>
                                        <small className="text-body-secondary">16 mins read</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Catalog;
