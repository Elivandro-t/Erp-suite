import { useNavigate } from "react-router-dom";
import { Button, Container, Subtitle, Title, ZapDaiLogo, Illustration } from "./notFundcss";
import ShieldAlertIcon from '@mui/icons-material/ShieldMoon'; // Ícone de segurança

function NotFound (){
    const navigate = useNavigate();

    return (
        <Container>
            <Illustration>
                <ShieldAlertIcon style={{ fontSize: 100, color: '#26a69a', opacity: 0.2 }} />
            </Illustration>
            <Title>404</Title>
            <Subtitle>Acesso Negado: Esta área não consta no registro.</Subtitle>
            <p style={{ color: '#64748b', marginBottom: '30px' }}>
                A página que você procura foi movida ou nunca existiu em nossa base de dados.
            </p>
            <Button onClick={() => navigate("/")}>Retornar à Guarita</Button>
            <ZapDaiLogo>© Elivandro develop</ZapDaiLogo>
        </Container>
    );
};

export default NotFound;