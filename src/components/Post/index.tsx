import styles from "./post.styles.module.css";

import profileImg from "../../assets/images/girl-profile.jpg";
import { Button } from "../Button";

export function Post() {
  return (
    <aside className={styles.container}>
      <div className={styles.header}>
        <img src={profileImg} alt="Girl" />
        <div>
          <span className={styles.name}>Patrícia Santos</span>
          <div>
            <span className={styles.time}>🧭 Há cerca de 8 horas</span>
            <span className={styles.status}>🔐 Somente eu</span>
          </div>
        </div>
        <button>&#8964;</button>
      </div>

      <div className={styles.main}>
        <span>
          Essa publicação está configurada no modo privado "somente eu"
        </span>
        <div className={styles.bottom}>
          <span>👍 Seja o primeiro a curtir</span>
          <div>
            <span>0 comentários</span>
            <span>0 compartilhamentos</span>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <Button>👍 Curtir</Button>
        <Button>💬 Comentários</Button>
        <Button>Compartilhar</Button>
      </div>
    </aside>
  );
}
