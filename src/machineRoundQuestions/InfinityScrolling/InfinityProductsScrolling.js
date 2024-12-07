import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
// import ProductCard from "./ProductCard";
// import Loader from "./Loader";

export const InfinityProductsScrolling = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [index, setIndex] = useState(2);


    useEffect(() => {
        const getData = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(
                    "https://api.escuelajs.co/api/v1/products?offset=10&limit=12"
                );
                setItems(response.data);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        };

        getData();
    }, []);

    const fetchData = useCallback(async () => {
        if (isLoading) return;
        try {
            setIsLoading(true);
            let response = await axios.get(`https://api.escuelajs.co/api/v1/products?offset=${index}0&limit=12`);
            setItems((prevItems) => [...prevItems, ...response.data]);
        } catch (error) {
            console.log(error);
        } finally {
            setIndex((prevIndex) => prevIndex + 1);

            setIsLoading(false);
        }
    }, [index, isLoading]);

    useEffect(() => {
        let onScroll = () => {
            const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
            //window.innerHeight,window.scrollY,window.document.boyd.offsetHeight
            if (scrollTop + clientHeight >= scrollHeight - 30) {
                fetchData();
            }
        }

        window.addEventListener('scroll', onScroll);

        return () => {
            //clear event listener
            window.removeEventListener('scroll', onScroll);
        }
    }, [fetchData])

    return (
        <div className='container'>
            <div className='row'>
                {items.map((item, index) => (
                    <div key={index} >
                        <h3>{item.title}</h3>
                        {item.images.map((image, index) => (
                            <img src={image} width={"300px"} height={"200px"} />
                        ))}
                    </div>
                ))}
            </div>
            {isLoading && <h1>Loading.....</h1>}
        </div>
    );
};

// export default InfinityProductsScrolling;
