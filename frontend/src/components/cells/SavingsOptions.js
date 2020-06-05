import React from 'react';
import { connect } from 'react-redux';
import { submitCell, updateCell } from '../../actions/cell_actions';
// import { DayPicker, DatePicker, MonthPicker } from './Pickers';

const SavingsOptions = ({ cell, setCellData, submitCell, updateCell, darkStyle }) => {

  const toggleView = () => {
    let visible = {};
    if ((cell.title !== '') && (cell.amount !== '')) {
      visible = {
        height: '4rem',
        paddingTop: '1rem'
      };
    }
    return visible;
  };

  const handleSubmit = e => {
    e.preventDefault();

    const formattedCell = {
      ...cell,
      amount: parseInt(cell.amount.split(',').join(''))
    };

    if (cell.id) {
      updateCell(formattedCell);
    } else {
      submitCell(formattedCell);
    }

  };

  return (
    <div id="cell-options" style={toggleView()} className="row">

      <div className="row">

        <button style={darkStyle.button} className="left add">
          <i className="fas fa-arrow-up" />
        </button>

      </div>

      <button style={darkStyle.button} className="right remove">
        <i className="fas fa-arrow-down" />
      </button>

    </div>
  )
};

const mdp = dispatch => ({
  submitCell: cell => dispatch(submitCell(cell)),
  updateCell: cell => dispatch(updateCell(cell))
})

export default connect(null, mdp)(SavingsOptions);