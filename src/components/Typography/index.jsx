import Typography from '@mui/material/Typography';

export default function DefaultTypography(props) {
    return (
        <Typography {...props}>
            {props.children}
        </Typography>
    )
}