import styled from "styled-components";

export const BarFooter = styled.div`
    padding: 20px;
    bottom: 0;
    position: fixed;
    width: 100%;
    height: 60px;
    text-align: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
`;

export const ButtonAjuda = styled.button`
 width: 80px;
height: 40px;
padding: 10px;
background:var(--white);
border-radius: 8px;
border:2px solid;
color: var(--Blue);
font-size: 14px;
font-style: normal;
font-weight: 700;
letter-spacing: 1px;
:hover{
    background:  var(--Blue);
    color: var(--white);
    border: solid 1px;
}
`;

export const ButtonNovaConsulta = styled.button`
width: 160px;
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

