import React, { useEffect } from 'react';
import { useErrorBoundary } from 'react-error-boundary'

export function FetchData() {
    const { showBoundary } = useErrorBoundary();

    async function fetchData() {
        try {
            // fetch some data
            let response = await fetch('https://jsonplaceholder.typicoe.com/todos/1');
            response = await response.json();
            console.log(response);
        } catch (error) {
            showBoundary(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <>
            API RESPONSE
        </>
    );
}

