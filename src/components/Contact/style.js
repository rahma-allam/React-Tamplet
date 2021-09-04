import styled from 'styled-components';


export const Drop = styled.div`
padding: 50px 0;
text-align: center
`

export const DropTitle = styled.h2`
font-size: 60px;
margin-bottom: 30px
`
export const TitleSpan = styled.span`
.drop .drop-title span {
    font-weight: normal
}`

export const Form = styled.form`
width: 70%;
 margin: auto;`
 export const FormInput = styled.input`
 box-sizing: border-box;
 outline: 0;
 padding: 5px;
 margin-bottom: 10px`

 export const InputPart= styled.div`
 overflow: hidden`

 export const Input= styled(FormInput)`
 width: 49%;`

 export const InputText= styled(Input)`
 float: left`

 export const InputEmail= styled(Input)`
 float: right`
 export const InputSub = styled(FormInput)`
 width: 100%;`

 export const TextArea = styled.textarea`
 width: 100%;
 outline: 0;
 background: #ccc`
 export const InputSubmit = styled(FormInput)`
 width: 60%;
 background: #fff;
 border: 1px solid #ccc;
 color: #888;
 cursor: pointer`

