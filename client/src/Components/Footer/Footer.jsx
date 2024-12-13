import './Footer.css'

function Footer() {
    return (
        <div className="footer" style={{ backgroundColor: "black", color: "white"}}>
            <footer className="text-center text-lg-start">
                {/* Social Media Section */}
                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                    <div className="me-5 d-none d-lg-block">
                        <span>Get connected with us on social networks:</span>
                    </div>
                    <div>
                        <a href="#" className="me-4 text-reset text-white">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="me-4 text-reset text-white">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="me-4 text-reset text-white">
                            <i className="fab fa-google"></i>
                        </a>
                        <a href="#" className="me-4 text-reset text-white">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#" className="me-4 text-reset text-white">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="#" className="me-4 text-reset text-white">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                </section>

                {/* Footer Links Section */}
                <section>
                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3">
                            {/* Company Information */}
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">Company name</h6>
                                <p>
                                    Here you can use rows and columns to organize your footer content. Lorem ipsum
                                    dolor sit amet, consectetur adipisicing elit.
                                </p>
                            </div>

                            {/* Products Section */}
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                                <p><a href="#!" className="text-reset text-white">Angular</a></p>
                                <p><a href="#!" className="text-reset text-white">React</a></p>
                                <p><a href="#!" className="text-reset text-white">Vue</a></p>
                                <p><a href="#!" className="text-reset text-white">Laravel</a></p>
                            </div>

                            {/* Useful Links */}
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                                <p><a href="#!" className="text-reset text-white">Pricing</a></p>
                                <p><a href="#!" className="text-reset text-white">Settings</a></p>
                                <p><a href="#!" className="text-reset text-white">Orders</a></p>
                                <p><a href="#!" className="text-reset text-white">Help</a></p>
                            </div>

                            {/* Contact Information */}
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
                                <p><i className="fas fa-envelope me-3"></i> info@example.com</p>
                                <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
                                <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Copyright Section */}
                <div className="text-center p-4" style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}>
                    © 2021 Copyright:
                    <a className="text-reset fw-bold text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
