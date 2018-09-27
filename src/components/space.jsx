import React, {Component} from 'react'
import Area from './area'
import Steps from './steps'
import Cafe from './cafe'

export default class Space extends Component{
    constructor(props){
        super(props)
        this.state= {space: null}
    }

    componentDidMount(){
        const self = this
        fetch("http://localhost:3000/space")
        .then(function(response) {
            return response.json();
        }).then(function(spaceJson) {
            self.setState({space: spaceJson})
        });
    }
    render(){
        const {space} = this.state
        if(!space) return null
        return(
            <svg>
                <rect className="space"/>
                <Cafe/>
                <Steps/>
                {space.areas.map(area => <Area area={area}/>)}
            </svg>
        )
    }
}