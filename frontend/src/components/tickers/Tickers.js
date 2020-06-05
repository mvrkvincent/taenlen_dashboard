import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setBalance } from '../../actions/balance_actions';
import Cash from './Cash';
import Expenses from './Expenses';
import Balance from './Balance';

const Tickers = ({ cells, setBalance, generateCell }) => {
  const [total, setTotal] = useState({
    cash: 0,
    expenses: 0,
    balance: 0
  });

  const calculateValues = () => {
    let cash = 0;
    let expenses = 0;
    let balance = cash - expenses;

    cells.forEach(cell => {
      if (cell.label === 'cash') {
        cash += cell.amount;
      } else if (cell.label === 'expenses') {
        expenses += cell.amount;
      }
    });

    setTotal({
      cash: cash,
      expenses: expenses,
      balance: cash - expenses
    });
  };

  useEffect(() => {
     calculateValues();
  }, [cells]);

  return(
    <div id="tickers" className="row">

      <Cash cash={total.cash} generateCell={generateCell} />

      <Balance balance={total.balance} generateCell={generateCell}/>

      <Expenses expenses={total.expenses} generateCell={generateCell} />
      
    </div>
  )
}

const msp = ({ cells }) => ({
  cells: cells.all ? Object.values(cells.all) : []
})

const mdp = dispatch => ({
  setBalance: balance => dispatch(setBalance(balance))
})

export default connect(msp, mdp)(Tickers);
