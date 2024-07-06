// import { Link } from "@tanstack/react-router";
// import StarsIcon from "@mui/icons-material/Stars";
// import {
//   Facebook,
//   Twitter,
//   ChevronLeftOutlined,
//   ChevronRightOutlined,
//   TimeToLeaveOutlined,
//   StarHalfOutlined,
//   StarBorder,
//   ShoppingCartCheckoutOutlined,
//   Favorite,
// } from "@mui/icons-material";
// // import { FaTruck, FaUndo } from "react-icons/fa";
// // import {
// //   BsCartPlus,
// //   BsHeart,
// //   BsShieldShaded,
// //   BsStarFill,
// //   BsStarHalf,
// //   BsFacebook,
// //   BsTwitter,
// //   BsChevronLeft,
// //   BsChevronRight,
// //   BsInfo,
// //   BsCheckCircleFill,
// // } from "react-icons/bs";
// import { TopAds } from "./ads";
// import { mobile_accessories1 } from "../assets/database/categories/mobile";
// import { Box, Typography, Button } from "@mui/material";

// const ProductDetail = () => {
//   type Props = {
//     id: number;
//     image: string;
//   };
//   return (
//     <Box className="product-detail-container">
//       <TopAds />
//       <Box className="product-detail-main">
//         <Box className="product-detail-main-1">
//           <Box className="product-detail-main-1a">
//             <Box>
//               <Box>
//                 <img src={mobile_accessories1[0].image} alt="" />
//               </Box>
//               <Box className="d-flex flex-row align-items-center">
//                 <Box>
//                   {" "}
//                   <ChevronLeftOutlined />
//                 </Box>
//                 <Box
//                   style={{
//                     width: "100%",
//                     height: "100px",
//                     display: "flex",
//                     flexDirection: "row",
//                     alignItems: "center",
//                     gap: "10px",
//                   }}
//                 >
//                   {/* <Box><img height='100%' width="50px" src={mobile_accessories1[0].image} alt="" /></Box>
//                     <Box><img height='100%' width="50px" src={mobile_accessories1[1].image} alt="" /></Box>
//                     <Box><img height='100%' width="50px" src={mobile_accessories1[2].image} alt="" /></Box>
//                     <Box><img height='100%' width="50px" src={mobile_accessories1[3].image} alt="" /></Box>
//                     <Box><img height='100%' width="50px" src={mobile_accessories1[4].image} alt="" /></Box> */}
//                   {mobile_accessories1.map((item: Props) => (
//                     <Box key={item.id}>
//                       <img height="100%" width="50px" src={item.image} alt="" />
//                     </Box>
//                   ))}
//                 </Box>
//                 <Box>
//                   <ChevronRightOutlined />
//                 </Box>
//               </Box>
//               <Box>
//                 <Box>Share this product</Box>
//                 <Box className="d-flex flex-row gap-3 mt-3">
//                   {" "}
//                   <Facebook />
//                   <Twitter />
//                 </Box>
//               </Box>
//             </Box>
//             <Box className="report">Report incorrect product information</Box>
//           </Box>
//           <Box className="product-detail-main-1b">
//             <Box className="product-detail-main-1b-content-1">
//               <Box className="store-head">Official Store</Box>
//               <Box>
//                 <Favorite />
//               </Box>
//             </Box>
//             <Box className="product-detail-main-1b-content-2">
//               <Typography variant="body1">
//                 Oraimo FreePods Lite True Wireless Earbuds + Free OCD-D62
//                 DataCable
//               </Typography>
//             </Box>
//             <Box style={{ color: "blue" }}>
//               <Link>Brand: Oraimo | Similar products from Oraimo</Link>
//             </Box>
//             <Box className="product-detail-main-1b-content-3">
//               <Typography variant="body1" className="h3 my-3">
//                 ₦ 13,400
//               </Typography>
//               <Typography variant="body1" className="fs-m my-2">
//                 in stock
//               </Typography>
//               <Typography variant="body1" className="fs-m">
//                 + shipping from ₦ 250 to LEKKI-AJAH (SANGOTEDO)
//               </Typography>
//               <Typography variant="body1" className="d-flex flex-row my-3">
//                 <StarBorder /> <StarBorder /> <StarBorder /> <StarBorder />{" "}
//                 <StarHalfOutlined />
//               </Typography>
//               <Button className="add-cart-btn">
//                 <Box>
//                   <ShoppingCartCheckoutOutlined />
//                 </Box>{" "}
//                 <Box>ADD TO CART</Box> <Box></Box>
//               </Button>
//             </Box>
//           </Box>
//         </Box>

