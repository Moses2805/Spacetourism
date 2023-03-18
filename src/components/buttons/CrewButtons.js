import React from 'react';
import { IoMdRadioButtonOff } from "react-icons/io"


const CrewButtons = (props) => {
    return (
        <>
            <li onClick={() => props.crewHandler(1)}><IoMdRadioButtonOff className={`${props.crewIndex === 1 && "forCrewBg"}`} /></li>
            <li onClick={() => props.crewHandler(2)}><IoMdRadioButtonOff className={`${props.crewIndex === 2 && "forCrewBg"}`} /></li>
            <li onClick={() => props.crewHandler(3)}><IoMdRadioButtonOff className={`${props.crewIndex === 3 && "forCrewBg"}`} /></li>
            <li onClick={() => props.crewHandler(4)}><IoMdRadioButtonOff className={`${props.crewIndex === 4 && "forCrewBg"}`} /></li>
        </>
    )
}

export default CrewButtons