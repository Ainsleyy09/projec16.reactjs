import React from "react";

const Home = () => {
    return (
        <div className="container my-5">
            <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                    <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
                        Discover the Magic: Harry Potter – A GoBook Best Seller!
                    </h1>
                    <p className="lead">
                        Join Harry, Hermione, and Ron as they embark on thrilling journeys filled with magic, friendship, and courage. Experience the series that has captured hearts worldwide. Harry Potter – now a best seller on GoBook!
                    </p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                        <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Buy Now</button>
                        <button type="button" className="btn btn-outline-secondary btn-lg px-4">Preview</button>
                    </div>
                </div>

                <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                    <img className="rounded-lg-3" src="https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_360,c_scale,dpr_1.5/jackets/9781408855652.jpg" alt="" width="300" height="450" />
                </div>
            </div>
        </div>
    )
}

export default Home;