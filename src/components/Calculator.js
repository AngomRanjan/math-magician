import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [obj, setObj] = useState({ next: null, total: null });

  const handleClick = (e) => {
    setObj((obj) => calculate(obj, e.target.innerText));
  };
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
  const { total, next } = obj;

  return (
    <>
      <main className="row p-5">
        <h3 className="col-4 text-black mb-3">Let&apos;s do some math!</h3>
        <section className="col-8">
          <div className="w-100 display">{next || total || 0}</div>
          <section className="grid-container m-0 p-0">
            {items.map((item) => (
              <button
                type="button"
                key={item.id}
                className={`grid-item ${item.type}`}
                onClick={handleClick}
                id={`item${item.id}`}
              >
                {item.text}
              </button>
            ))}
          </section>
        </section>
      </main>
    </>
  );
};

export default Calculator;
