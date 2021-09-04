import axios from 'axios';
import React , { useState , useEffect} from 'react'
import  {PortfolioSection , PortfolioTitle, PortfolioList, PortfolioItem , PortfolioBox , PortfolioImg, PortfolioOverlay , PortfolioTitleSpan, OverlaySpan} from './style.js'
const Portfolio = ()=>{

const [images , setImages ]= useState([]);
useEffect(() => 
    axios.get('js/data.json').then( res => setImages(res.data.portfolio))
    , []); 
const groupImages = images.map((imageItem)=>{
 return(
    <PortfolioBox key= {imageItem.id}>
    <PortfolioImg src={imageItem.image} alt=""/>
    <PortfolioOverlay>
        <OverlaySpan>
            Show Image
        </OverlaySpan>
    </PortfolioOverlay>
</PortfolioBox>
 )
})
    return(
        <PortfolioSection>
            <PortfolioTitle><PortfolioTitleSpan>My</PortfolioTitleSpan> Portfolio</PortfolioTitle>
            <PortfolioList>
                <PortfolioItem active >All</PortfolioItem>
                <PortfolioItem >HTML</PortfolioItem>
                <PortfolioItem >Photoshop</PortfolioItem>
                <PortfolioItem >Wordpress</PortfolioItem>
                <PortfolioItem >Mobile</PortfolioItem>
            </PortfolioList>
            
         
                
               {groupImages}   
                
                
          
            
        </PortfolioSection>
    )
}

export default Portfolio 