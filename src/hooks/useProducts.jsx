import { useState, useEffect } from "react"
import { getProducts } from '../services';


export const useGetProducts =(limit= 4)=> {
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
    return {productsData}  
}