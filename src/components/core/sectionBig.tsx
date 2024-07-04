import { productsData } from "@/lib/assets/section2";
// import Progress from "@/components/ui/progress";
import styles from "@/lib/styles/sectionbig.module.scss";
import Image from "next/image";

const SectionBig = () => {
  type Props = {
    id: number;
    image: string;
    title: string;
    price: number;
    itemLeft?: string;
    value?: number;
    itemLeftValue: number;
  };

  return (
    <div className={`${styles.container}`}>
      {productsData.slice(0, 6).map((content) => (
        <div className={`${styles.arrayItem}`} key={content.id}>
          <div>
            <Image src={content.image} alt={content.title} />
          </div>
          <div>
            <p>{content.title}</p>
          </div>
          <div>
            <p>₦ {content.price}</p>
          </div>
          <div>
            <p> Items left:{content.itemLeft}</p>
            {/* <Progress value={content.itemLeftValue} /> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionBig;
