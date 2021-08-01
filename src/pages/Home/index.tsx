import { Compromises } from "../../components/Compromises";
import { Post } from "../../components/Post";
import { Profile } from "../../components/Profile";

import styles from "./home.styles.module.css";

export function Home() {
  return (
    <div className={styles.container}>
      <aside className={styles.box1}>
        <Profile />
      </aside>
      <main className={styles.box2}>
        <Post />
        <Post />
      </main>
      <aside className={styles.box3}>
        <Compromises
          title="Aniversáriantes"
          info="Nenhum dos seus amigos comemora aniversário hoje"
        />
        <Compromises
          title="Pendências"
          date="Seg, 21 de Jun"
          info="Você não possui nenhuma pendência para hoje"
        />
      </aside>
    </div>
  );
}
