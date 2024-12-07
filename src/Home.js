import React from "react";
import { Consumer } from "./context";
export const Home = ()=>{
    return(
       <Consumer>
          {(data)=> {
            return(<>
               <button onClick={()=>data.setText("Ravi")}>Button</button>
               <h2>{data.text}</h2>
            </>)
          }}
            
       </Consumer>
    )
}