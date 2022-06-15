import React from "react";
import Todos from "./components/Todos";
export default class App extends React.Component {
  constructor() {
    super();
    this.state = { isMounted: false };
  }
  render() {
    return (
      <div className="App">
        <button
          onClick={() => this.setState({ isMounted: !this.state.isMounted })}
        >
          Logme in
        </button>
        {this.state.isMounted ? <Todos /> : null}
      </div>
    );
  }
}
