import React from 'react';
import { connect } from 'react-redux';

const Expenses = ({ edit, expenses, generateCell }) => {

  const format = expenses => {
    return new Intl.NumberFormat().format(expenses);
  };

  const displayExpenses = () => {
    if (expenses > 0) {
      return <h1 className="ticker-value">{format(expenses)}</h1>;
    } else {
      return <h1 className="ticker-value no-cells">0</h1>
    }
  };

  const stageCell = () => {
    if (edit) {
      generateCell('expenses')
    }
  }

  return (
    <div id="expenses" onClick={() => stageCell()} className='module expenses'>

      {displayExpenses()}

      <h1 className="ticker-lable expenses"><i className="fas fa-arrow-down" /></h1>
      
    </div>
  )
}

const msp = ({ ui, cells }) => ({
  edit: ui.edit,
  cells: cells.all ? Object.values(cells.all) : []
})

export default connect(msp, null)(Expenses);