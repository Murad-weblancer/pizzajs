import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../redux/features/filter";

export const Category = () => {
  const dispatch = useDispatch()
  const {categoryId} = useSelector(state=>state.filter)
  const listCategory = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  return (
    <div class="categories">
      <ul>
          {
            listCategory.map((obj,i)=>(
              <li key={i} className={categoryId === i ? 'active':''} onClick={()=>dispatch(getCategory(i))}> {obj} </li>
            ))
          }
      </ul>
    </div>
  );
};
