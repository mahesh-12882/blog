import React from "react"
import { withErrorBoundary, useErrorBoundary } from "react-use-error-boundary";

function logErrorToMyService(error, errorInfo){
   console.log("error>>>>",error, errorInfo);
}

export const ErrorBoundary = withErrorBoundary(({ children }) => {
    console.log("error bounday")
    const [error, resetError] = useErrorBoundary(
      // You can optionally log the error to an error reporting service
      (error, errorInfo) => logErrorToMyService(error, errorInfo)
    );

    console.log("error>>>>>>",error,children);
  
    if (error) {
      return (
        <div>
          <p>{error.message}</p>
          <button onClick={resetError}>Try again</button>
        </div>
      );
    }
  
    return <div>{children}</div>;
  });