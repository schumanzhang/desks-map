import React from 'react'
import Partition from './partition'
import {desksConstants} from '../constants/desks-constants'

export default function Area(props){
    const {x, y, partitions} = props.area
    var currentY
    var nextY = y
    return(
        partitions.map(par => {
            currentY = nextY
            nextY = currentY + par.rows.length * (desksConstants.deskSize + desksConstants.deskMargin) - desksConstants.deskMargin + desksConstants.partitionMargin
            return (<Partition x={x} y={currentY} columnsCount={par.columnsCount} rows={par.rows} />)
        })
    )
}