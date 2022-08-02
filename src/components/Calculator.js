import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const items = [
      {
        id: 1,
        text: 'AC',
        type: 'fkeys',
      },
      {
        id: 2,
        text: '+/-',
        type: 'fkeys',
      },
      {
        id: 3,
        text: '%',
        type: 'fkeys',
      },
      {
        id: 4,
        text: '÷',
        type: 'ops',
      },
      {
        id: 5,
        text: '7',
        type: 'nums',
      },
      {
        id: 6,
        text: '8',
        type: 'nums',
      },
      {
        id: 7,
        text: '9',
        type: 'nums',
      },
      {
        id: 8,
        text: 'x',
        type: 'ops',
      },
      {
        id: 9,
        text: '4',
        type: 'nums',
      },
      {
        id: 10,
        text: '5',
        type: 'nums',
      },
      {
        id: 11,
        text: '6',
        type: 'nums',
      },
      {
        id: 12,
        text: '-',
        type: 'ops',
      },
      {
        id: 13,
        text: '1',
        type: 'nums',
      },
      {
        id: 14,
        text: '2',
        type: 'nums',
      },
      {
        id: 15,
        text: '3',
        type: 'nums',
      },
      {
        id: 16,
        text: '+',
        type: 'ops',
      },
      {
        id: 17,
        text: '0',
        type: 'nums',
      },
      {
        id: 18,
        text: '.',
        type: 'nums',
      },
      {
        id: 19,
        text: '=',
        type: 'ops',
      },
    ];
    return (
      <>
        <section className="container">
          <div className="display">0</div>
          <section className="grid-container">
            {items.map((item) => (
              <div key={item.id} className={`grid-item ${item.type}`} id={`item${item.id}`}>
                {item.text}
              </div>
            ))}
          </section>
        </section>
      </>
    );
  }
}

export default Calculator;
