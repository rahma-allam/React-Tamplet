import styled from 'styled-components'


export const ProfilSection = styled.div`
padding: 50px 0;
overflow: hidden;
`

export const ProfilPart = styled.div`
width: 50%;
float: left
`

export const ProfilList = styled.ul`
list-style: none
`

export const ProfilItem = styled.li`
margin-bottom: 8px

`

export const ProfilItemSpan = styled.span`
display: inline-block;
width: 100px;
font-weight: bold`

export const SPanWeb = styled.span`
font-weight: normal;
color: #eb5424
`

export const Skills = styled.div`
width: 50%;
float: left;
`

export const SkillsDesc = styled.div`
    font-size: 15px;
    color: #888;
    line-height: 1.5;
    margin-bottom: 20px`

export const SkillsBar = styled.div`
overflow: hidden;
padding: 10px 0;
margin-bottom: 10px`

export const BarTitle = styled.span`
float: left;
`

export const Perc = styled.span`
float: right;
    margin-right: 100px
`
export const Parent = styled.div`
height: 2px;
clear: both;
background: #f8f8f8;
position: relative;
top: 5px
`

export const ParentSpan = styled.span`
background: #eb5424;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    bottom: 0
`


export const  Span1= styled(ParentSpan)`
width: 100%;
` 
export const  Span2= styled(ParentSpan)`
width: 90%;
`
export const  Span3= styled(ParentSpan)`
width: 80%;
`


export const Title = styled.h2`
font-size: 40px; 
 margin-bottom: 20px`