//         {/* <Box className="product-detail-main-2">
//           <Box className="bg-white mb-3 p-2 ">
//             <Box className=" border-bottom border-dark-subtle mb-1 pb-2 ">
//               <Typography
//                 variant="h5"
//                 className="fw-bold border-bottom border-dark-subtle mb-1 pb-2"
//               >
//                 DELIVERY & RETURNS{" "}
//               </Typography>
//               <Typography variant="body1">Jumia</Typography>
//               <Typography variant="body1" style={{ fontSize: "12px" }}>
//                 Free delivery on thousands of products in Lagos, Ibadan & Abuja
//                 Details
//               </Typography>
//             </Box>
//             <Box>
//               <Box className="fw-semibold my-2">Choose your location</Box>
//               <Box className="formElement">
//                 <select name="States" id="states">
//                   <option value="abia">Abia</option>
//                   <option value="adamawa">adamawa</option>
//                   <option value="akwaibom">akwaibom</option>
//                   <option value="anambra">anambra</option>
//                   <option value="bauchi">bauchi</option>
//                   <option value="bayelsa">bayelsa</option>
//                   <option value="benue">benue</option>
//                   <option value="borno">borno</option>
//                   <option value="crossriver">crossriver</option>
//                   <option value="delta">delta</option>
//                   <option value="edo">edo</option>
//                   <option value="enugu">enugu</option>
//                   <option value="gombe">gombe</option>
//                   <option value="imo">imo</option>
//                   <option value="jigawa">jigawa</option>
//                   <option value="kaduna">kaduna</option>
//                   <option value="kano">kano</option>
//                   <option value="katsina">katsina</option>
//                   <option value="kebbi">kebbi</option>
//                   <option value="kogi">kogi</option>
//                   <option value="kwara">kwara</option>
//                   <option value="lagos">Lagos</option>
//                   <option value="nassarawa">nassarawa</option>
//                   <option value="niger">niger</option>
//                   <option value="ogun">ogun</option>
//                   <option value="osun">osun</option>
//                   <option value="ondo">ondo</option>
//                   <option value="oyo">oyo</option>
//                   <option value="plateau">plateau</option>
//                   <option value="river">river</option>
//                   <option value="sokoto">sokoto</option>
//                   <option value="taraba">taraba</option>
//                   <option value="zamfara">zamfara</option>
//                   <option value="abuja">abuja</option>
//                 </select>
//               </Box>
//               <Box className="formElement">
//                 <select name="location" id="location">
//                   {loc1.map((item, idx) => (
//                     <option key={idx} value={item}>
//                       {item}
//                     </option>
//                   ))}
//                 </select>
//               </Box>
//             </Box>

//             <Box className="d-flex flex-row gap-2 my-3">
//               <Box>
//                 <TimeToLeaveOutlined />
//               </Box>
//               <Box>
//                 <Box className="d-flex justify-content-between">
//                   <Typography className="fw-semibold ">
//                     Door delivery
//                   </Typography>
//                   <Typography style={{ fontSize: "11px" }}>details</Typography>
//                 </Box>
//                 <Box style={{ fontSize: "12px" }}>Delivery Fees ₦ 620</Box>
//                 <Box style={{ fontSize: "12px" }}>
//                   Ready for delivery between 02 January & 03 January when you
//                   order within next 53mins
//                 </Box>
//               </Box>
//             </Box>

