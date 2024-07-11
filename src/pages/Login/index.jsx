import infnetlogo from "../../infnetlogo.png";
import { Alert, Avatar, Box, Button, Grid, TextField, Typography } from "../../components";
import HandleLogin from "../../utils/HandleLogin";
import { useNavigate } from "react-router-dom";

export default function Login(props) {

    const navigate = useNavigate();
    
    function HandleSubmit() {
        const alert = document.getElementById("alert");
        alert.style.visibility = "hidden" ? alert.style.display = "visible" : alert.style.display = "hidden";
        HandleLogin(props.login, props.setLogin);
        navigate("/");
    }

    return (
        <Box
            sx={{
                marginTop: 12,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Avatar sx={{ width: 100, height: 100, marginBottom: "30px" }} src={infnetlogo} />
            <Typography component="h1" variant="h4">
                Login
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="senha"
                    label="Senha"
                    type="password"
                    id="senha"
                />
                <Button
                type="submit"
                    fullWidth
                    variant="contained"
                    onClick={HandleSubmit}
                    sx={{ mt: 3, mb: 2 }}
                >
                    Entrar
                </Button>
                <Grid container>
                    <Grid item>
                        <a href="#">
                            {"Não possui uma conta? Registre-se"}
                        </a>
                    </Grid>
                </Grid>
                <Grid sx={{
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    height: "300px"
                }} container>
                    <Alert variant="outlined" severity="success" id="alert" style={{visibility: "hidden"}}>
                        Login efetuado com sucesso
                    </Alert>
                </Grid>
            </Box>
        </Box>
    );
}