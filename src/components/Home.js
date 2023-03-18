import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

    document.title = "Home"
    return (
        <>
            <div className="container homePage">
                <div className="row d-flex justify-content-between align-items-center">
                    <div className="col-lg-5 col-12">
                        <h2>SO, YOU WANT TO TRAVEL TO</h2>
                        <h1 className='display-1'>SPACE</h1>
                        <p>Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>
                    </div>
                    <div className="col-lg-4 col-12">
                        <div className="exploreDiv d-flex w-100 justify-content-center">
                            <Link to="/Destination" className="exploreBox"><div className="exploreBox">EXPLORE</div></Link>
                        </div>
                    </div>
                </div>
                <br />

            </div>
        </>
    )
}

export default Home