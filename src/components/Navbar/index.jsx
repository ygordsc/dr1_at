import { Grid, Button } from "../";
import HandleLogin from "../../utils/HandleLogin";
import { Link } from "react-router-dom";

export default function DefaultNavbar(props) {

    function HandleClick() {
        HandleLogin(props.login, props.setLogin);
    }

    return (
        <Grid sx={{
            backgroundColor: "#4a4c42", 
            alignItems: "center", 
            display: "flex",
            padding: "15px",
            [`@media (max-width: 600px)`]: {
                flexDirection: "column",
                textAlign: "center",
                paddingBottom: "30px",
            }
            }} container>
            <Grid sx={{
                display: "flex", 
                flexDirection: "row", 
                padding: "15px",
                gap: "25px",
                fontSize: "20px",
                [`@media (max-width: 600px)`]: {
                    flexDirection: "column"
                }
            }} item xl={11} md={10} sm={9} xs={8}> 
                <Link to="/" style={{color: "white"}}>Home</Link>
                <Link to="/form" style={{color: "white"}}>Formulário</Link>
                <Link to="/list" style={{color: "white"}}>Lista</Link>
            </Grid>
            <Grid item xl={1} md={2} sm={3} xs={4}>
                <Button size="large" variant="contained" onClick={HandleClick}>Logout</Button>
            </Grid>
        </Grid>
    )
}