import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { filterProducts } from "../Redux/actions";
import { ProductCard } from "./ProductCard";
import { Grid } from "./Styled";

export const CategoryCard = () => {
  const { isLoading, isError, filterData } = useSelector((state) => state);

  const { cat } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(filterProducts(cat));
  }, [dispatch, cat]);
  return isLoading ? (
    <h1>Just a moment...</h1>
  ) : isError ? (
    <h1>Well something went wrong here..</h1>
  ) : (
    <Grid data-testid="category-container">
      {filterData.map((data) => {
        return <ProductCard key={data.id} {...data} />;
      })}
    </Grid>
  );
};
