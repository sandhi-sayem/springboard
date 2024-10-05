import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={styles.loader}>
      <span className={styles["loader-text"]}>Loading</span>
    </div>
  );
};
export default Loading;
