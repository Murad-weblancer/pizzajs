import React from "react";
import { Category } from "../components/Category";
import { Pizzas } from "../components/Pizzas";
import { useDispatch, useSelector } from "react-redux";
import { fetchPizzas } from "../redux/features/pizzaSlice";
import { useEffect } from "react";
import Skeleton from "../components/Skeleton";
import { Paginations } from "../components/Paginations";
import qs from 'qs'
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const dispatch = useDispatch();
  const { items,status } = useSelector((state) => state.pizza);
  const {categoryId,searchValue,page} = useSelector(state=>state.filter)
  const navigate = useNavigate()

  const pizzaApi = async () => {
    dispatch(fetchPizzas({
      categoryId,searchValue,page
    }));
  };
  useEffect(() => {
    pizzaApi();
  }, [categoryId,searchValue,page]);
  useEffect(()=>{
      const fetchUrl = qs.stringify({
        categoryId,searchValue,page
      })
      navigate(`?${fetchUrl}`)

  },[categoryId,searchValue,page])

  return (
    <>
      <div class="content__top">
        <Category />
      </div>
      <h2 class="content__title">Все пиццы</h2>
      <div class="content__items">
        {
          status ? [...new Array(6)].map((obj,i)=>(
            <Skeleton key={i}/>
          )): items.map((obj, i) => (
              <Pizzas  {...obj} key={i}/>
          ))
        }
      </div>
        <Paginations/>
    </>
  );
};
