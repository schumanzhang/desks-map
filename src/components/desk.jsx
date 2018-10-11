import React from 'react'
import classNames from 'classnames'

export default function Desk({x, y, available}){
    const deskClasses= classNames("desk", {"desk--taken": !available})
    return(
        <div className={deskClasses} style={{left: x, top: y}} onClick={e=>{console.log("desk")}}/>
    )
}