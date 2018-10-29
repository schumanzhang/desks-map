import React from 'react'
import './label.css'
import classNames from 'classnames'

export default function Label({x, y, width, height, text, className, vertical, multipleLines}){
    let labelClasses = classNames("label", className, {"label--vertical": vertical})
    let lineHeight = !multipleLines? height + "px" : ""
    return(
        <div className={labelClasses} style={{left: x, top: y, width, height, lineHeight}}>{text}</div>
    )
}