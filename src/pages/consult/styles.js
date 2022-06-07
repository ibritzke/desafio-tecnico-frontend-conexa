import styled from "styled-components";

export const Container = styled.div`
background: var(--background);
`;

export const BoxFrame = styled.div`
margin-top:60px;
width: 100%;
height: 150px;
display: flex;
justify-content: flex-start;
align-items: center;
padding: 50px;
`;

export const TitleConsult = styled.div`
    color: var(--Blue-Dark);
 h1{
     font-size: 42px;
 }
`;

export const BoxResult = styled.div`
    padding-top: 30px;
    width: 100%;
    height:500px;
    display: flex;
    justify-content: center;
    @media only screen and (max-width: 1365px){
        padding:20px
    }
`;

export const Result = styled.div`
    width: 600px;
    height:500px;
`;

export const Consultas = styled.div`
        color: var(--Gray-Dark);
        font-size: 18px;
        font-weight: 600;
        padding-bottom: 20px;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 20px;
    padding-bottom: 20px;
    align-items:center;
`;
export const Col = styled.div`
    display: flex;
    flex-direction: column;
`;


export const Nome = styled.p`
        font-size: 16px;
        font-weight: 400;
        color: var(--Gray-Dark);
`;

export const DataHora = styled.p`
       font-size: 12px;
       font-weight: 400;
       color: var(--Gray-Dark);
       padding-top: 5px;
`;

export const ButtonAtender = styled.button`
  width: 80px;
height: 40px;
padding: 10px;
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