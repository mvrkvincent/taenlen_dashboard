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
      return <div className="no-cells">Add a Cell</div>
    } 
  };

  return (
    <div id="cells">

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

