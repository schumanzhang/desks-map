import React from 'react'
import classNames from 'classnames'

<<<<<<< HEAD
export default function Desk({x, y, occupied}){
    const deskClasses= classNames("desk", {"desk--occupied": occupied})
    return(
        <div className={deskClasses} style={{left: x, top: y}} onClick={e=>{console.log("desk")}}/>
=======
export default function Desk(props){
    const {x, y, data} = props
    const deskClasses= classNames("desk", {"desk--taken": !data.available})
    return(
        <rect className={deskClasses} style={{x: x, y: y}} onClick={e=>{console.log("desk")}}/>
>>>>>>> first commit
    )
}