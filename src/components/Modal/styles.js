import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  top: 0;
`;

export const ModalWrapper = styled.div`
  border-radius: 10px;
  width: 600px;
  height: auto;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #ffffff;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  z-index: 10;
  padding: 30px;
  @media (min-width: 600) {
    width: 100%;
  }
`;

export const ModalHeader = styled.div`
  color: #000;
  padding-top: 10px;
  padding-bottom: 20px;
h2{
  color: var(--Blue-Dark)
}
  
`;

export const ModalBody = styled.div`
  height: 300px;
  color: #333333;
  font-size: 14px;
  padding:10px;
  display: flex;
`;

export const ModalFooter = styled.div`
 padding-top:20px;
  padding-bottom:10px;
display: flex;
align-items: center;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-between;
`;

export const ButtonSalvar = styled.button`
 width: 100px;
height: 40px;
padding: 10px;
background:var(--Blue);
border-radius: 8px;
border:2px solid;
color: var(--white);
font-size: 14px;
font-style: normal;
font-weight: 700;
letter-spacing: 1px;
:hover{
    background:  var(--white);
    color: var(--Blue);
    border: solid 1px;
}
`;
export const ButtonCancelar = styled.button`
 width: 100px;
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