import Image from "next/image";
import styles from "../../lib/styles/sectionwithprice.module.scss";
type Props = {
  id: number;
  image: string;
  title: string;
};
export const Sectionwithprice = ({ arrayItem }) => {
  return (
    <div className={`${styles.container}`}>
      {arrayItem.map((contents: Props) => (
        <div className={`${styles.map_wrapper}`} key={contents.id}>
          <div
          // width={{ xs: "90px", sm: "100px", md: "250px", lg: "165px" }}
          // height={{ xs: "125px", sm: "100px", md: "150px" }}
          // margin={{ xs: "5px 6.5px", sm: "0.2vw", md: "10px", lh: "5px" }}
          >
            <Image src={contents.image} alt={contents.title} priority />
            <div className={`${styles.content}`}>
              <p className=" font-semibold text-xs">{contents.title}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
