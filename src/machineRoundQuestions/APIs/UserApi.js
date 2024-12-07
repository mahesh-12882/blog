import React, { useEffect, useState } from "react";
import axios from "axios";
import { pendingData,getData,failedData } from "../../Store/actions";
import { useDispatch,useSelector } from "react-redux";

export  const UserApi = ()=>{
    // const apiData = useSelector((state)=>state.userReducer);
    // const {data,loading,error} = apiData;

    const [apiData,setApiData] = useState([]);
    const [isError,setIsError] = useState(null);
    const  [isLoading,setIsLoading] = useState(false);

    const dispatch = useDispatch();

    function getProducts() {
        // try{
            setIsLoading(true);
            fetch("https://fakesteapi.com/products")
            .then((response)=>{
               return response.json();
            }).then((products)=>{
                console.log(products)
                setApiData(products);
                setIsLoading(false);
            }).catch((error)=>{
                setIsError(error);
                setIsLoading(false);

            })
            // console.log(console.log(products.data))
            // setApiData(products.data);
            // setIsLoading(false);

        // }catch(error){
        //     console.log(error);
        //     // return  new Error(error)
        //     showBoundary(error);
        // }finally{
        //     setIsLoading(false);
        // }
       
    }
    useEffect(()=>{
        getProducts();
    },[])

    if(isLoading){
       return <h2>Loading...</h2>
    }

    if(isError){
      return <p>{isError.message}</p>
    }
    return(
       <>
             <ul>
            {apiData.map((product)=>(
                <li>{product.id} {product.title}</li>
            ))}
        </ul>
       </>
    )
}