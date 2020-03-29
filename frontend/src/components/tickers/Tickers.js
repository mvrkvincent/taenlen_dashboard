import React from 'react';
import { connect } from 'react-redux';
import { createCell } from '../../actions/cell_actions';
import Calendar from './Calendar';
import Cash from './Cash';
import Expenses from './Expenses';

const Tickers = ({ createCell }) => {

  const generateCell = type => {
    createCell({
      type: type
    });
  };

  return(
    <div id="tickers" className="row">
      <Cash genreateCell={generateCell} />

      <Calendar />

      <Expenses generateCell={generateCell} />
    </div>
  )
}

const mdp = dispatch => ({
  createCell: cell => dispatch(createCell(cell))
})

export default connect(null, mdp)(Tickers)