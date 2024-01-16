import React from "react";

const Testimonials = () => {
    return (
        <div className="testimonail-section mt-150 mb-150">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1 text-center">
                        <div className="testimonial-sliders">
                            <Testimonial
                                avatar="assets/img/avaters/avatar1.png"
                                name="Samantha Turner"
                                role="Book Enthusiast"
                                text="Exceptional collection! I found myself immersed in a captivating world of fiction and non-fiction alike. The diversity of genres is truly commendable, making it an absolute delight for any avid reader."
                            />
                            <Testimonial
                                avatar="assets/img/avaters/avatar2.png"
                                name="Michael Patel"
                                role="Literary Explorer"
                                text="I stumbled upon a literary treasure trove! The thoughtfully curated selection offers both timeless classics and hidden gems. Each book tells a unique story, and I can't wait to explore more."
                            />
                            <Testimonial
                                avatar="assets/img/avaters/avatar3.png"
                                name="Emily Chen"
                                role="Passionate Reader"
                                text="Incredible literary finds! The depth and variety of the collection surpassed my expectations. Whether you seek adventure, romance, or knowledge, this online library has it all."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Testimonial = ({ avatar, name, role, text }) => {
    return (
        <div className="single-testimonial-slider">
            <div className="client-avater">
                <img src={avatar} alt="" />
            </div>
            <div className="client-meta">
                <h3>
                    {name} <span>{role}</span>
                </h3>
                <p className="testimonial-body">{text}</p>
                <div className="last-icon">
                    <i className="fas fa-quote-right"></i>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
