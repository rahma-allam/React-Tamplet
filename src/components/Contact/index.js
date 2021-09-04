import React, { Fragment } from 'react';
import Footer from './../Footer'
import {Drop , DropTitle, TitleSpan, Form,  InputPart, InputText, InputEmail, InputSub, TextArea, InputSubmit} from './style.js'

const Contact = ()=>{

    return(
        <Fragment>
        <Drop>
        <div className="container">
            <DropTitle><TitleSpan>Drop </TitleSpan>Me A line</DropTitle>
            <Form action="">
               <InputPart>
                    <InputText type="text" placeholder="Your Name"/>
                    <InputEmail type="email" placeholder="Your Email"/>
                </InputPart>
                <InputSub type="text" placeholder="Your Subject"/>
                <TextArea cols="30" rows="10" placeholder="Your Message"></TextArea>
                <InputSubmit value="Send Message" type="submit"/>
            </Form>
        </div>
    </Drop>
    <Footer/>
    </Fragment>
    )
}

export default Contact 