import React from 'react';


const Expenses = ({ generateCell }) => {
  const expenses = 1000;

  const formatExpenses = expenses => {
    return new Intl.NumberFormat().format(expenses);
  };

  return (
    <div id="expenses" onClick={() => generateCell('expenses')} className='module expenses'>
      <h1 className="ticker-value">
        {formatExpenses(expenses)}
      </h1>
      <h1 className="ticker-lable expenses"><i className="fas fa-arrow-up" /></h1>
    </div>
  )
}

export default Expenses;