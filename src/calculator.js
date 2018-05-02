import React, { Component } from 'react';
import Label from './components/label';
import Screen from './components/screen';
import Keypad from './components/keypad';
import calcMain from './functions/calcMain';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keys: [
        'AC',
        'C',
        '%',
        ' ÷ ',
        '7',
        '8',
        '9',
        ' x ',
        '4',
        '5',
        '6',
        ' - ',
        '1',
        '2',
        '3',
        ' + ',
        '0',
        '.',
        ' = '
      ],
      result: 0,
      que: [],
      displayQue: []
    };
  }

  handleClick = key => {
    const { que } = this.state;
    const calc = calcMain(key, ...que);
    this.setState({
      result: calc.result,
      que: calc.que,
      displayQue: calc.displayQue
    });
  };

  handleKeyDown = event => {
    event.preventDefault();
    const pressed = [
      'Escape',
      'Delete',
      'a',
      'A',
      'Backspace',
      'c',
      'C',
      'Enter',
      '=',
      '+',
      '-',
      '*',
      '/',
      'p',
      'P'
    ];
    const sent = [
      'AC',
      'AC',
      'AC',
      'AC',
      'C',
      'C',
      'C',
      ' = ',
      ' = ',
      ' + ',
      ' - ',
      ' x ',
      ' ÷ ',
      '%',
      '%'
    ];
    let key = '';
    if (pressed.indexOf(event.key) !== -1) {
      key = sent[pressed.indexOf(event.key)];
    }
    if (/[0-9.%]/.test(event.key)) {
      key = event.key;
    }
    if (key !== '') this.handleClick(key);
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
    window.focus();
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    return (
      <div>
        <div className="calculatorApp">
          <div className="topLeft" />
          <div className="top" />
          <div className="topRight" />
          <div className="left" />
          <div className="calculator">
            <Label />
            <Screen result={this.state.result} que={this.state.displayQue} />
            <Keypad onClick={this.handleClick} keys={this.state.keys} />
          </div>
          <div className="right" />
          <div className="bottomLeft" />
          <div className="bottom" />
          <div className="bottomRight" />
        </div>
        <h3>
          Designed & Coded by{' '}
          <a
            href="https://www.scottaprice.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Scott A. Price
          </a>
        </h3>
      </div>
    );
  }
}

export default Calculator;
