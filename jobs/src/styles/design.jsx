import styled from "styled-components"

export const Div = styled.div`
  background-color: #eedae4;
  height: 450px;
  width: 450px;
  & > input {
    width: 80%;
    height: 30px;
    margin: 10px;
  }

  & > button {
      width: 80%;
      height: 50px;
  }
  & >input :hover{
    background-color: lightgrey;
  }
`
export const Div2 = styled.div`
background-color: #94e8fd;
height: 200px;
width: 200px;
margin: 10px;
justify-content: center;
`