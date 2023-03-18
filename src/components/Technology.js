import React, { useState } from 'react';
import TechButtons from './buttons/TechButtons';


const Technology = () => {

    document.title = "Technology"

    const [techIndex, setTechIndex] = useState(1)

    function techHandler(value) {
        setTechIndex(value)
    }

    return (
        <>
            <div className="container technologyPage">
                <div className="row d-flex justify-content-start mt-5">
                    <div className="col-lg-5 col-md-8 col-12">
                        <h3>03 SPACE LAUNCH 101</h3>
                    </div>
                </div>


                <div className={`${techIndex === 1 ? "showing mt-4 animate__animated animate__bounce" : "planets animate__animated animate__bounce mt-4"}`}>
                    <div className="row d-flex justify-content-between align-items-center">
                        <div className="col-md-6 col-12 aboutTech">

                            <div className="vehicleBox" style={{width: "100px"}}>
                                <ul className='techClicking d-flex'>
                                    <TechButtons techIndex={techIndex} techHandler={techHandler} />
                                </ul>
                                <div className="infoVehicle">
                                    <h6>THE TERMINOLOGY...</h6>
                                    <h1>LAUNCH VEHICLE</h1>
                                    <div className="col-md-12 col-10">
                                        <p>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>
                                    </div
                                </div>
                            </div>

                        </div>

                        <div className="col-md-5 col-12">
                            <div className="techImages d-flex justify-content-center w-100">
                                <img style={{ maxWidth: "100%" }} src={require("../assets/image-launch-vehicle-portrait.webp")} alt="" />
                            </div>
                        </div>
                    </div>
                </div>



                <div className={`${techIndex === 2 ? "showing animate__animated animate__bounce mt-4" : "planets v mt-4"}`}>
                    <div className="row d-flex justify-content-between align-items-center">
                        <div className="col-md-6 col-12 aboutTech">

                            <div className="vehicleBox" style={{width: "100px"}}>
                                <ul className='techClicking d-flex'>
                                    <TechButtons techIndex={techIndex} techHandler={techHandler} />

                                </ul>
                                <div className="infoVehicle">
                                    <h6>THE TERMINOLOGY...</h6>
                                    <h1>SPACEPORT</h1>
                                    <div className="col-md-12 col-10">
                                        <p>A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth's rotation for launch.</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="col-md-5 col-12">
                            <div className="techImages d-flex justify-content-center w-100">
                                <img style={{ maxWidth: "100%" }} src={require("../assets/image-spaceport-portrait.webp")} alt="" />
                            </div>
                        </div>
                    </div>
                </div>






                <div className={`${techIndex === 3 ? "showing animate__animated animate__bounce mt-4" : "planets animate__animated animate__bounce mt-4"}`}>
                    <div className="row d-flex justify-content-between align-items-center">
                        <div className="col-md-6 col-12 aboutTech">

                            <div className="vehicleBox" style={{width: "100px"}}>
                                <ul className='techClicking d-flex'>
                                    <TechButtons techIndex={techIndex} techHandler={techHandler} />

                                </ul>

                                <div className="infoVehicle">
                                    <h6>THE TERMINOLOGY...</h6>
                                    <h1>SPACE CAPSULE</h1>
                                    <div className="col-md-12 col-10">
                                        <p>A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.</p>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className="col-md-5 col-12">
                            <div className="techImages d-flex justify-content-center w-100">
                                <img style={{ maxWidth: "100%" }} src={require("../assets/image-space-capsule-portrait.webp")} alt="" />
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </>
    )
}

export default Technology
