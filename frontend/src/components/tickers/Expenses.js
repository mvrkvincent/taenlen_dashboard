import React from 'react';
import { connect } from 'react-redux';

const Expenses = ({ expenses, cells, generateCell }) => {

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

  return (
    <div id="expenses" onClick={() => generateCell('expenses')} className='module expenses'>

      {displayExpenses()}

      <h1 className="ticker-lable expenses"><i className="fas fa-arrow-down" /></h1>
      
    </div>
  )
}

const msp = ({ cells }) => ({
  cells: cells.all ? Object.values(cells.all) : []
})

const mdp = dispatch => ({
  // setBalance: balance => dispatch(setBalance(balance))
})

export default connect(msp, mdp)(Expenses);