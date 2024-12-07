import React from "react";
import { Input } from "./reusableComponents/Input";
// import { useErrorBoundary } from "react-use-error-boundary";

// function ErrorBoundaryFallback() {
//     return <div>Oops! Something went wrong.</div>;
// }

export const Form = ()=>{
    // const [error,_] = useErrorBoundary();

    // console.log("error",error)

    // if (error) {
    //     return <ErrorBoundaryFallback />;
    // }


    if(true) {
        throw new Error("Something went wrong.");
    }
    return(
        <form>
           <Input renderTextBelow={(value)=><>THis is value: {value}</>    }/>
        </form>
    )
}