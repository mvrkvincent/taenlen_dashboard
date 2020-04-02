import React from 'react';
import Calendar from './Calendar';
import Cash from './Cash';
import Expenses from './Expenses';

const Tickers = ({ generateCell }) => {

  return(
    <div id="tickers" className="row">

      <Cash generateCell={generateCell} />

      <Calendar />

      <Expenses generateCell={generateCell} />
      
    </div>
  )
}



export default Tickers;