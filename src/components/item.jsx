import styles from "./items.module.css";
const item = ({ fooditems, bought, handalBuyButton }) => {
  return (
    <li
      className={`${styles["kg-item"]} list-group-item  ${bought && "active"}`}
    >
      <span className={styles["kg-span"]}>{fooditems}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={handalBuyButton}
      >
        {" "}
        Buy{" "}
      </button>
    </li>
  );
};
export default item;
