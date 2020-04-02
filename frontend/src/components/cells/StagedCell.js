import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import CellOptions from './CellOptions';
import { deleteCell } from '../../actions/cell_actions';

const StagedCell = ({ cell, deleteCell }) => {
  const [cellData, setCellData] = useState({
    id: '',
    type: '',
    title: '',
    amount: '',
    frequency: 'One Time',
    priority: 'Low Priority'
  });
  
  const symbol = cell.type === 'cash' ? < i className="cash fas fa-arrow-up left"/> : <i className="expenses fas fa-arrow-down left"/>;
  const placeholder = cell.type === 'cash' ? 'Ex. Pay Check...' : 'Ex. Rent, Netflix...';

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

  const handleDelete = e => {
    e.preventDefault();
    deleteCell(cellData.id);
  };

  useEffect(() => {
    setCellData({
      id: cell.id || Math.round(Math.random() * 100),
      type: cell.type,
      title: cell.title || '',
      amount: cell.amount || '',
      frequency: cell.frequency || 'One Time',
      priority: cell.priority || 'Low Priority'
    });
  }, [cell]);

  return (
    <div id="staged-cell" className={`${cell.type} module`}>

      <div className="row">
        {symbol}
        <input
          name="title"
          type="text"
          placeholder={placeholder}
          value={cellData.title}
          onChange={handleChange}
          className="cell-title"
          />
        <input
          name="amount"
          type="text"
          placeholder="1,000"
          value={cellData.amount}
          onChange={handleChange}
          className={cell.type}
        />
        <button onClick={handleDelete} className="action right">
          <i className="fas fa-trash-alt" />
        </button>

      </div>

      <CellOptions 
        cell={cellData} 
        setCellData={setCellData} 
      />

    </div>
  );
};

const mdp = dispatch => ({
  deleteCell: cell => dispatch(deleteCell(cell))
})

export default connect(null, mdp)(StagedCell);