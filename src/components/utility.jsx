import React from 'react'
import './utility.css'
import utilityPattern from '../images/utility-pattern.png'

export default function Utility({polygon, x, y, width, height, points}){
    return(

        <div className="utility" style={{left: x, top: y, width: width, height: height, backgroundImage: "url(" + utilityPattern+ ")"}}/>
    )
}