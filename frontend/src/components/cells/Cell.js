import React, { useState } from 'react';

const Cell = ({ cell }) => {
  const [cellData, setCellData] = useState({
    type: cell.type,
    title: cell.title || '',
    amount: cell.amount || ''
  });

  const placeholder = () => {

    switch(cellData.type) {
      case('cash'):
        return 'Income source...';
      case('expenses'):
        return 'Expense...';
      default:
        return '';
    }
  };

  const formatMoney = number => {
    const num = Number(number);
    return new Intl.NumberFormat().format(num);
  }; 

  const validateNumber = (name, number) => {
    const regex = /^[0-9]+$/;
    if (number.match(regex)) {
      const money = formatMoney(number);
      setCellData({
        ...cellData,
        [name]: money
      });
    }
  };
  
  const handleChange = e => {
    let name = e.target.name;
    let value = e.target.value;
    const number = value.split(',').join('');
    
    if (name === 'amount' && value !== '') {
      validateNumber(name, number);
    } else {
      setCellData({
        ...cellData,
        [name]: value
      });
    }
  };
  
  return (
    <div id="cell" className="module">
      <div className="row">
        <input className="cell-title"
          name="title"
          type="text"
          placeholder={placeholder()}
          value={cellData.title}
          onChange={handleChange}
        />
        <input
          name="amount"
          type="text"
          placeholder="1,000"
          value={cellData.amount}
          onChange={handleChange}
          className={cellData.type}
          />
      </div>
      <div className="column">
        {/* <input /> */}
      </div>
    </div>
  );
};

export default Cell;