import React, {Component} from 'react'
import Area from './area'
import Utility from './utility'
import Label from './label'
import { onMapChanged } from '../api'

export default class Office extends Component{
    constructor(props){
        super(props)
        this.state= {office: null}
        this.loadMap = this.loadMap.bind(this)

        onMapChanged(this.loadMap);
    }

    componentDidMount(){
        this.loadMap()
    }

    loadMap(){
        const self = this
        fetch("http://localhost:3000/offices/1")
        .then(function(response) {
            return response.json();
        }).then(function(officeJson) {
            console.log('officeJson:', officeJson);
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