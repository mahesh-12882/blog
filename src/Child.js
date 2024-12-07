import React, { useState } from "react";
import { useContext } from "react";
import { Context } from "./context";
import { Consumer,Provider } from "./context";
import { Home } from "./Home";
export const Child = () => {
    const [text,setText] = useState("Rajesh");
    //useContext hook basically use for access data from context
    // const getData = useContext(Context);
    // console.log(getData);
    return (
        <div>
            <Consumer>
                {(data) => {
                    return <h1>{data.userName}</h1>
                }}
            </Consumer>

            <Provider value={{ text,setText }}>
                <Home />
            </Provider>
        </div>
    )
}