import React from "react";
import { useSelector } from "react-redux";

export const UserList = ()=>{
    const apiData = useSelector((state)=>state.userReducer);
    const {data,loading,error} = apiData;

    console.log("apiData",apiData);

    if(loading){
       return <h2>loading....</h2>
    }

    // if(error){
    //     return error.message;

    // }


    return(
        <ul>
            {data.map((product)=>(
                <li>{product.id} {product.title}</li>
            ))}
        </ul>
    )
}