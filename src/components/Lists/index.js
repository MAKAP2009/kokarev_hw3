import React, { Component } from 'react';
import './Lists.css';

class Lists extends Component {
  constructor(props) {
    super(props);

    this.array1 = ['item 1-1', 'item 1-2', 'item 1-3'];
    this.array2 = ['item 2-1', 'item 2-2', 'item 2-3'];

    this.state = {
      list1: this.array1,
      list2: this.array2,
    };

    this.handleMove = this.handleMove.bind(this);
  }

  handleMove(index) {
    const { list1, list2 } = this.state;
    const item = list1[index];
    const newList1 = [...list1.slice(0, index), ...list1.slice(index + 1)];
    const newList2 = [...list2, item];
    this.setState({ list1: newList1, list2: newList2 });
  }

  render() {
    const { list1, list2 } = this.state;

      return (        
          <div className="lists-container">
              {/* <hr></hr> */}
        <div className="list-container">
          <h2>List1</h2>
          <ul>
            {list1.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="list-container">
          <h2>List2</h2>
          <ul>
            {list2.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="button-container">
          <button onClick={() => this.handleMove(0)}>Move</button>
        </div>
      </div>
    );
  }
}

export default Lists;
