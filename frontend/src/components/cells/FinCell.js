import React, { useState } from 'react';
import CellButtons from './CellButtions';

const FinCell = ({ cell }) => {

  const [cellData, setCellData] = useState({
    type: cell.type,
    title: cell.title || '',
    amount: cell.amount || '',
    frequency: cell.frequency || 'One Time'
  });

  const generatePlaceholder = () => {
    switch(cell.type) {
      case('cash'):
        return 'Ex. Pay Check...';
      case('expenses'):
        return 'Ex. Rent, Netflix...';
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

        <button className="trash">
          <i className="fas fa-trash-alt" />
        </button>

      </div>
        <CellButtons 
          cellData={cellData} 
          setCellData={setCellData} />
    </div>
  );
};

export default FinCell;