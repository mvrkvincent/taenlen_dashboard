import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCells, stageCell } from '../../actions/cell_actions';
import StagedCell from './StagedCell';
import Tickers from '../tickers/Tickers';
import Grid from './Grid';

const Cells = ({ staged, cells, fetchCells, stageCell, darkMode }) => {
  const [style, setStyle] = useState({
    margin: null
  });

  const generateCell = label => {
    stageCell({
      label: label
    });
  };
  
  const displayStagedCell = () => {
    if (staged.label) {
      return <StagedCell cell={staged} darkMode={darkMode} />;
    }
  };

  const displayGrid = () => {
    if (cells[0]) {
      return <Grid cells={cells} darkMode={darkMode}/>
    } else if (!staged.type) {
      return <h1 className="no-cells title">Your T&#230;nlen is Blank</h1>
    } 
  };

  useEffect(() => {
    if (staged.type) {
      setStyle({ marginBottom: '2rem' });
    }
  }, [staged]);

  useEffect(() => {
    fetchCells();
  }, [])

  return (
    <div id="cells" className="column">

      <Tickers generateCell={generateCell}/>

      <div id="staged" style={style} className="column">
        {displayStagedCell()}
      </div>
      

      <div id="grid" className="column">
        {displayGrid()}
      </div>

    </div>
  );
};

const msp = ({ cells }) => ({
  staged: cells.staged,
  cells: cells.all ? Object.values(cells.all) : []
});

const mdp = dispatch => ({
  fetchCells: () => dispatch(fetchCells()),
  stageCell: cell => dispatch(stageCell(cell))
})

export default connect(msp, mdp)(Cells);

