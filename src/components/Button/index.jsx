import Button from '@mui/material/Button';

export default function DefaultButton() {
    return (
        <Button {...props}>
            {props.children}
        </Button>
    )
}