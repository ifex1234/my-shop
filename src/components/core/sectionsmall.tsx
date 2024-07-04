// import { Box } from "@mui/material";

// type Props = {
//   id: number;
//   image: string;
// };

// export const SectionSmall = ({ arrayItem }) => {
//   return (
//     <Box
//       display="flex"
//       flexDirection="row"
//       width={{ xs: "100%", md: "100%" }}
//       height={{ xs: "500px", sm: "850px", md: "700px", lg: "450px" }}
//       bgcolor="white"
//       flexWrap="wrap"
//       borderRadius="5px"
//       mb={{ xs: "5px", md: "10px" }}
//     >
//       {arrayItem.map((item: Props) => (
//         <Box
//           key={item.id}
//           width={{ xs: "72px", sm: "150px", md: "175px", lg: "188px" }}
//           height={{ xs: "70px", sm: "130px", lg: "110px" }}
//           m={{ xs: "5px", lg: "2px" }}
//           p={1}
//           bgcolor="black"
//         >
//           <img height="100%" width="100%" src={item.image} alt="" />
//         </Box>
//       ))}
//     </Box>
//   );
// };
// export const SectionSmall2 = ({ arrayItem }) => {
//   return (
//     <Box
//       display="flex"
//       flexDirection="row"
//       width={{ xs: "100%", md: "100%" }}
//       minHeight={{ xs: "50px", sm: "60px", md: "100px", lg: "150px" }}
//       bgcolor="white"
//       flexWrap="wrap"
//       borderRadius="5px"
//       mb={{ xs: "5px", md: "10px" }}
//     >
//       {arrayItem.map((item: Props) => (
//         <Box
//           key={item.id}
//           width={{ xs: "56px", sm: "108px", md: "160px", lg: "188px" }}
//           height={{ xs: "40px", sm: "60px", md: "100px", lg: "110px" }}
//           m={{ xs: "1.5px", lg: "2px" }}
//           p={1}
//           bgcolor="black"
//         >
//           <img height="100%" width="100%" src={item.image} alt="" />
//         </Box>
//       ))}
//     </Box>
//   );
// };
