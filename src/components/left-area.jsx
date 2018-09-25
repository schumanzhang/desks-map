import React from 'react'
import Partition from './partition'

export default function LeftArea(props){
    const {partitions} = props.data
    return(
        <svg>
          <Partition x={150} y={350} columns={2} rows={2} data={partitions[0]}/>
          <Partition x={150} y={500} columns={2} rows={2} data={partitions[1]}/>
          <Partition x={150} y={650} columns={2} rows={2} data={partitions[2]}/>
          <Partition x={150} y={800} columns={2} rows={2} data={partitions[3]}/>
        </svg>
    )
}