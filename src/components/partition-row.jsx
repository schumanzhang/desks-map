import React from 'react'
import Desk from './desk'
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
    )
}