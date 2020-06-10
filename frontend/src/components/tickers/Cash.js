import React from 'react';
import { connect } from 'react-redux';

const Cash = ({ edit, cash, generateCell }) => {

  const format = cash => {
    return new Intl.NumberFormat().format(cash);
  };

  const displayCash = () => {
    if (cash > 0) {
      return <h1 className="ticker-value">{format(cash)}</h1>;
    } else {
      return <h1 className="ticker-value no-cells">0</h1>
    }
  };

  const stageCell = () => {
    if (edit) {
      generateCell('cash')
    }
  }

  return(
    <div id="cash" onClick={() => stageCell()} className='module cash'>

      {displayCash()}

      <h1 className="ticker-lable cash"><i className="fas fa-arrow-up"/></h1>
      
    </div>
  )
} 

const msp = ({ ui, cells }) => ({
  edit: ui.edit,
  cells: cells.all ? Object.values(cells.all) : []
})

export default connect(msp, null)(Cash);