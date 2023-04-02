import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  handleIncrement() {
    this.setState({ count: this.state.count + 1 });
  }

  handleDecrement() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
        <div>
            <p>Счётчик:</p>
        <button onClick={this.handleIncrement}>+</button>
            <button onClick={this.handleDecrement}>-</button>
            <p>
                <span>{this.state.count}</span>
            </p>
      </div>
    );
  }
}

export default Counter;
