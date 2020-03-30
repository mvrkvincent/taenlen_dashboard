import React from 'react';
import { connect } from 'react-redux';
import FinCell from './FinCell';
import Tickers from '../tickers/Tickers';

const Cells = ({ staged, cells }) => {
  
  const displayStaged = () => {
    if (staged) return <FinCell cell={staged} />
  };
  
  const displayAllCells = () => {
    if (cells[0]) {
      return cells.map((cell, i) => <FinCell key={i} cell={cell} />);
    } else if (!staged) {
      return <h1 className="no-cells">Your T&#230;nlen is Empty</h1>
    } 
  };

  return (
    <div id="cells" className="column">

      <Tickers />

      <div id="staged" className="grid">
        {displayStaged()}
      </div>

      <div id="all" className="grid">
        {displayAllCells()}
      </div>

    </div>
  );
};

const msp = ({ cells }) => ({
  staged: cells.staged,
  cells: cells.all ? Object.values(cells.all) : []
});

export default connect(msp, null)(Cells);

