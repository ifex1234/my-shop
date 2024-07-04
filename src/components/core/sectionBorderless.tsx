import styles from "@/lib/styles/sectionborderless.module.scss";
import Image from "next/image";
type Props2 = {
  id: number;
  title: string;
  image: string;
  price: number;
  header: string;
};

export const SectionBorderless = ({ arrayItem, header }: Props2) => {
  return (
    <div className={`${styles.container}`}>
      <div className=" px-2">
        <p className=" text-2xl font-bold">{header}</p>
      </div>

      <div className={`${styles.array_wrapper}`}>
        {arrayItem.slice(0, 6).map((item: Props2) => (
          <div key={item.id} className={`${styles.array_content}`}>
            <div>
              <Image src={item.image} alt={item.title} />
            </div>
            <div className=" my-1 px-1">
              <p className=" text-xs">{item.title}</p>
            </div>
            <div className=" my-1 px-1">
              <p className=" text-xs">₦{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
