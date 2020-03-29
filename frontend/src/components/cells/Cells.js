import React from 'react';
import { connect } from 'react-redux';
import FinCell from './FinCell';
import Tickers from '../tickers/Tickers';

const Cells = ({ staged, cells, createCell}) => {

  
  
  const displayAllCells = () => {
    return cells.map((cell, i) => <FinCell key={i} cell={cell} />)
  };


  return (
    <div id="cells">

      <Tickers />

      <div id="staged" className="grid">
        {staged ? <FinCell cell={staged} /> : null}
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

