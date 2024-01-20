//axios
import axios from "axios";



export async function getProductByCategory (category){
   return await axios.get (`https://dummyjson.com/products/category/${category}`) ;
}


