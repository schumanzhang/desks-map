import React from 'react'
import Desk from './desk'
<<<<<<< HEAD
import {desksConstants} from '../constants/desks-constants'

export default function PartitionRow(props){
    const {x, y, columns, desks} = props
    let arrDesks = []
    for(let i=0; i < columns; i++){
        let currentX = x + i * (desksConstants.deskSize + desksConstants.deskMargin)
        arrDesks.push(<Desk key={i} x={currentX} y= {y} occupied={desks[i].occupied}/>)
    }
    return (
        arrDesks
=======

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
>>>>>>> first commit
    )
}