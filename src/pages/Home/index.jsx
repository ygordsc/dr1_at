import { Grid } from "../../components"

export default function Home() {
    return (
        <Grid sx={{
            display: "flex", 
            flexDirection: "column", 
            height: "60vh", 
            alignItems: "center",
            justifyContent: "center"
            }} container>
            <Grid item>
                <h1 class="transition">Seja Bem-Vindo(a)</h1>
            </Grid>
        </Grid>
    )
}