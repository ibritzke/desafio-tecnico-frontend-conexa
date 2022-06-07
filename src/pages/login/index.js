
import { useState } from "react";
import { Container, BoxFrame, TitleLogin, BoxForm, ImgLogin, FormLogin, ButtonEntrar, Email, Senha, Label } from "./styles"
import FrameLogin from "../../assets/FrameLogin.png"
import auth from "../../services/auth";
import { useNavigate } from 'react-router-dom';




export const Login = () => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [alerta, setAlerta] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const data = await auth.login(email, password)

            if (!!data) {
                navigate('/consult')
            } else {
                setAlerta(true)
            }
        } catch (error) {
            setAlerta(true)
            console.log(error)
        }
    }

    return (

        <Container>
            <BoxFrame>
                <TitleLogin>
                    <h2>Faça Login</h2>
                </TitleLogin>
                <ImgLogin>
                    <img src={FrameLogin} alt="Login" />
                </ImgLogin>
            </BoxFrame>
            <BoxForm>
                <form onSubmit={handleSubmit}>
                    <FormLogin>
                        <Email>
                            <Label>E-mail</Label>
                            <input
                                type="text"
                                placeholder="Digite seu e-mail"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                        </Email>
                        <Senha>

                            <Label>Senha</Label>
                            <input
                                type="password"
                                placeholder="Digite sua senha"
                                name="senha"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <span>{alerta === true ? "login ou senha invalidos" : ""}</span>
                        </Senha>
                        <ButtonEntrar type="submit">
                            Entrar
                        </ButtonEntrar>
                    </FormLogin>
                </form>
            </BoxForm>
        </Container>

    )

}