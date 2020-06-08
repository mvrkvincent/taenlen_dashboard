import React from 'react';
import { connect } from 'react-redux';
import { submitCell, updateCell } from '../../actions/cell_actions';
import { setSavings } from '../../actions/balance_actions';

const SavingsOptions = ({ savings, cell, setSavings, darkStyle }) => {

  const toggleView = () => {
    let visible = {};
    if (cell.amount !== '') {
      visible = {
        height: '4rem',
        paddingTop: '1rem'
      };
    }
    return visible;
  };

  const handleSubmit = (action) => {

    const formattedCell = {
      ...cell,
      amount: parseInt(cell.amount.split(',').join(''))
    };

    if (action === 'add') {
      setSavings({savings: savings + formattedCell.amount});
    } else {
      setSavings({savings: savings - formattedCell.amount});
    }

  };

  return (
    <div id="cell-options" style={toggleView()} className="row">

      <div className="row">

        <button style={darkStyle.button} className="left add" onClick={() => handleSubmit('add')}>
          <i className="fas fa-arrow-up" />
        </button>

      </div>

      <button style={darkStyle.button} className="right remove" onClick={() => handleSubmit('remove')}>
        <i className="fas fa-arrow-down" />
      </button>

    </div>
  )
};

const mdp = dispatch => ({
  setSavings: savings => dispatch(setSavings(savings)),
  submitCell: cell => dispatch(submitCell(cell)),
  updateCell: cell => dispatch(updateCell(cell))
})

const msp = ({ balance }) => ({
  savings: balance.savings
})

export default connect(msp, mdp)(SavingsOptions);