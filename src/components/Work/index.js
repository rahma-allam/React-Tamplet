import React, { Component } from 'react'
import { WorkSection , WorkTitle , WorkPart, PartDesc , PartIcon, PartTitle, PartLine} from './style.js';
import axios from 'axios'

class Work extends Component{

    state ={
        works : []
    }
    componentDidMount = ()=>{
       axios.get('js/data.json').then(res =>this.setState(
           {works:res.data.works}
        ))    
    }

    render(){

        let {works}= this.state
        let worksList = works.map((work)=>{
            return(
                <WorkPart   first={work.id} key={work.id}>
                <PartIcon className={work.icon_name}></PartIcon>
                <PartTitle >{work.title}</PartTitle>
                <PartLine />
                <PartDesc>
                {work.body}
                </PartDesc>
            </WorkPart>
            )
        })

        return(
           
            <WorkSection className="work">
            <div className="container">
                <WorkTitle className="work-title"><span>My</span> Work</WorkTitle>
               
                {worksList}  
            </div>
        </WorkSection>
        )
    }
}

export default Work 