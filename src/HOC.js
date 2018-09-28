import React, { Component } from "react";
import "./spinner.css";
const HOC = WrappedComponent => {
  return class HOC extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true
      };
    }

    componentDidMount() {
      setTimeout(() => {
        this.setState({
          loading: false
        });
      }, 3000);
    }
    render() {
      return this.state.loading ? (
        <div className="loader" />
      ) : (
        <WrappedComponent {...this.props} />
      );
    }
  };
};

export default HOC;
