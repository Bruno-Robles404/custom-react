import { useEffect, useState } from "react"
import { getCategories } from "../services/categoriesService"


export const useCategory = () => {

    const [category, setCategory] = useState([])

    useEffect(() => {
        getCategories()
        .them((res)=>setCategory(res.data))
        .catch((err)=>console.log(err));
    },[]);
    
    return(category)
}
