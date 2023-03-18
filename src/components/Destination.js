import React, { useState } from 'react'

const Destination = (props) => {

  document.title = "Destination"

  const [planetIndex, setPlanetIndex] = useState(1)

  function planetHandler(value) {
    setPlanetIndex(value)
  }

  return (
    <>
      <div className="container destinationPage">
        <div className="row d-flex justify-content-start mt-5">
          <div className="col-md-5 col-10">
            <h3>01 PICK YOUR DESTINATION</h3>
          </div>
        </div>

        <div className="row d-flex justify-content-end mt-2">
          <div className="col-xl-5 col-lg-7 col-md-10 col-12">
            <ul className='d-flex justify-content-between clickingUl'>
              <li className={`${planetIndex === 1 && "forDestBg"}`} onClick={() => planetHandler(1)}>MOON</li>
              <li className={`${planetIndex === 2 && "forDestBg"}`} onClick={() => planetHandler(2)}>MARS</li>
              <li className={`${planetIndex === 3 && "forDestBg"}`} onClick={() => planetHandler(3)}>EUROPA</li>
              <li className={`${planetIndex === 4 && "forDestBg"}`} onClick={() => planetHandler(4)}>TITAN</li>
            </ul>
          </div>


        </div>

        <div className={`${planetIndex === 1 ? "showing animate__animated animate__wobble" : "planets animate__animated animate__wobble"}`}>
        <div className="row d-flex justify-content-between align-items-center ">
          <div className="col-lg-4 col-12">
            <div className="planetImgBox d-flex justify-content-center w-100">
              <img style={{maxWidth: "100%"}} src={require("../assets/moon.webp")} alt="" />
            </div>
          </div>
          <div className="col-lg-5 col-12 aboutPlanets">
            <h1 className='display-1'>MOON</h1>
            <p>See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
            <hr className='line' />
            <div className="planetInfo d-flex justify-content-between">
              <ul>
                <li><h6>AVG. DISTANCE</h6></li>
                <li><p>384,400 KM</p></li>
              </ul>
              <ul>
                <li><h6>EST. TRAVEL TIME</h6></li>
                <li><p>3 DAYS</p></li>
              </ul>
            </div>
          </div>
        </div>
        </div>





        <div className={`${planetIndex === 2 ? "showing animate__animated animate__wobble" : "planets animate__animated animate__wobble"}`}>
        <div className="row d-flex justify-content-between align-items-center planets">
          <div className="col-lg-4 col-12">
            <div className="planetImgBox d-flex justify-content-center w-100">
              <img style={{maxWidth: "100%"}} src={require("../assets/mars.webp")} alt="" />
            </div>
          </div>
          <div className="col-lg-5 col-12 aboutPlanets">
            <h1 className='display-1'>MARS</h1>
            <p>Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!</p>
            <hr className='line' />
            <div className="planetInfo d-flex justify-content-between">
              <ul>
                <li><h6>AVG. DISTANCE</h6></li>
                <li><p>225 MIL. KM</p></li>
              </ul>
              <ul>
                <li><h6>EST. TRAVEL TIME</h6></li>
                <li><p>9 MONTHS</p></li>
              </ul>
            </div>
          </div>
        </div>
        </div>




        <div className={`${planetIndex === 3 ? "showing animate__animated animate__wobble" : "planets animate__animated animate__wobble"}`}>
        <div className="row d-flex justify-content-between align-items-center planets">
          <div className="col-lg-4 col-12">
            <div className="planetImgBox d-flex justify-content-center w-100">
              <img style={{maxWidth: "100%"}} src={require("../assets/europe.webp")} alt="" />
            </div>
          </div>
          <div className="col-lg-5 col-12 aboutPlanets">
            <h1 className='display-1'>EUROPA</h1>
            <p>The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.</p>
            <hr className='line' />
            <div className="planetInfo d-flex justify-content-between">
              <ul>
                <li><h6>AVG. DISTANCE</h6></li>
                <li><p>628 MIL. KM</p></li>
              </ul>
              <ul>
                <li><h6>EST. TRAVEL TIME</h6></li>
                <li><p>3 YEARS</p></li>
              </ul>
            </div>
          </div>
        </div>
        </div>





        <div className={`${planetIndex === 4 ? "showing animate__animated animate__wobble" : "planets animate__animated animate__wobble"}`}>
        <div className="row d-flex justify-content-between align-items-center planets">
          <div className="col-lg-4 col-12">
            <div className="planetImgBox d-flex justify-content-center w-100">
              <img style={{maxWidth: "100%"}} src={require("../assets/titan.webp")} alt="" />
            </div>
          </div>
          <div className="col-lg-5 col-12 aboutPlanets">
            <h1 className='display-1'>TITAN</h1>
            <p>The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.</p>
            <hr className='line'/>
            <div className="planetInfo d-flex justify-content-between">
              <ul>
                <li><h6>AVG. DISTANCE</h6></li>
                <li><p>1.6 BIL. KM</p></li>
              </ul>
              <ul>
                <li><h6>EST. TRAVEL TIME</h6></li>
                <li><p>7 YEARS</p></li>
              </ul>
            </div>
          </div>
        </div>
        </div>

      </div>
    </>
  )
}

export default Destination