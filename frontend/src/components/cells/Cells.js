import React from 'react';
import { connect } from 'react-redux';
import { createCell } from '../../actions/cell_actions';
import FinCell from './FinCell';
import Tickers from '../tickers/Tickers';

const Cells = ({ staged, cells, createCell }) => {

  const generateCell = type => {
    createCell({
      type: type
    });
  };
  
  const displayStaged = () => {
    if (staged.type) {
      return <FinCell cell={staged} />;
    }
  };
  
  const displayAllCells = () => {
    if (cells[0]) {
      
      return cells.map((cell, i) => <FinCell key={i} cell={cell} />);
    } else if (!staged.type) {
      return <h1 className="no-cells">Your T&#230;nlen is Blank</h1>
    } 
  };

  return (
    <div id="cells" className="column">

      <Tickers generateCell={generateCell}/>

      <div id="staged" className="grid column">
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

const mdp = dispatch => ({
  createCell: cell => dispatch(createCell(cell))
})

export default connect(msp, mdp)(Cells);

