import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
import FreecodecampLogo from './images/Freecodecamp_Logo.png';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      clickNumber: 0
    };
    this.manageClick = this.manageClick.bind(this);
    this.restarCount = this.restarCount.bind(this);
  }

  manageClick() {
    this.setState(({ clickNumber }) => ({ clickNumber: clickNumber + 1 }));
  }

  restarCount() {
    this.setState({ clickNumber: 0 });
  }

  render() {
    return (
      <div className="App">
        <div className="freecodecamp_logo_container">
          <img src={FreecodecampLogo} alt="Freecodecamp's logo" className="freecodecamp_logo" />
        </div>
        <div className="main_container">
          <Counter 
            clickNumber={this.state.clickNumber}
          />
          <Button 
            text="Click"
            isClickButton={true}
            manageClick={this.manageClick}
          />
          <Button 
            text="Reiniciar"
            isClickButton={false}
            manageClick={this.restarCount}
          />
        </div>
      </div>
    );
  }
}

export default App;
