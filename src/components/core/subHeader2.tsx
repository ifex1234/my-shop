import styles from "@/lib/styles/subheader.module.scss";

type props = {
  title: string;
  color: string;
};

const SubHeader2 = ({ title, color }: props) => {
  return (
    <div className={`${styles.container} ${color}`}>
      <p>{title} </p>
    </div>
  );
};

export default SubHeader2;
