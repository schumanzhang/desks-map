import React from 'react'
import Partition from './partition'

export default function RightArea(props){
    const {partitions} = props.data
    return(
        <svg>
          <Partition x={600} y={200} columns={3} rows={2} data={partitions[0]}/>
          <Partition x={600} y={350} columns={3} rows={2} data={partitions[1]}/>
          <Partition x={600} y={500} columns={3} rows={2} data={partitions[2]}/>
          <Partition x={600} y={650} columns={3} rows={1} data={partitions[3]}/>
        </svg>
    )
}