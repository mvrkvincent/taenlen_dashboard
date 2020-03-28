import React, { useState } from 'react';

const Cell = ({ cell }) => {

  const [cellData, setCellData] = useState({
    type: cell.type,
    title: cell.title || '',
    amount: cell.amount || ''
  });

  const generatePlaceholder = () => {

    switch(cell.type) {
      case('cash'):
        return 'Income source...';
      case('expenses'):
        return 'Expense...';
      default:
        return '';
    }
  };

  const formatMoney = amount => {
    return new Intl.NumberFormat().format(amount);
  }; 

  const validateNumber = (name, amount) => {
    const regex = /^[0-9]+$/;
    if (amount.match(regex)) {
      const cash = formatMoney(amount);
      setCellData({
        ...cellData,
        [name]: cash
      });
    }
  };
  
  const handleChange = e => {
    let name = e.target.name;
    let value = e.target.value;
    const amount = value.split(',').join('');
    
    if (name === 'amount' && value !== '') {
      validateNumber(name, amount);
    } else {
      setCellData({
        ...cellData,
        [name]: value
      });
    }
  };

  const generateButtons = () => {
    let style = {};
    if ((cellData.title !== '') && (cellData.amount !== '')) {
      style = {
        height: '2rem',
        marginTop: '1.5rem'
      };
    }

    return (
      <div style={style} className="row cell-options">
        <button className="button trash"><i className="fas fa-trash-alt" /></button>
        <button className="button check"><i className="fas fa-check" /></button>
      </div>
    )
  };
  
  return (
    <div id="cell" className="module">
      <div className="row">
        <input className="cell-title"
          name="title"
          type="text"
          placeholder={generatePlaceholder()}
          value={cellData.title}
          onChange={handleChange}
          />
        <input
          name="amount"
          type="text"
          placeholder="1,000"
          value={cellData.amount}
          onChange={handleChange}
          className={cell.type}
          />
      </div>
        {generateButtons()}
    </div>
  );
};

export default Cell;