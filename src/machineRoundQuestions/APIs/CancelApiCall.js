import React, { useEffect, useState } from "react";

export const CancelApiCall = () => {
    const [data, setData] = useState([]);

    const getApi = async (url,signal) => {
        const response = await fetch(url, signal);
        const result = await response.json();
        return result;
    }

    useEffect(() => {
        const controller = new AbortController();

        const fetchPokemon = async () => {
            const result = await getApi('https://jsonplaceholder.typicode.com/todos', controller.signal);
            setData(result);
        }
        fetchPokemon();

        return () => {
            //abort/cancel api call
            /*
            title
            */
            controller.abort();
            console.log("Cancel API CALL")
        }

    }, [])

    console.log("data>>>",data);
    return (
        <>
          <h1>api call {data[0]?.title}</h1>
        </>
    )
}

