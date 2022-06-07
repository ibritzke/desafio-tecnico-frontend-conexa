import styled from "styled-components";



export const Container = styled.div`
    position: absolute;
    left: 0px;
    right: 0px;
    top: 103px;
    bottom: 40px;
    background: var(--background);
    @media only screen and (max-width: 1365px){
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const BoxFrame = styled.div`
    position: absolute;
    width: 480px;
    height: 444px;
    left: calc(50% - 480px/2 - 373px);
    top: calc(50% - 444px/2 - 1px);
    @media only screen and (max-width: 1365px){
       width: 100%;
       height: 100px;
       position: sticky;
      top: 0;
      left: 0;
    }
`;

export const TitleLogin = styled.div`
h2{
    color: var(--Blue-Dark);
    font-style: normal;
    font-weight: 700;
    font-size: 52px;
    line-height: 60px;
    text-align: center;
    letter-spacing: -2.5px;}
    @media only screen and (max-width: 1365px){
        width: 272px;
        height: 39px;
        display: inline;
        h2{
            font-style: normal;
            font-weight: 700;
            font-size: 32px;
            line-height: 39px;
            text-align: center;
            letter-spacing: -1.5px;
            
        }
    }
`;

export const ImgLogin = styled.div`
    position: absolute;
    width: 337.52px;
    height: 265.46px;
    right: 71.48px;
    top: 127px;
    @media only screen and (max-width: 1365px){
        display: none;
    }
`;

export const BoxForm = styled.div`
position: absolute;
width: 746px;
height: 444px;
left: calc(50% - 746px/2 + 240px);
top: calc(50% - 444px/2 - 1px);
@media only screen and (max-width: 1365px){
       width: 100%;
       height: 250px;
       position: sticky;
    }
`;

export const Label = styled.div`
    width: 100%;
    height: 20px;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: var(--Dark-Gray);
`;

export const Email = styled.div`
width: 100%;
height: 48px;
padding-bottom: 80px;

input {
    width: 100%;
    height: 28px;
    font-style: italic;
    font-size: 14px;
    color: var(--Gray-Dark);
    border: 2px solid transparent;
    border-radius: 0;
    box-sizing: border-box;
    border-bottom-color: var(--Gray);

::placeholder{
    font-style: italic;
    font-weight: 300;
    font-size: 14px;
    line-height: 20px;
    border: none;
    color: var(--Gray-Medium);
}
}
`;

export const Senha = styled.div`
height: 48px;
padding-bottom: 120px;
width: 100%;

input {
    width: 100%;
    height: 28px;
    font-style: italic;
    font-weight: 400;
    font-size: 14px;
    line-height: 20pxl;
    color: var(--Gray-Dark);
    border: 2px solid transparent;
    border-radius: 0;
    box-sizing: border-box;
    border-bottom-color: var(--Gray);
    background: transparent;
    outline: none;

::placeholder{
    font-style: italic;
    font-weight: 300;
    font-size: 14px;
    line-height: 20px;
    border: none;
    color: var(--Gray-Medium);
}
}
`;

export const FormLogin = styled.div`
width: 235px;
height: 264px;
left: calc(50% - 235px/2 + 0.5px);
top: calc(50% - 264px/2);
position: absolute;


`;

export const ButtonEntrar = styled.button`
width: 100%;
height: 40px;
background: var(--Blue);
border-radius: 8px;
border:none;
color: var(--white);
font-size: 14px;
font-style: normal;
font-weight: 700;
letter-spacing: 1px;
:hover{
    background: var(--white);
    color: var(--Blue);
    border: solid 1px;
}
`;



