import React from "react";
import style from "./style.module.css";

type CategoriesProps = {
  value: number;
  onChangeCategory: (idx: number) => void;
};

const categories = ["Все", "1", "2"];

const Categories: React.FC<CategoriesProps> = ({ value, onChangeCategory }) => {
  return (
    <div className={style.category}>
      {categories.map((category, index) => (
        <button
          className={value === index ? "activeBtn" : ""}
          onClick={() => onChangeCategory(index)}
          key={index}
          type="button"
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
