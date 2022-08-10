import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../redux/features/cartSlice";
import { Link} from "react-router-dom";


export const Pizzas = ({ title, sizes, price, imageUrl, types, id }) => {
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);
  const typeList = ["тонкое", "традиционное"];
  const countProduct = useSelector((state) => state.cart.products.find((obj) => obj.id === id));

  const dispatch = useDispatch();
  const addToCart = () => {
    const items = {
      title,
      sizes: activeSize,
      price,
      imageUrl,
      types: typeList[activeType],
      id,
    };
    dispatch(addProducts(items));
  };
  return (
    <div class="pizza-block">
      <Link to={`/pizza/${id}`}>
        <img class="pizza-block__image" src={imageUrl} alt="Pizza" />
      </Link>
      <h4 class="pizza-block__title">{title}</h4>
      <div class="pizza-block__selector">
        <ul>
          {types.map((obj, i) => (
            <li
              key={i}
              className={activeType === i ? "active" : ""}
              onClick={() => setActiveType(i)}
            >
              {" "}
              {typeList[obj]}{" "}
            </li>
          ))}
        </ul>
        <ul>
          {sizes.map((obj, i) => (
            <li
              key={i}
              className={activeSize === i ? "active" : ""}
              onClick={() => setActiveSize(i)}
            >
              {" "}
              {obj}{" "}
            </li>
          ))}
        </ul>
      </div>
      <div class="pizza-block__bottom">
        <div class="pizza-block__price">от {price} ₽</div>
        <div onClick={addToCart} class="button button--outline button--add">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          {countProduct ?( <i>{countProduct.count}</i>) : null}
        </div>
      </div>
    </div>
  );
};
