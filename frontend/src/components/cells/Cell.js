import React from 'react';
import { connect } from 'react-redux';
import { stageCell } from '../../actions/cell_actions';

const Cell = ({ cell, staged, stageCell }) => { 

  const symbol = cell.label === 'cash' ? < i className="fas fa-arrow-up" /> : <i className="fas fa-arrow-down" />;

  const formatMoney = amount => {
    return new Intl.NumberFormat().format(amount);
  }; 

  const handleStage = e => {
    e.preventDefault();
    if (!staged[0]) {
      stageCell(cell);
    }
  };

  return(
    <div onClick={handleStage} className={`${cell.label} cell module row`}>

      <div className="bold">{cell.title}</div>

      <div className="row">
        <span className="cell-amount">{formatMoney(cell.amount)}</span>
        {symbol}
      </div>

    </div>
  )
};

const msp = ({ cells }) => ({
  staged: Object.values(cells.staged)
})

const mdp = dispatch => ({
  stageCell: cell => dispatch(stageCell(cell))
})

export default connect(msp, mdp)(Cell);