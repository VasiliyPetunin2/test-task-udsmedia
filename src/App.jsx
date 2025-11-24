import CardList from "@/components/ui/cardList/CardList.jsx";
import { cardsData } from "@/mock/cardsData.js";
import styles from "@/app.module.scss";

function App() {
  return (
    <div className={styles.container}>
      <header className={styles.header}></header>
      <main className={styles.main}>
        <h1 className={styles.title}>UDS Media</h1>
        <h2 className={styles.title}>List</h2>
        <CardList data={cardsData} />
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}

export default App;
