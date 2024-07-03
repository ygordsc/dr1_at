import Avatar from '@mui/material/Avatar';

export default function DefaultAvatar(props) {
    return (
        <Avatar {...props}>
            {props.children}
        </Avatar>
    )
}