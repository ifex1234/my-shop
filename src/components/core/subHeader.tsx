import { Typography, Box } from "@mui/material";

type Props = {
  item1: string;
  item2: string;
  color: string;
};
const SubHeader = ({ item1, item2, color }: Props) => {
  return (
    <Box
      width="100%"
      bgcolor={color}
      height={50}
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      color="#fff"
      px={2}
      alignItems="center"
    >
      <Box>
        <Typography> {item1}</Typography>
      </Box>
      <Box>
        <Typography>{item2}</Typography>
      </Box>
    </Box>
  );
};

export default SubHeader;
