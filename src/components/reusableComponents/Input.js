import React, { useState } from "react";

export const Input = (props)=>{
    let [value,setValue] = useState('');

    const handleChange = (event)=>{
        setValue(event.target.value);
    }


    return(
      <>
        
        <input name="username" value={value} onChange={handleChange}/>
        {props.renderTextBelow(value)}
      </>
    )
}