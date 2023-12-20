import { useState, useEffect } from "react"
import { getProducts, getProductByid } from '../services';


export const useGetProducts = (limit = 4) => {
  const [productsData, setproductsData] = useState([]);

  useEffect(() => {
    getProducts(limit)
      .then(response => {
        setproductsData(response.data.products)
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);
  return { productsData }
}

export const useGetProductById = (id) => {
  const [productData, setProductData] = useState({});

  useEffect(() => {
    getProductByid(id)
      .then(response => {
        setProductData(response.data)
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);
  return { productData }
}