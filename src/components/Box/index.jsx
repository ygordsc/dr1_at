import { Box } from "@mui/material";

const DefaultBox = (props) => {
	return <Box {...props}>{props.children}</Box>;
};

export default DefaultBox;
