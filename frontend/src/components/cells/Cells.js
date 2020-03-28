import React from 'react';
import { connect } from 'react-redux';
import { createCell } from '../../actions/cell_actions';
import Cell from './Cell';
import Calendar from '../tickers/Calendar';
import Cash from '../tickers/Cash';
import Expenses from '../tickers/Expenses';

const Cells = ({ staged, cells, createCell}) => {

  const generateCell = type => {
    createCell({
      type: type
    });
  };
  
  const displayStagedCell = () => {
    const stagedCell = staged.map((cell, i) => <Cell key={i} cell={cell} />)
    debugger
    return stagedCell;
  };

  const displayAllCells = () => {
    return cells.map((cell, i) => <Cell key={i} cell={cell} />)
  };

  return (
    <>

      <div className="row cells-head">
        <Cash genreateCell={generateCell}/>
        
        <Calendar />

        <Expenses generateCell={generateCell}/>
      </div>

      <div id="staged" className="grid">
        {displayStagedCell()}
      </div>

      <div id="all" className="grid">
        {displayAllCells()}
      </div>

    </>
  );
};

const msp = ({ cells }) => ({
  staged: cells.staged ? Object.values(cells.staged) : [],
  cells: cells.all ? Object.values(cells.all) : []
});

const mdp = dispatch => ({
  createCell: cell => dispatch(createCell(cell))
})

export default connect(msp, mdp)(Cells);

