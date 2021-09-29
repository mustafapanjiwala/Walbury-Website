import React from 'react';
import IOS from '../assets/ios.png';
import Desktop from '../assets/Desktop.png';
import UX from '../assets/ux.png';

const Services = () => {
    return (
        <>
            <div className="heading text-center">
                <h1>Services</h1>
            </div>

            <div className="container-fluid w-auto">
                <div className="row justify-content-center mx-0">
                    <div className="col-lg-4 col-md-6 col-12 mb-3 column">
                        <div className="card ">
                            <img
                                src={IOS}
                                className="card-img-top service-img"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title title">
                                    IOS/Android Development{' '}
                                </h5>
                                <p className="card-text">
                                    we develop beautiful IOS and Android mobile
                                    apps with UX as primary focus
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 mb-3">
                        <div className="card">
                            <img
                                src={Desktop}
                                className="card-img-top service-img"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title title">
                                    Desktop App Development
                                </h5>
                                <p className="card-text">
                                    we develop beautiful IOS and Android mobile
                                    apps with UX as primary focus
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 mb-3">
                        <div className="card">
                            <img
                                src={UX}
                                className="card-img-top service-img"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title title">
                                    UI/UX Design UI/UX Design
                                </h5>
                                <p className="card-text ">
                                    we develop beautiful IOS and Android mobile
                                    apps with UX as primary focus
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;
