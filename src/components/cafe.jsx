import React from 'react'

export default function Cafe(props){
    return(
        <svg>
            <rect className="cafe" onClick={e=>{console.log("cafe")}}/>
            <text x="160" y="70" fill="black">Cafe area</text>
        </svg>
    )
}