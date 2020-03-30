import React from 'react';
import Calendar from './Calendar';
import Cash from './Cash';
import Expenses from './Expenses';

const Tickers = () => {

  return(
    <div id="tickers" className="row">
      <Cash />

      <Calendar />

      <Expenses />
    </div>
  )
}



export default Tickers;