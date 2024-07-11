import {
    TableRow,
    TableHead,
    TableContainer,
    TableCell,
    TableBody,
    Table,
} from '@mui/material';
import { Grid } from '..';

export default function DefaultTableList(props) {

    const keys = Object.keys(props.data[0]);

    return (
        <Grid sx={{
            justifyContent: "center",
        }} container>
            <Grid sx={{
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                marginTop: "100px"
            }} md={6} sm={10} item>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                {
                                    props.headers.map((header, idx) => (
                                        <TableCell key={idx}>
                                            {header}
                                        </TableCell>
                                    ))
                                }
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {props.data.map((row, idx) => (
                                <TableRow key={idx}>
                                    {
                                        keys.map((key, idx) => (
                                            <TableCell key={idx}>
                                                {row[key]}
                                            </TableCell>
                                        ))
                                    }
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    )
}