//             <Box className="d-flex flex-row gap-2 my-3">
//               <Box>
//                 <TimeToLeaveOutlined />
//               </Box>
//               <Box>
//                 <Box className="d-flex justify-content-between ">
//                   <Typography className="fw-semibold ">
//                     Pickup Station
//                   </Typography>
//                   <Typography style={{ fontSize: "11px" }}>details</Typography>
//                 </Box>
//                 <Box style={{ fontSize: "12px" }}>Delivery Fees ₦ 250</Box>
//                 <Box style={{ fontSize: "12px" }}>
//                   Arriving at pickup station between 02 January & 03 January
//                   when you order within next 53mins
//                 </Box>
//               </Box>
//             </Box>

//             <Box className="d-flex flex-row my-3 ">
//               <Box>
//                 <FaUndo />
//               </Box>
//               <Box>
//                 <Box>
//                   <Typography className="fw-semibold ">
//                     Return policy
//                   </Typography>
//                 </Box>
//                 <Box style={{ fontSize: "12px" }}>Delivery Fees ₦ 250</Box>
//                 <Box style={{ fontSize: "12px" }}>
//                   Free return within 7 days for ALL eligible items Details
//                 </Box>
//               </Box>
//             </Box>
//           </Box>

//           <Box className="d-flex flex-column gap-2 bg-white p-1">
//             <Box className="d-flex flex-row justify-content-between fw-semibold border-bottom border-dark-subtle mb-1 pb-2">
//               <Typography style={{ fontSize: "14px" }}>
//                 SELLER INFORMATION
//               </Typography>
//               <Typography>
//                 <ChevronRightOutlined />
//               </Typography>
//             </Box>
//             <Box className="d-flex flex-column   ">
//               <Typography variant="body1" className="fw-semibold">
//                 Oraimo official store-CODx
//               </Typography>
//               <Box className="d-flex flex-row justify-content-between pb-2 border-bottom border-dark-subtle">
//                 <Box className="d-flex flex-column">
//                   <Typography style={{ fontSize: "14px" }}>
//                     {" "}
//                     <b>80% </b>Seller Score
//                   </Typography>
//                   <Typography style={{ fontSize: "14px" }}>
//                     {" "}
//                     <b>6079</b> Followers
//                   </Typography>
//                 </Box>
//                 <Box>
//                   <Button className="add-cart-btn2">FOLLOW</Button>
//                 </Box>
//               </Box>
//               <Box className="d-flex flex-row align-items-center my-2 py-2">
//                 <Typography variant="h5"> Seller Performance</Typography>{" "}
//                 <Typography variant="h5">
//                   <BsInfo />
//                 </Typography>
//               </Box>

//               <Typography className="d-flex flex-row align-items-center gap-1 ">
//                 <Typography className="">
//                   <StarsIcon sx={{ color: "greenyellow" }} />
//                 </Typography>
//                 <Typography>
//                   Order Fulfillment Rate: <b>Excellent</b>
//                 </Typography>
//               </Typography>
//               <Typography className="d-flex flex-row  align-items-center gap-1">
//                 {" "}
//                 <Typography className="px-1">
//                   <BsCheckCircleFill color="blue" />
//                 </Typography>{" "}
//                 <Typography>
//                   Quality Score: <b>Average </b>
//                 </Typography>
//               </Typography>
//               <Typography className="d-flex flex-row align-items-center gap-1">
//                 {" "}
//                 <Typography>
//                   <StarsIcon sx={{ color: "greenyellow" }} />
//                 </Typography>{" "}
//                 <Typography>
//                   Customer Rating: <b>Good</b>
//                 </Typography>
//               </Typography>
//             </Box>
//           </Box>
//         </Box> */}
//       </Box>
//     </Box>
//   );
// };

// export default ProductDetail;
