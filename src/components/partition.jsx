import React from 'react'
import PartitionRow from './partition-row'

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
    )
}