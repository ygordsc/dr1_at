import Button from '@mui/material/Button';

export default function DefaultButton(props) {
    return (
        <Button {...props}>
            {props.children}
        </Button>
    )
}