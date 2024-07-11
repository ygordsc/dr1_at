import { Button, Grid, TextField, Typography } from "../../components";
import HandleCreate from "../../utils/HandleCreate";

export default function Form(props) {

console.log(props.data)

    const handleSubmit = () => {   
        props.setData([...props.data, HandleCreate()]) 
    }

    return (
        <Grid sx={{marginTop: "100px"}} container>
            <Grid sx={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                margin: "0 auto",
                gap: "20px"
            }} item xl={4} md={6} xs={8}>
                <Typography variant="h4">Formulário</Typography>
                    {props.headers.map((title, idx) => (
                        <TextField label={title} id={title} variant="outlined" required fullWidth key={idx} />
                    ))}
                <Button variant="contained" type="submit" onClick={handleSubmit}>Enviar</Button>
            </Grid>
    </Grid>
    )
}