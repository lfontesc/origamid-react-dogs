import React from "react";
import { useLocation } from "react-router";
import styles from "./UserHeader.module.css";
import UserHeaderNav from "./UserHeaderNav";

const UserHeader = () => {
  const [title, setTitle] = React.useState("");
  const location = useLocation();
  React.useEffect(() => {
    const { pathname } = location;
    switch (pathname) {
      case "/conta/postar":
        setTitle("Pode Sua Foto");
        break;
      case "/conta/estatisticas":
        setTitle("Estatísticas");
        break;
      default:
        setTitle("Minha Conta");
    }
  }, [location]);
  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
