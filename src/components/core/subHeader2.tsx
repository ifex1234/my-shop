import { Box, Typography } from "@mui/material";

type props = {
  title: string;
  color: string;
};

const SubHeader2 = ({ title, color }: props) => {
  return (
    <Box
      width="100%"
      height="50px"
      bgcolor={color}
      color="white"
      px={2}
      borderRadius={1}
      pt={1}
    >
      <Typography variant="h5">{title} </Typography>
    </Box>
  );
};

export default SubHeader2;
