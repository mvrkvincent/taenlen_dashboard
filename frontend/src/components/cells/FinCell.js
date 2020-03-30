import React, { useState } from 'react';
import { connect } from 'react-redux';
import CellOptions from './CellOptions';
import { deleteCell } from '../../actions/cell_actions';

const FinCell = ({ cell, deleteCell }) => {

  const [cellData, setCellData] = useState({
    id: cell.id,
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

  const handleDelete = e => {
    
    e.preventDefault();
    deleteCell(cellData.id);
  };

  return (
    <div id="cell" className="module">

      <div className="row">

        <input
          name="title"
          type="text"
          placeholder={generatePlaceholder()}
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
        cellData={cellData} 
        setCellData={setCellData} 
      />

    </div>
  );
};

const mdp = dispatch => ({
  deleteCell: cell => dispatch(deleteCell(cell))
})

export default connect(null, mdp)(FinCell);