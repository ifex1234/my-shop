import Image from "next/image";
import style from "../../lib/styles/ads.module.scss";
import image from "../../../public/images/Choplife-brands-top-strip (1).gif";

export const TopAds = () => {
  return (
    <div className={`${style.container}`}>
      <Image className={`${style.img}`} src={image} alt="top ads" />
    </div>
  );
};
// export const CategoryAds = () => {
//   return (
//     <div className=" w-full m-3">
//         <div className=" w-3/4 ml-11">
//             <Image src={image} alt="adverts"/>
//         </div>
//     </div>
//   );
// };
