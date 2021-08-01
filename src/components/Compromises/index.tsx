import styles from "./compromises.styles.module.css";

import birthdayImg from "../../assets/icons/birthday.png";
import timeImg from "../../assets/icons/hourglass.png";

interface CompromisesProps {
  title: string;
  info: string;
  date?: string;
}

export function Compromises({ title, date, info }: CompromisesProps) {
  return (
    <div className={styles.container}>
      <span>
        <img src={date ? timeImg : birthdayImg} alt="Aniversáriantes" /> {title}
      </span>
      {date ? <span>{date}</span> : <span>{date}</span>}
      <span>{info}</span>
    </div>
  );
}
