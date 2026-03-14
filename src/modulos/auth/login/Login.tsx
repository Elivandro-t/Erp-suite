import {
    Container,
    Form,
    FormSub,
    LogoText,
    Campos,
    Erros,
    Select,
    EsquceuSenha,
    Input,
    Password,
    Foooter,
    Text,
    Or
} from "./Container"
import { useForm } from "react-hook-form";
import { useRef, useState } from "react";
import salve from "../../../localStorage/service-localStorage"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Api from "../../PaginaInicial/service/apiUsuario"
import IconButton from "@mui/material/IconButton";
import { Button, CircularProgress } from "@mui/material";
import { SendIcon } from "lucide-react";
import { AlertComponent } from "../../../components/alert/alertaComponent";

type FormData = {
    email: string;
    password: string;
};

export const LoginComponen = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const [ativaPasswd, setAtivaPasswd] = useState(false);
    const [loading, setLoading] = useState(false);
    const [logued, setLogued] = useState(false);
    
    // Referência para o campo de senha
    const senhaRef = useRef<HTMLInputElement | null>(null);

    const onSubmit = async (data: FormData) => {
        try {
            setLoading(true);
            const resposta = await Api.login(data);
            if (resposta && resposta.acessToken) {
                salve.salva_token(resposta.acessToken);
                localStorage.setItem("order", String(resposta.usuario.id));
                setLogued(true);
                window.location.href = "/";
            }
        } catch (error) {
            console.error("Erro no login", error);
        } finally {
            setLoading(false);
        }
    };

    const handleEnterFocus = (event: React.KeyboardEvent, nextRef?: React.RefObject<HTMLInputElement | null>) => {
        if (event.key === "Enter") {
            event.preventDefault();
            if (nextRef && nextRef.current) {
                nextRef.current.focus();
            }
        }
    };

    // Destrutura a ref da senha para mesclar
    const { ref: passwordRef, ...passwordProps } = register("password", {
        required: "Senha obrigatória",
    });

    return (
        <Container>
            <Form>
                <LogoText>
                    Suite <span>Core</span>
                </LogoText>
                
                <Text>Acesse sua conta para continuar</Text>
                <Or />

                <FormSub onSubmit={handleSubmit(onSubmit)}>
                    <Select>
                        <Campos
                            hasError={!!errors.email} 
                            type="email"
                            placeholder="E-mail profissional"
                            {...register("email", {
                                required: "E-mail é obrigatório",
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: "Formato inválido",
                                }
                            })}
                            onKeyDown={(e) => handleEnterFocus(e, senhaRef)}
                        />
                        <Erros>
                            {errors.email && <p>{errors.email.message}</p>}
                        </Erros>
                    </Select>

                    <Select>
                        <Input hasError={!!errors.password}>
                            <Password 
                                placeholder="Sua senha"
                                type={ativaPasswd ? "text" : "password"}
                                {...passwordProps}
                                ref={(e) => {
                                    passwordRef(e); // Ref do React Hook Form
                                    senhaRef.current = e; // Nossa Ref para o foco
                                }}
                            />
                            <IconButton onClick={() => setAtivaPasswd(!ativaPasswd)} size="small">
                                {ativaPasswd ? <VisibilityOffIcon fontSize="small" /> : <VisibilityIcon fontSize="small" />}
                            </IconButton>
                        </Input>
                        <Erros>
                            {errors.password && <p>{errors.password.message}</p>}
                        </Erros>
                    </Select>

                    <EsquceuSenha />

                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        size="large"
                        disabled={loading}
                        endIcon={loading ? <CircularProgress size={20} color="inherit" /> : <SendIcon size={18} />}
                        sx={{ 
                            bgcolor: '#26a69a', 
                            height: '50px',
                            borderRadius: '12px',
                            textTransform: 'none',
                            fontWeight: 'bold',
                            fontSize: '16px',
                            boxShadow: '0 4px 12px rgba(38, 166, 154, 0.2)',
                            '&:hover': { bgcolor: '#2bbbad', boxShadow: '0 6px 16px rgba(38, 166, 154, 0.3)' } 
                        }}
                    >
                        {loading ? 'Autenticando...' : 'Entrar'}
                    </Button>

                    {logued && <AlertComponent titulo={"success"} msg={"Login confirmado"} />}
                </FormSub>
            </Form>
            <Foooter>SuiteCore - Controle de Acesso</Foooter>
        </Container>
    );
};