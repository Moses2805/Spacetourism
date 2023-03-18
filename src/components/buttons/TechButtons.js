import React from 'react'

const TechButtons = (props) => {
    return (
        <>
            <li className={`${props.techIndex === 1 ? "forTechBg animate__animated animate__flash" : "forTechBgLight animate__animated animate__flash"}`} onClick={() => props.techHandler(1)}>1</li> <br />
            <li className={`${props.techIndex === 2 ? "forTechBg animate__animated animate__flash" : "forTechBgLight animate__animated animate__flash"}`} onClick={() => props.techHandler(2)}>2</li> <br />
            <li className={`${props.techIndex === 3 ? "forTechBg animate__animated animate__flash" : "forTechBgLight animate__animated animate__flash"}`} onClick={() => props.techHandler(3)}>3</li>
        </>
    )
}

export default TechButtons