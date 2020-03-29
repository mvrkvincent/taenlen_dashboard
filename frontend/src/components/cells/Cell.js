import React, { useState } from 'react';

const Cell = ({ cell }) => {

  const [cellData, setCellData] = useState({
    type: cell.type,
    title: cell.title || '',
    amount: cell.amount || '',
    frequency: cell.frequency || 'Frequency'
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

  const handleFrequency = e => {
    e.preventDefault();
    let toggle = '';

    if (cell.type === 'cash') {
      switch (cellData.frequency) {
        case('Frequency'):
          toggle = "Weekly";
          break;
        case('Weekly'):
          toggle = "Bi-Weekly";
          break;
        case('Bi-Weekly'):
          toggle ='Semi-Monthly';
          break;
        case('Semi-Monthly'):
          toggle = 'Monthly';
          break;
        case('Monthly'):
          toggle = 'Frequency';
          break;
        default: 
          toggle = 'Frequency';
      }
    } else if (cell.type === 'expenses') {
        switch (cellData.frequency) {
          case ('Frequency'):
            toggle = "Daily";
            break;
          case ('Daily'):
            toggle = "Weekly";
            break;
          case ('Weekly'):
            toggle = "Monthly";
            break;
          case ('Monthly'):
            toggle = 'Yearly';
            break;
          case ('Yearly'):
            toggle = 'Frequency';
            break;
          default:
            toggle = 'Frequency';
        }
    } 

    setCellData({
      ...cellData,
      [e.target.value]: toggle});

  };

  const generateButtons = () => {
    let visible = {};
    let selected = {};
    if ((cellData.title !== '') && (cellData.amount !== '')) {
      visible = {
        height: '2rem',
        marginTop: '1.5rem'
      };

    if (cellData.frequency === 'Frequency')
      selected = {
        borderColor:  '#eaeaea',
        color: '#696969',
      };
    }

    return (
      <div style={visible} className="row cell-options">
        <button className="trash"><i className="fas fa-trash-alt" /></button>
        <button 
          style={selected} 
          onClick={handleFrequency} 
          value="frequency" 
          className="frequency">{cellData.frequency}</button>
        <button className="check"><i className="fas fa-check" /></button>
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