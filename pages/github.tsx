import axios from "axios";
import styles from "../styles/github.module.css";

function HomePage({ user }: { user: any }) {
  return (
    <>
      <img className={styles.image} src={user.avatar_url} />
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </>
  );
}

export default HomePage;

export const getServerSideProps = async (req) => {
  const { username } = req.query;

  const { data: user } = await axios.get(
    `https://api.github.com/users/${username}`
  );

  return {
    props: {
      user,
    },
  };
};
