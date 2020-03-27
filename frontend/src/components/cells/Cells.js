import React from 'react';
import { connect } from 'react-redux';
import { createCell } from '../../actions/cell_actions';
import { toggleView } from '../../actions/ui_actions';
import Cell from './Cell';

const Cells = ({ view, cells, toggleView, createCell}) => {
  let cash = 2400;
  let expenses = 1000;
  
  const formatMoney = money => {
    return new Intl.NumberFormat().format(money);
  };

  const formatDate = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = String(today.getFullYear()).substr(-2).padStart(2, '0');

    today = mm + '.' + dd + '.' + yyyy;
    return today;
  };

  const generateCell = type => {
    createCell({
      type: type
    });
  };

  const handleView = () => {
    switch(view) {
      case('month'):
        toggleView('week');
        break;
      case('week'):
        toggleView('month');
        break;
      default:
        toggleView('month');
    }
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
        <div id="time" onClick={() => handleView()} className='module time'>
          <h1 className="cells-head-amount">
            {formatDate()}
          </h1>
          <h1 className="cells-head-lable time"><i className="far fa-clock"></i></h1>
        </div>
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

const msp = ({ cells, ui }) => ({
  view: ui.view,
  cells: Object.values(cells)
});

const mdp = dispatch => ({
  toggleView: view => dispatch(toggleView(view)),
  createCell: cell => dispatch(createCell(cell))
})

export default connect(msp, mdp)(Cells);

