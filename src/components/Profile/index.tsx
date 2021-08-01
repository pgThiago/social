import styles from "./profile.styles.module.css";

import mapIcon from "./../../assets/icons/location.png";
import companyIcon from "./../../assets/icons/company.png";
import universityIcon from "./../../assets/icons/university.png";

export function Profile() {
  return (
    <aside className={styles.container}>
      <div className={styles.top}>
        <img
          src="https://vivaomundo.com.br/wp-content/uploads/2014/02/DSC_0484-2.jpg"
          alt="Profile"
        />
        <span>Kenedy Morais</span>
        <span>@kenedymorais</span>
        <span>Front-end Developer</span>
      </div>
      <span>
        <img src={mapIcon} alt="Ponto no mapa" /> Rio Branco/Acre - Brasil
      </span>
      <div className={styles.experience}>
        <span>
          <img src={companyIcon} alt="Trabalho" />
          inCicle
        </span>
        <span>
          <img src={universityIcon} alt="Estudo" /> Uninorte
        </span>
      </div>
    </aside>
  );
}
