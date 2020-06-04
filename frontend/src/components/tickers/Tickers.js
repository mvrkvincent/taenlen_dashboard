import React from 'react';
import Calendar from './Calendar';
import Cash from './Cash';
import Expenses from './Expenses';
import Balance from './Balance';

const Tickers = ({ generateCell }) => {

  return(
    <div id="tickers" className="row">

      <Cash generateCell={generateCell} />

      <Balance />

      <Expenses generateCell={generateCell} />
      
    </div>
  )
}



export default Tickers;