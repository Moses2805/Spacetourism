import React, { useState } from 'react';
import CrewButtons from './buttons/CrewButtons';

const Crew = () => {

  document.title = "Crew"

  const [crewIndex, setCrewIndex] = useState(1)

  function crewHandler(value) {
    setCrewIndex(value)
  }

  return (
    <>
      <div className="container crewPage">
        <div className="row d-flex justify-content-start mt-5">
          <div className="col-md-5 col-12">
            <h3>02 MEET YOUR CREW</h3>
          </div>
        </div>



        <div className={`${crewIndex === 1 ? "showing animate__animated animate__bounce" : "planets animate__animated animate__bounce"}`}>
          <div className="row d-flex justify-content-between align-items-center">
            <div className="col-6 aboutStaff">
              <h3>COMMANDER</h3>
              <h1 className='display-1'>DOUGLAS HURLEY</h1>
              <p>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
              <ul className='d-flex justify-content-evenly  crewClicking'>
                <CrewButtons crewHandler={crewHandler} crewIndex={crewIndex} />
              </ul>
            </div>

            <div className="col-5">
              <div className="crewImages">
                <img src={require("../assets/image-douglas-hurley.webp")} alt="" />
              </div>
            </div>
          </div>
        </div>




        <div className={`${crewIndex === 2 ? "showing animate__animated animate__bounce" : "planets animate__animated animate__bounce"}`}>
          <div className="row d-flex justify-content-between align-items-center">
            <div className="col-6 aboutStaff">
              <h3>MISSION SPECIALIST</h3>
              <h1 className='display-1'>MARK SHUTTLEWORTH</h1>
              <p>Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.</p>
              <ul className='d-flex justify-content-evenly  crewClicking'>
                <CrewButtons crewHandler={crewHandler} crewIndex={crewIndex} />

              </ul>
            </div>

            <div className="col-5">
              <div className="crewImages">
                <img src={require("../assets/image-mark-shuttleworth.webp")} alt="" />
              </div>
            </div>
          </div>
        </div>



        <div className={`${crewIndex === 3 ? "showing animate__animated animate__bounce" : "planets animate__animated animate__bounce"}`}>
          <div className="row d-flex justify-content-between align-items-center">
            <div className="col-6 aboutStaff">
              <h3>PILOT</h3>
              <h1 className='display-1'>VICTOR GLOVER</h1>
              <p>Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.</p>
              <ul className='d-flex justify-content-evenly  crewClicking'>
                <CrewButtons crewHandler={crewHandler} crewIndex={crewIndex} />

              </ul>
            </div>

            <div className="col-5">
              <div className="crewImages">
                <img src={require("../assets/image-victor-glover.webp")} alt="" />
              </div>
            </div>
          </div>
        </div>


        <div className={`${crewIndex === 4 ? "showing animate__animated animate__bounce" : "planets animate__animated animate__bounce"}`}>
          <div className="row d-flex justify-content-between align-items-center">
            <div className="col-6 aboutStaff">
              <h3>FLIGHT ENGINEER</h3>
              <h1 className='display-1'>ANOUSHEH ANSARI</h1>
              <p>Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.</p>
              <ul className='d-flex justify-content-evenly crewClicking'>
                <CrewButtons crewHandler={crewHandler} crewIndex={crewIndex} />

              </ul>
            </div>

            <div className="col-5">
              <div className="crewImages">
                <img src={require("../assets/image-anousheh-ansari.webp")} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Crew