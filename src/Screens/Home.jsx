import React from 'react'
import Services from './Services'
// import { NavLink } from 'react-router-dom';


const Home = () => {
    return (
        
        <div>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-10 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1>
                                        Design.Development.<br></br>Products.
                                    </h1>
                                    <h3 className="my-3">
                                        We build new, exciting and cool digital products that change the way humans look at, and understand the world. 
                                    </h3>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Services />
        </div>
    )
}

export default Home
