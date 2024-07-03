import Alert from '@mui/material/Alert';

export default function DefaultAlert(props) {
    return (
        <Alert {...props}>
            {props.children}
        </Alert>
    )
}