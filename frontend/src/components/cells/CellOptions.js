import React from 'react';
import { connect } from 'react-redux';
import { submitCell } from '../../actions/cell_actions';

const CellButtons = ({cell, setCellData, submitCell}) => {
  const handleFrequency = e => {
    e.preventDefault();
    let toggle = '';
   
      switch (cell.frequency) {
        case ('One Time'):
          toggle = "Weekly";
          break;
        case ('Weekly'):
          toggle = "Bi-Weekly";
          break;
        case ('Bi-Weekly'):
          toggle = 'Monthly';
          break;
        case ('Monthly'):
          toggle = 'Yearly';
          break;
        default:
          toggle = 'One Time';
      }
    
    setCellData({
      ...cell,
      [e.target.value]: toggle
    });

  };

  const toggleView = () => {
    let visible = {};
    if ((cell.title !== '') && (cell.amount !== '')) {
      visible = {
        height: '2rem',
        marginTop: '1rem'
      };
    }
    return visible;
  };

  const handleSubmit = e => {
    e.preventDefault();
    submitCell(cell);
  };

  return (
    <div style={toggleView()} className="row cell-options">

      <button onClick={handleFrequency} value="frequency"className="frequency">
        {cell.frequency}
      </button>

      <button onClick={handleSubmit} className="action">
        <i className="fas fa-check"/>
      </button>

    </div>
  )
};

const mdp = dispatch => ({
  submitCell: cell => dispatch(submitCell(cell))
})

export default connect(null, mdp)(CellButtons);