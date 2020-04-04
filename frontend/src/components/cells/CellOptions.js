import React from 'react';
import { connect } from 'react-redux';
import { submitCell, updateCell } from '../../actions/cell_actions';

const CellOptions = ({ cell, setCellData, submitCell, updateCell, darkMode }) => {

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

  const handlePriority = e => {
    e.preventDefault();
    let toggle = '';

    switch (cell.priority) {
      case ('Low Priority'):
        toggle = "Medium Priority";
        break;
      case ('Medium Priority'):
        toggle = "High Priority";
        break;
      case ('High Priority'):
        toggle = 'Low Priority';
        break;
      default:
        toggle = 'Low Priority';
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
    const formattedCell = { ...cell, amount: parseInt(cell.amount.split(',').join(''))};

    if (cell.id) {
      updateCell(formattedCell);  
    } else {
      submitCell(formattedCell);
    }
    
  };

  return (
    <div id="cell-options" style={toggleView()} className="row">

      <div className="row">

        <button style={darkMode.button} onClick={handleFrequency} value="frequency" className="option">
          {cell.frequency}
        </button>

        <button style={darkMode.button} onClick={handlePriority} value="priority" className="right option">
          {cell.priority}
        </button>

      </div>

      <button style={darkMode.button} onClick={handleSubmit} className="right action">
        <i className="fas fa-check"/>
      </button>

    </div>
  )
};

const mdp = dispatch => ({
  submitCell: cell => dispatch(submitCell(cell)),
  updateCell: cell => dispatch(updateCell(cell))
})

export default connect(null, mdp)(CellOptions);