import React from 'react'
import classNames from 'classnames'

export default function Desk(props){
    const {x, y, available} = props
    const deskClasses= classNames("desk", {"desk--taken": !available})
    return(
        <rect className={deskClasses} style={{x: x, y: y}} onClick={e=>{console.log("desk")}}/>
    )
}