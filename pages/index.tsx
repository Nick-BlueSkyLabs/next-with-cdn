import Link from "next/link";
import styles from "../styles/home.module.css";

function HomePage() {
  return (
    <>
      <h1 className={styles.title}>Welcome to Next.js!</h1>
      <Link href="/github?username=nwylynko" passHref>
        <a className={styles.link}>look me up on github</a>
      </Link>
    </>
  );
}

export default HomePage;
