import React from 'react';
import { connect } from 'react-redux';
import { createCell } from '../../actions/cell_actions';
import Cell from './Cell';
import Calendar from '../tickers/Calendar';

const Cells = ({ cells, createCell}) => {
  let cash = 2400;
  let expenses = 1000;
  
  const formatMoney = money => {
    return new Intl.NumberFormat().format(money);
  };

  const generateCell = type => {
    createCell({
      type: type
    });
  };

  

  const displayCells = () => {
    return cells.map((cell, i) => <Cell key={i} cell={cell} /> ) 
  };

  return (
    <>
      <div className="row cells-head">
        <div id="cash" onClick={() => generateCell('cash')} className='module cash'>
          <h1 className="cells-head-amount">
            {formatMoney(cash)}
          </h1>
          <h1 className="cells-head-lable cash"><i className="fas fa-arrow-down"></i></h1>
        </div>
        
        <Calendar />

        <div id="expenses" onClick={() => generateCell('expenses')} className='module expenses'>
          <h1 className="cells-head-amount">
            {formatMoney(expenses)}
          </h1>
          <h1 className="cells-head-lable expenses"><i className="fas fa-arrow-up"></i></h1>
        </div>
      </div>

      <div id="cells" className="grid">
        {displayCells()}
      </div>

    </>
  );
};

const msp = ({ cells }) => ({
  cells: Object.values(cells)
});

const mdp = dispatch => ({
  createCell: cell => dispatch(createCell(cell))
})

export default connect(msp, mdp)(Cells);

