import styled from "styled-components";

export const Logo = styled.div`

    width: 40%;
    height: 23.26px;
padding-left: 16px;
    top: calc(50% - 23.26px/2 + 0.13px);
    @media only screen and (max-width: 1365px){
      
       left: 0;
       width: 50%;
       justify-content: center;
    }
`;

export const TopHeader = styled.div`
    position: absolute;
    height: 57px;
    left: 0px;
    right: 0px;
    top: 0px;

    background: #FFFFFB;
    box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.05);
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
`;

export const UserInfo = styled.div`
width: 50%;
display: flex;
padding-right: 16px;
justify-content: flex-end;
    align-items: center;
`;
export const NomeUser = styled.div`
margin-right: 20px;
p{
    font-size:18px;
    color:var(--Gray-Dark);
}
@media only screen and (max-width: 495px){
    p{display:none}
}
`;
export const ButtonLogout = styled.button`
width: 80px;
height: 40px;
padding: 10px;
background: var(--white);
border-radius: 8px;
border:2px solid;
color: var(--Blue);
font-size: 14px;
font-style: normal;
font-weight: 700;
letter-spacing: 1px;
:hover{
    background: var(--Blue);
    color: var(--white);
    border: solid 1px;
}
`;
