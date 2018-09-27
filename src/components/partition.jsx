import React from 'react'
import PartitionRow from './partition-row'
import {desksConstants} from '../constants/desks-constants'

export default function Partition(props){
    const {x, y, columnsCount, rows} = props
    let arrPartitionRows = []
    for(let i=0; i < rows.length; i++){
        var currentY = y + i * desksConstants.deskSize
        arrPartitionRows.push(<PartitionRow key={i} x={x} y={currentY} columns={columnsCount} desks={rows[i].desks}/>)
    }
    return(
        <svg>
            {arrPartitionRows}
        </svg>
    )
}