import React from "react";
import NavBar from "./components/navbar/NavBar";
import ProductLightBox from "./components/product-lightbox/ProductLightBox";
import ProductDescription from "./components/product-description/ProductDescription";
import classNames from "classnames";
import styles from "./App.module.css";

function App() {
  return (
    <>
    <NavBar />
    <section className={classNames(styles.container)}>
    <div className={classNames(styles["product-content"])}>
          <ProductLightBox />
          <ProductDescription />
        </div>
    </section>
    </>
  );
}

export default App;