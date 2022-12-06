import React from "react";
import styles from "./CSSModule.module.scss";

const CSSModule = () => {
  console.log(styles);
  return (
    <div className={`${styles.container} ${styles.title}`}>
      <span className="span">CSS Module</span>
      실습
      <button className="globalBtn">전역스타일</button>
    </div>
  );
};

export default CSSModule;
