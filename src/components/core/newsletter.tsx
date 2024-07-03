import img1 from "../assets/images/JMIA-356fb835.png";
import img2 from "../assets/images/download-on-the-app-store-apple-logo-svgrepo-com.svg";
import img3 from "../assets/images/google-play-badge-logo-svgrepo-com.svg";
import search from "../assets/images/search_FILL0_wght400_GRAD0_opsz48.png";
import styles from "../../lib/styles/newsletter.module.css";

// function Newsletter() {
//   return (
//     <div className=" w-full bg-slate-500 h-96 md:h-56 lg:h-60 mt-1">
//       <div className=" w-full flex flex-col md:flex-row justify-between min-h-96 md:min-h-48 p-2 text-white">
//         <div className=" w-full">
//           <h3>KAPHstore</h3>
//         </div>

//         <div>
//           <div>
//             <h4>NEW TO KAPHstore?</h4>
//             <p>
//               Subscribe to our newsletter to get updates on our latest offers!
//             </p>
//           </div>
//           <div>
//             <div>
//               {/* <TextField
//                 sx={{
//                   width: { sm: "200px", md: "250px", lg: "300px" },
//                   height: "30px",
//                 }}
//                 size="small"
//                 id="outlined-basic"
//                 variant="outlined"
//                 color="secondary"
//                 placeholder="Enter E-mail Address"
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="start">
//                       <img width="25px" src={search} alt="" />
//                     </InputAdornment>
//                   ),
//                 }}
//               /> */}
//             </div>
//             <div>
//               <button>MALE</button>
//               <button>FEMALE</button>
//             </div>
//           </div>
//         </div>
//         <div>
//           <div>
//             <div>{/* <img width="40px" src={img1} alt="" /> */}</div>
//             <div>
//               <p>DOWNLOAD KAPHstore FREE APP</p>
//               <p>Get access to exclusive offers!</p>
//             </div>
//           </div>
//           <div>
//             {/* <img width="100px" src={img2} alt="" />
//             <img width="100px" src={img3} alt="" /> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

function Newsletter() {
  return (
    <div className={` ${styles.container}`}>
      <div className=" w-full md:w-1/3">
        <h3 className="">KAPHstore</h3>
      </div>

      <div className=" w-full md:w-1/3">
        <h4>NEW TO KAPHstore?</h4>
        <p>Subscribe to our newsletter to get updates on our latest offers!</p>
      </div>

      <div className=" w-full md:w-1/3">
        <p>DOWNLOAD KAPHstore FREE APP</p>
        <p>Get access to exclusive offers!</p>
      </div>
    </div>
  );
}
export default Newsletter;
