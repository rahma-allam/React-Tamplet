import axios from 'axios';
import React , {useState , useEffect} from 'react'
import {SocialMediaSection , Social , SocialIcon , SocialP,SocialSpan, SocialInfo2 } from './style.js'
const SocialMe = ()=>{
 
     const  [data , setData ] = useState([]);
     useEffect(()=>{
         axios.get("js/data.json").then(res =>setData(res.data.social))
     }
        ,[]);
        const  info = data.map( dataMem =>{
    return(
        <Social key={dataMem.id}  item={dataMem.id}>
            <SocialIcon className={dataMem.icon}></SocialIcon>
            <SocialP>
                <SocialSpan>{dataMem.title}</SocialSpan>
                <SocialInfo2>{dataMem.body}</SocialInfo2>
            </SocialP>
        </Social>
            )
        }) 
    return(
         <SocialMediaSection>
        
          {info}
        
       </SocialMediaSection>
    
 
    )
}

export default SocialMe 