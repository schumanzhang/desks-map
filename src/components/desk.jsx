import React from 'react'
import classNames from 'classnames'

export default function Desk({x, y, occupied}){
    const deskClasses= classNames("desk", {"desk--occupied": occupied})
    return(
        <div className={deskClasses} style={{left: x, top: y}} onClick={e=>{console.log("desk")}}/>
    )
}