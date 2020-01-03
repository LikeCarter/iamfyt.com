import React from "react";
import CTA from "./CTA";
import Sponsors from "./Sponsors";
import VProp from "./VProp";

export default class Home extends React.Component {
    public render = () => {
        return (
            <div>
                <section className="pt-6 pt-md-8">
                    <div className="container">
                        <div className="row align-items-center justify-content-center justify-content-md-between">
                            <div className="col-10 col-sm-8 col-md-6 order-md-2">
                                <div className="device-combo device-combo-iphonex-iphonex mb-6 mb-md-0">
                                    <div
                                        className="device device-iphonex"
                                        data-aos="fade-left"
                                    >
                                        <img
                                            src={require("../../assets/img/screenshots/mobile/fyt-home-screen.png")}
                                            className="device-screen"
                                            alt="..."
                                        />
                                        <img
                                            src={require("../../assets/img/devices/iphonex.svg")}
                                            className="img-fluid"
                                            alt="..."
                                        />
                                    </div>

                                    <div
                                        className="device device-iphonex"
                                        data-aos="fade-left"
                                        data-aos-delay="150"
                                    >
                                        <img
                                            src={require("../../assets/img/screenshots/mobile/fyt-workout-screen.png")}
                                            className="device-screen"
                                            alt="..."
                                        />
                                        <img
                                            src={require("../../assets/img/devices/iphonex.svg")}
                                            className="img-fluid"
                                            alt="..."
                                        />
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-12 col-md-6 col-lg-5"
                                data-aos="fade-right"
                            >
                                <h1 className="font-weight-bold">
                                    Grow your business with the #1 app built for
                                    <span className="text-primary">
                                        {" "}
                                        Personal Trainers.
                                    </span>{" "}
                                    <br />
                                </h1>

                                <p className="font-size-lg text-muted mb-6">
                                    Enter your email to start your 30 free day
                                    trial today!{" "}
                                    No credit card required.
                                </p>
                                <div>
        
                                <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                                        <input type="hidden" name="form-name" value="contact" />
                                        <div className="row">
                                            <div className="col">
                                                <input
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
                    </div>
                </section>
                <VProp />
                <Sponsors />
                <CTA />
            </div>
        );
    };
}
