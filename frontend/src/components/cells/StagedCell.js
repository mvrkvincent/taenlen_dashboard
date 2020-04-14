import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import CellOptions from './CellOptions';
import { deleteCell } from '../../actions/cell_actions';
import { days, months } from '../../utils/cell_utils';

const StagedCell = ({ cell, deleteCell, darkStyle }) => {
  const [cellData, setCellData] = useState({
    id: cell.id,
    label: cell.label,
    title: cell.title || '',
    amount: cell.amount || '',
    frequency: cell.frequency || '', 
    day: cell.day || '',
    date: cell.date || '', 
    month: cell.month || '', 
    priority: cell.priority || ''
  });

  const today = new Date();
  
  const symbol = cell.label === 'cash' ? < i className="cash fas fa-arrow-up left"/> : <i className="expenses fas fa-arrow-down left"/>;
  const placeholder = cell.label === 'cash' ? 'Ex. Pay Check...' : 'Ex. Rent, Netflix...';

  const formatMoney = amount => {
    return new Intl.NumberFormat().format(amount);
  }; 

  
  const handleChange = e => {
    const regex = /^[0-9]+$/;
    let name = e.target.name;
    let value = e.target.value;
    const amount = value.split(',').join('');
    
    if (name === 'amount' && value !== '') {
      if (amount.match(regex)) {
        const cash = formatMoney(amount);
        setCellData({
          ...cellData,
          [name]: cash
        });
      }
    } else {
      setCellData({
        ...cellData,
        [name]: value
      });
    }
  };

  const handleDelete = e => {
    e.preventDefault();
    deleteCell(cell.id);
  };

  useEffect(() => {
    setCellData({
      id: cell.id,
      label: cell.label,
      title: cell.title || '',
      amount: cell.amount ? formatMoney(cell.amount) : '',
      frequency: cell.frequency || 'One Time',
      day: cell.day || days[today.getDay()],
      date: cell.date || today.getDate(),
      month: cell.month || months[today.getMonth()],
      priority: cell.priority || 'Low'
    });
  }, [cell]);

  return (
    <div id="staged-cell" style={darkStyle.module} className={`${cell.label} module`}>

      <div className="row">
        {symbol}
        <input
          style={darkStyle.input}
          name="title"
          type="text"
          placeholder={placeholder}
          value={cellData.title}
          onChange={handleChange}
          className="cell-title"
          />
        <input
          style={darkStyle.input}
          name="amount"
          type="text"
          placeholder="1,000"
          value={cellData.amount}
          onChange={handleChange}
          className={cell.label}
        />
        <button style={darkStyle.button} onClick={handleDelete} className="right action">
          <i className="fas fa-trash-alt" />
        </button>

      </div>

      <CellOptions 
        cell={cellData} 
        setCellData={setCellData}
        darkStyle={darkStyle} 
      />

    </div>
  );
};

const mdp = dispatch => ({
  deleteCell: cell => dispatch(deleteCell(cell))
})

export default connect(null, mdp)(StagedCell);