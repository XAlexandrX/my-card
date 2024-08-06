import styled from "styled-components";


type StyledBtnPropsType ={
    btnType?: 'default' | 'another'
}

export const Button =styled.button<StyledBtnPropsType>`
    width: 86px;
    height: 30px;
    border-radius: 5px;
    color: #4E71FE;
    border: 2px solid #4E71FE;
    margin: 10px;
    background-color: transparent;

&:hover{
    background-color: #4E71FE;
    color: #fff;
    ;
    }
`