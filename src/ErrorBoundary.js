import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error("Error boundary caught an error", error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <h2>
          This page has an error. <Link to="/">Back to Home.</Link>
        </h2>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
