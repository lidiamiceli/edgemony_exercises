import classNames from "classnames";
import styles from "./ProductDescription.module.css";
import Counter from "../counter/Counter";
import Button from "../button/Button";
import IconCart from "../icons/IconCart";

function ProductDescription() {
  return (
    <div className={classNames(styles["product-description"])}>
      <div className={classNames(styles["product-description__header"])}>
        <h2>JIMMY CHOO</h2>
        <h1>Saeda 100</h1>
      </div>
      <div className={classNames(styles["product-description__bio"])}>
        <p>
        Décolleté in raso color avorio con decorazione in cristallo
        </p>
      </div>
      <div className={classNames(styles["product-description__price"])}>
        <p>
          $ 680.00{" "}
          <span className={classNames(styles["price--discount"])}>50%</span>
        </p>
        <p>
          <span className={classNames(styles["line-through"])}>360.00</span>
        </p>
      </div>
      <div className={classNames(styles["product-description__cart"])}>
        <Counter />
        <Button>
          <IconCart />
        </Button>
      </div>
    </div>
  );
}

export default ProductDescription;