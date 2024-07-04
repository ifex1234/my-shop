// import { Container } from "@mui/material";
// import { Box, Button, Typography } from "@mui/material";
// import { useDispatch } from "react-redux";
// import { addToCart, removeFromCart } from "../services/Slice";
// import FormatCurrency from "../services/FormatCurrency";

// type Props = {
//   id: number;
//   image: string;
//   title: string;
//   price: number;
//   icon?: string;
//   //   ObjArr: [];
// };
// // type
// function Categories({ ObjArr }) {
//   const dispatch = useDispatch();
//   const randomNumber = Math.floor(Math.random() * 10);
//   return (
//     <Container>
//       <Box
//         display="flex"
//         flexDirection="row"
//         flexWrap="wrap"
//         height="auto"
//         width="100%"
//         borderRadius="3px"
//         margin="10px 0"
//       >
//         {ObjArr.map((item: Props) => (
//           <Box
//             key={item.id}
//             display="flex"
//             flexDirection="column"
//             width={{ xs: "120px", md: "175px", lg: "180px" }}
//             height={{ xs: "200px", md: "300px" }}
//             margin={{ xs: "5px", lg: "1px" }}
//           >
//             <Box
//               height={{ xs: "120px", md: "200px" }}
//               width="100%"
//               sx={{ objectFit: "contain" }}
//             >
//               <img
//                 width="100%"
//                 height="40px"
//                 src={item.image}
//                 alt={item.title}
//               />
//             </Box>
//             <Typography variant="caption">{item.title}</Typography>
//             <Typography variant="caption">
//               {FormatCurrency(item.price)} -{randomNumber}%
//             </Typography>
//             <Typography>{item.icon}</Typography>

//             <Button
//               onClick={
//                 ObjArr.find((product: Props) => product.id !== item.id)
//                   ? () => dispatch(addToCart(item))
//                   : () => dispatch(removeFromCart(item.id!))
//               }
//               size="medium"
//             >
//               ADD TO CART
//             </Button>
//           </Box>
//         ))}
//       </Box>
//     </Container>
//   );
// }

// export default Categories;
