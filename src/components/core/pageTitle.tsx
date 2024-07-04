import { Box, Typography } from "@mui/material";

type Props = {
  title: string;
};
export const PageTitle = ({ title }: Props) => {
  return (
    <Box
      width="98%"
      height="40px"
      m="15px 0"
      borderRadius="5px"
      fontWeight="600"
      fontSize="large"
    >
      <Typography variant="h5">{title}</Typography>
    </Box>
  );
};
