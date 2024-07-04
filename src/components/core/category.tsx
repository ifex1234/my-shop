// import { Box, Button, Typography } from "@mui/material";

// const CategoryCard = ({ items }) => {
//   type Props = {
//     id: number;
//     image: string;
//     title: string;
//     price: number;
//   };
//   return (
//     <Box
//       display="flex"
//       flexDirection="row"
//       flexWrap="wrap"
//       height="auto"
//       width="100%"
//       borderRadius="3px"
//       margin="10px 0"
//       className="card-container"
//     >
//       {items.map((item: Props) => (
//         <Box
//           key={item.id}
//           display="flex"
//           flexDirection="column"
//           width="195px"
//           height="400px"
//           margin=" 5px"
//         >
//           <Box height="200px" width="100%" fontSize="12px" className="img">
//             <img src={item.image} alt={item.title} />
//           </Box>
//           <Box className="px-1">
//             <Typography>{item.title}</Typography>
//           </Box>
//           <Box className="px-1">
//             <Box>{item.price}</Box>
//           </Box>
//           <Box className="px-1 line-price">
//             <Box>{item.price} </Box>-8%
//           </Box>
//           <Box className="m-3 line-price"></Box>
//           <Box className="m-3 line-price"></Box>
//           <Box className="px-1 ">
//             <Button
//               size="medium"
//               sx={{
//                 bgcolor: "#f38908",
//                 margin: " 5px",
//                 border: "none",
//                 display: "none",
//                 fontWeight: "600",
//                 borderRadius: "0.1875rem",
//                 fontSize: "14px",
//               }}
//             >
//               ADD TO CART
//             </Button>
//           </Box>
//         </Box>
//       ))}
//     </Box>
//   );
// };

// export default CategoryCard;
