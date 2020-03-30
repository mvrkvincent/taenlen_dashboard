import React from 'react';
import { connect } from 'react-redux';
import { createCell } from '../../actions/cell_actions';
import FinCell from './FinCell';
import Tickers from '../tickers/Tickers';

const Cells = ({ staged, cells, createCell }) => {

  const generateCell = () => {
    if (staged[0]) {
      createCell({
        id: staged[staged.length - 1].id + 1,
        type: staged[staged.length - 1].type
      });
    }
  };
  
  const displayStaged = () => {
    if (staged[0]) {
      return staged.map((cell, i) => <FinCell key={i} cell={cell} />);
    }
  };
  
  const displayAllCells = () => {
    if (cells[0]) {
      return cells.map((cell, i) => <FinCell key={i} cell={cell} />);
    } else if (!staged[0]) {
      return <h1 className="no-cells">Your T&#230;nlen is Blank</h1>
    } 
  };

  return (
    <div id="cells" className="column">

      <Tickers />

      <div id="staged" className="grid column">
        {displayStaged()}
        {staged[0] ? <button onClick={() => generateCell()} className="add"><i className="fas fa-plus"/></button> : null}
      </div>
      

      <div id="all" className="grid">
        {displayAllCells()}
      </div>

    </div>
  );
};

const msp = ({ cells }) => ({
  staged: Object.values(cells.staged),
  cells: cells.all ? Object.values(cells.all) : []
});

const mdp = dispatch => ({
  createCell: cell => dispatch(createCell(cell))
})

export default connect(msp, mdp)(Cells);

