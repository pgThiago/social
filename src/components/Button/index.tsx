import { useState } from "react";

import styles from "./button.styles.module.css";

interface ButtonProps {
  children: React.ReactNode;
}

export function Button({ children }: ButtonProps) {
  const [hasLiked, setHasLiked] = useState(false);
  function handleLike() {
    setHasLiked(!hasLiked);
  }
  return (
    <button
      onClick={handleLike}
      className={
        hasLiked ? styles.container + " " + styles.liked : styles.container
      }
    >
      {children?.toString().includes("Curtir") && hasLiked
        ? "Remover curtida"
        : children}
    </button>
  );
}
