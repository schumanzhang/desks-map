import React, {Component} from 'react'
import Area from './area'
import Utility from './utility'
import Label from './label'
import { onDeskOccupancyChanged } from '../api'
import {getRequest, deleteRequest, postRequest} from '../utils/axios-utils';

export default class Office extends Component{
    constructor(props){
        super(props)
        this.state= {office: null}
        this.loadMap = this.loadMap.bind(this)
        this.handleDeskOccupancyChanged = this.handleDeskOccupancyChanged.bind(this)

        onDeskOccupancyChanged(this.handleDeskOccupancyChanged);
    }

    handleDeskOccupancyChanged(desk){
        // getRequest("http://localhost:3000/offices/1")
        // .then(response => {
        //   this.setState({office: JSON.stringify(response.data)})
          
        // })

        deleteRequest("http://localhost:3000/offices/1")
        .then(()=> {
            var tempOffice;
            if(desk.occupied)
                tempOffice = JSON.stringify(this.state.office).replace("false", "true");
            else 
                tempOffice = JSON.stringify(this.state.office).replace("true", "false");
            postRequest("http://localhost:3000/offices", JSON.parse(tempOffice))
            .then(() => {this.setState({office: tempOffice})})
        })
    }

    componentDidMount(){
        this.loadMap()
    }

    loadMap(){
        const self = this
        getRequest("http://localhost:3000/offices/1")
        .then(function(response) {
            return response.json();
        }).then(function(officeJson) {
            self.setState({office: officeJson})
        });
    }

    render(){
        const {office} = this.state
        if(!office) return null
        return(
            <div className="office">
                {office.areas.map(area => <Area area={area}/>)}
                {office.utilities.map(utility => 
                    <Utility polygon={utility.polygon} x={utility.x} y={utility.y} width={utility.width} height={utility.height} points={utility.points}/>)}
                {office.labels.map(label => <Label 
                    x={label.x} 
                    y={label.y} 
                    width={label.width} 
                    height={label.height} 
                    text={label.text} 
                    vertical={label.vertical}
                    multipleLines={label.multipleLines}
                    className={label.className}/>)}  
            </div>
        )
    }
}