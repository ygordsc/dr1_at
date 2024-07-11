import { Grid, TableList } from "../../components";

export default function List(props) {
    return (
        <Grid container>
            <TableList
                headers={props.headers}
                title={"Cadastro"}
                data={props.data}
            />
        </Grid>
    )
}