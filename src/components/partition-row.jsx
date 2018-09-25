import React from 'react'
import Desk from './desk'

export default function PartitionRow(props){
    const {x, y, columns, data} = props
    const deskSize = 50
    let desks = []
    for(let i=0; i < columns; i++){
        desks.push(<Desk key={i} x={ x + i * deskSize} y= {y} data={data.desks[i]}/>)
    }
    return (
        <svg>
            {desks}
        </svg>
    )
}