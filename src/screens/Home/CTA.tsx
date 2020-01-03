import React from "react";
export default class Home extends React.Component {
    public render = () => {
        return (
            <section className="pt-6 pt-md-8">
                <div className="container pb-6 pb-md-8 border-bottom">
                    <div className="row align-items-center">
                        <div className="col-12 col-md">
                            <h3 className="font-weight-bold mb-1">Join now!</h3>

                            <p className="text-muted mb-6 mb-md-0">
                                Invest in your personal training business.
                            </p>
                        </div>

                        <div className="col-auto">
                            <form
                                name="contact"
                                method="post"
                                data-netlify="true"
                                data-netlify-honeypot="bot-field"
                            >
                                <input
                                    type="hidden"
                                    name="form-name"
                                    value="contact"
                                />
                                <div className="row">
                                    <div className="col">
                                        <input
                                            name="email"
                                            type="email"
                                            className="form-control"
                                            placeholder="Enter your email"
                                        />
                                    </div>
                                    <div className="col-auto ml-n5">
                                        <button
                                            className="btn btn-primary"
                                            type="submit"
                                        >
                                            Get Started
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    };
}
