import logo from '../../assets/logo-conexa.svg'
import { TopHeader, Logo, UserInfo, ButtonLogout, NomeUser } from './styles'
export function Header() {
    const nameUser = localStorage.getItem('name')
    return (
        <TopHeader>
            <Logo>
                <img src={logo} alt="Conexa Saúde" />
            </Logo>
            <UserInfo>
                <NomeUser>
                    <p>Olá, Dr. {nameUser}</p>
                </NomeUser>
                <ButtonLogout>Sair</ButtonLogout>
            </UserInfo>
        </TopHeader>
    )
}