import React from "react";

export class ClassBaseErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false,error:null };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }

  
  
    componentDidCatch(error, errorInfo) {
      // You can also log the error to an error reporting service
      console.log(error, errorInfo);
      this.setState({...this.state,error:error})
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <h1>{this.state.error?.message}</h1>;
      }
  
      return this.props.children; 
    }
  }