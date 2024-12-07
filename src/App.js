import logo from './logo.svg';
import './App.css';
import { TodoList } from './machineRoundQuestions/TodoList/TodoList';
import { FaqComponent } from './machineRoundQuestions/FAQ/FaqComponent';
import { Form } from './components/Form';
// import { ErrorBoundary } from './components/errorInFunctionBaseComponent/ErrorBoundary';
import { ErrorBoundary } from "react-error-boundary";
import { FetchData } from './components/errorInFunctionBaseComponent/ErrorBoundaryWithApi';
import { Child } from './Child';
import { UserApi } from './machineRoundQuestions/APIs/UserApi';
import { UserList } from './machineRoundQuestions/APIs/UserList';
import { fallbackRender } from './components/errorInFunctionBaseComponent/fallbackRender';
import { ClassBaseErrorBoundary } from './components/errorInClassBaseComponent/ClassBaseErrorBoundary';
import { Products } from './components/errorInFunctionBaseComponent/Products';
import { InfinityScrollingConcept } from './machineRoundQuestions/InfinityScrolling/InfinityScrollingConcept';
import  {InfinityProductsScrolling} from './machineRoundQuestions/InfinityScrolling/InfinityProductsScrolling';
import { CancelApiCall } from './machineRoundQuestions/APIs/CancelApiCall';
// import { ErrorBoundary } from './components/errorInFunctionBaseComponent/ErrorBoundary';
// function fallbackRender({ error, resetErrorBoundary }) {
//   // Call resetErrorBoundary() to reset the error boundary and retry the render.

//   return (
//     <div role="alert">
//       <p>Something went wrong:</p>
//       <pre style={{ color: "red" }}>{error.message}</pre>
//     </div>
//   );
// }

function App() {

  const logError = (error,info)=>{
      console.log("logError>>>>>",error)
  }
  return (
    <div className="App">
           {/* <UserList/> */}
      {/* <InfinityProductsScrolling/> */}
      <CancelApiCall/>

      {/* <ClassBaseErrorBoundary>
         <UserApi/>
      </ClassBaseErrorBoundary> */}
      {/* <ErrorBoundary
        fallbackRender={fallbackRender}
        onError={logError}
      >
         <Products/>
      </ErrorBoundary> */}
      {/* <Child/> */}
      {/* <TodoList/> */}
      {/* <FaqComponent /> */}
      {/* <ErrorBoundary
        fallbackRender={fallbackRender}
        onReset={(details) => {
          // Reset the state of your app so the error doesn't happen again
        }}
      >
        <Form />
      </ErrorBoundary> */}
      {/* <ErrorBoundary FallbackComponent={fallbackRender} >
         <FetchData />
      </ErrorBoundary> */}

    </div>
  );
}

export default App;
