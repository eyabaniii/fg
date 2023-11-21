import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_product } from "../../JS/Action/ActionProduct";
import ProductCard from "./ProductCard";
import "../Product/ProductList.css";
const ProductList = () => {
  const products = useSelector((state) => state.ProductReducer.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_product());
    
  }, [dispatch]);
  return (
<div className="Productlist">
      {products?.map((product) => (
        <ProductCard product={product} key={product._id} />
      ))}
    </div>
  );
};

export default ProductList;
