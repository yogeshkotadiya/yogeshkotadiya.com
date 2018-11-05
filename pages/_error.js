import React from "react";
import Error404 from "../components/404";

export default class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  render() {
    return <Error404 statusCode={this.props.statusCode} />;
  }
}
