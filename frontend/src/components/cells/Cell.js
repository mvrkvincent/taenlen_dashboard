import React from 'react';
import { connect } from 'react-redux';
import { stageCell } from '../../actions/cell_actions';

const Cell = ({ cell, stageCell }) => { 

  const symbol = cell.type === 'cash' ? < i className="fas fa-arrow-up" /> : <i className="fas fa-arrow-down" />;

  return(
    <div onClick={() => stageCell(cell)} className={`${cell.type} cell module row`}>

      <div className="row">

        {symbol}
        <span className="right">{cell.amount}</span>
        

      </div>

      <div className="bold">{cell.title}</div>

    </div>
  )
};

const mdp = dispatch => ({
  stageCell: cell => dispatch(stageCell(cell))
})

export default connect(null, mdp)(Cell);