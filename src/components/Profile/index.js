import React from 'react';
import {ProfilSection , ProfilPart,
    Parent,  ProfilList , ProfilItem ,ProfilItemSpan ,
    Span1,SPanWeb, BarTitle, Span2, Span3 ,Skills , SkillsBar, SkillsDesc , Title}   from './style.js'

const Profile = ()=>{


        return(
        <ProfilSection>
        <div className="container">
            <ProfilPart>
                <Title><span>My </span>Profile</Title>
                <ProfilList>
                    <ProfilItem>
                        <ProfilItemSpan>Name</ProfilItemSpan>
                        Hamza Nabil
                    </ProfilItem>
                    <ProfilItem>
                        <ProfilItemSpan>Birthday</ProfilItemSpan>
                        21/1/1996
                    </ProfilItem>
                    <ProfilItem>
                        <ProfilItemSpan>Address</ProfilItemSpan>
                        Ain shams
                    </ProfilItem>
                    <ProfilItem>
                        <ProfilItemSpan>Phone</ProfilItemSpan>
                        4444 5555 6666
                    </ProfilItem>
                    <ProfilItem>
                        <ProfilItemSpan>Email</ProfilItemSpan>
                        hamza@hamza.com
                    </ProfilItem>
                    <ProfilItem>
                        <ProfilItemSpan>Website</ProfilItemSpan>
                        <SPanWeb>www.google.com</SPanWeb>
                    </ProfilItem>
                </ProfilList>
            </ProfilPart>
            
            <Skills>
                <Title>Some <span>skills</span></Title>
                <SkillsDesc>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                </SkillsDesc>
                <SkillsBar>
                    <BarTitle>Bootstrap</BarTitle>
                    <SkillsBar>100%</SkillsBar>
                    <Parent>
                        <Span1></Span1>
                    </Parent>
                </SkillsBar>
                
                <SkillsBar>
                    <BarTitle>CSS3</BarTitle>
                    <SkillsBar>90%</SkillsBar>
                    <Parent>
                        <Span2></Span2>
                    </Parent>
                </SkillsBar>
                
                <SkillsBar>
                    <BarTitle>Photoshop</BarTitle>
                    <SkillsBar>80%</SkillsBar>
                    <Parent>
                        <Span3></Span3>
                    </Parent>
                </SkillsBar>
            </Skills>
            
        </div>
    </ProfilSection>
    )
}

export default Profile 