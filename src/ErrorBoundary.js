import { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    redirect: false,
  };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error("Error boundary caught an error", error, info);
    setTimeout(() => {
      this.setState({ redirect: true });
    }, 5000);
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    } else if (this.state.hasError) {
      return (
        <h2>
          This page has an error. <Link to="/">Back to Home </Link>or wait 5
          seconds.
        </h2>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
