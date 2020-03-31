import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createCell } from '../../actions/cell_actions';
import Cell from './Cell';
import StagedCell from './StagedCell';
import Tickers from '../tickers/Tickers';

const Cells = ({ staged, cells, createCell }) => {
  const [style, setStyle] = useState({
    margin: null
  });

  const generateCell = type => {
    createCell({
      type: type
    });
  };
  
  const displayStaged = () => {
    if (staged.type) {
      return <StagedCell cell={staged} />;
    }
  };
  
  const displayAllCells = () => {
    if (cells[0]) {
      return cells.map((cell, i) => <Cell key={i} cell={cell} />);
    } else if (!staged.type) {
      return <h1 className="no-cells title">Your T&#230;nlen is Blank</h1>
    } 
  };

  useEffect(() => {
    if (staged.type) {
      setStyle({ marginBottom: '2rem' });
    }
  }, [staged]);

  return (
    <div id="cells" className="column">

      <Tickers generateCell={generateCell}/>

      <div id="staged" style={style} className="column">
        {displayStaged()}
      </div>
      

      <div id="all" className="column">
        {displayAllCells()}
      </div>

    </div>
  );
};

const msp = ({ cells }) => ({
  staged: cells.staged,
  cells: cells.all ? Object.values(cells.all) : []
});

const mdp = dispatch => ({
  createCell: cell => dispatch(createCell(cell))
})

export default connect(msp, mdp)(Cells);

