import Grid from '@mui/material/Grid';

export default function DefaultGrid(props) {
    return (
        <Grid {...props}>
            {props.children}
        </Grid>
    )
}