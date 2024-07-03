import IconButton from '@mui/material/IconButton';

export default function DefaultIconButton(props) {
    return (
        <IconButton {...props}>
            {props.children}
        </IconButton>
    )
}