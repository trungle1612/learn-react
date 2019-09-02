import React, { Component } from 'react'
import './css/App.css';
import Button from './components/Button';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: '0',
      result: '0',
      previous: '',
      caculated: false,
      canAddDot: true,
    }
  }

  reset = () => {
    this.setState({
      current: '0' ,
      result: '0', 
      previous: '',
      caculated: false,
    });
  }

  displayResult = symbol => {
    this.setState({
      result: eval(this.state.current),
      caculated: true,
    })
  }

  addToCurrent = symbol => {
    const operators = ["+", "-", "*", "/", "."];
    if (this.state.current === '0' || this.state.caculated) {
      if (operators.indexOf(symbol) === -1 ){
        this.setState({
          current: symbol,
          previous: symbol,
          caculated: false,
        });
      }
    }else {
      if (operators.indexOf(symbol) === -1 || 
         (operators.indexOf(symbol) > -1 && operators.indexOf(this.state.previous) === -1)){
        this.setState({
          current: this.state.current + symbol,
          previous: symbol,
          caculated: false,
        });
      }
    }
  }
  render() {
    const buttons = [
      {symbol: 'AC', cols: 'col-2', action: this.reset },
      {symbol: '%', cols: 'col-1', action: this.addToCurrent  },
      {symbol: '/', cols: 'col-1', action: this.addToCurrent  },
      {symbol: '7', cols: 'col-1', action: this.addToCurrent  },
      {symbol: '8', cols: 'col-1', action: this.addToCurrent  },
      {symbol: '9', cols: 'col-1', action: this.addToCurrent  },
      {symbol: '*', cols: 'col-1', action: this.addToCurrent  },
      {symbol: '4', cols: 'col-1', action: this.addToCurrent  },
      {symbol: '5', cols: 'col-1', action: this.addToCurrent  },
      {symbol: '6', cols: 'col-1', action: this.addToCurrent  },
      {symbol: '-', cols: 'col-1', action: this.addToCurrent  },
      {symbol: '1', cols: 'col-1', action: this.addToCurrent  },
      {symbol: '2', cols: 'col-1', action: this.addToCurrent  },
      {symbol: '3', cols: 'col-1', action: this.addToCurrent  },
      {symbol: '+', cols: 'col-1', action: this.addToCurrent  },
      {symbol: '0', cols: 'col-2', action: this.addToCurrent  },
      {symbol: '.',  cols: 'col-1', action: this.addToCurrent  },
      {symbol: '=',  cols: 'col-1', action: this.displayResult  }
    ];
    return (
      <div className="App">
        <div className="display">
          <input className="formular" type="text" value={this.state.current} />
          <input className="result" type="text" value={this.state.result} />
        </div>
        { buttons.map((btn, key) => {
          return <Button symbol={btn.symbol} action={btn.action} cols={btn.cols} />
        })}
      </div>
     );
    }
}

export default App;
