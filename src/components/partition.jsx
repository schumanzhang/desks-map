import React from 'react'
import PartitionRow from './partition-row'
<<<<<<< HEAD
import {desksConstants} from '../constants/desks-constants'

export default function Partition(props){
    const {x, y, columnsCount, rows} = props
    let arrPartitionRows = []
    for(let i=0; i < rows.length; i++){
        var currentY = y + i * (desksConstants.deskSize + desksConstants.deskMargin)
        arrPartitionRows.push(<PartitionRow key={i} x={x} y={currentY} columns={columnsCount} desks={rows[i].desks}/>)
    }
    return(
        arrPartitionRows
=======

export default function Partition(props){
    const {x, y, columns, rows, data} = props
    const deskSize = 50
    let partitionRows = []
    for(let i=0; i < rows; i++){
        partitionRows.push(<PartitionRow key={i} x={x} y={y + i * deskSize} columns={columns} data={data.rows[i]}/>)
    }
    return(
        <svg>
            {partitionRows}
        </svg>
>>>>>>> first commit
    )
}