import React from 'react';
import './Clicks.css';

class ClickableComponent extends React.Component {
  handleDivClick = () => {
    console.log('Div clicked');
  };

  handleButtonClick = () => {
    console.log('Button clicked');
  };

  render() {
      return (
          <div>
              <div onClick={this.handleDivClick} className='div-click'>
                  Click div        
              </div>
              <button onClick={this.handleButtonClick}>Click button</button>
          </div>
    );
  }
}

export default ClickableComponent;
