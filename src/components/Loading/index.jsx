import LoadingButton from '@mui/lab/LoadingButton';

export default function DefaultLoadingButton(props) {
    return (
        <LoadingButton {...props}>
            {props.children}
        </LoadingButton>
    )
}