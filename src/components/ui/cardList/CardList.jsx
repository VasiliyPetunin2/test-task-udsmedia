import Card from "@/components/ui/card/Card.jsx";
import styles from "./card-list.module.scss";

const CardList = ({ data }) => {
  return (
    <ul className={styles.list}>
      {data.map((item) => (
        <li key={item.id}>
          <Card data={item} />
        </li>
      ))}
    </ul>
  );
};

export default CardList;
