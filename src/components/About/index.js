import React from 'react';
import {CreativeSection , CreativeInfo , CreativeTitle,CreativeTitleSpan ,InfoDir , InfoDesc,InfoAnchor} from  './style.js'

const About = ()=>{

    return(
       <div>
            <CreativeSection>
        <div className="container">
            <CreativeInfo>
                <CreativeTitle><CreativeTitleSpan>This is</CreativeTitleSpan> Me</CreativeTitle>
                <InfoDir>Creative Director</InfoDir>
                <InfoDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <InfoAnchor href="#">explicabo</InfoAnchor> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                </InfoDesc>
                <InfoDesc>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
        
                </InfoDesc>
            </CreativeInfo>
            </div>
        </CreativeSection>

    
   
       </div>
    
    );
}

export default About ;