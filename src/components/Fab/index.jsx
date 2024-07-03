import Fab from '@mui/material/Fab';

export default function DefaultFab(props) {
    return (
        <Fab {...props}>
            {props.children}
        </Fab>
    )
}