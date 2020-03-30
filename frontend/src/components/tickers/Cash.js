import React from 'react';


const Cash = ({ generateCell }) => {
  const cash = 2400;

  const formatCash = cash => {
    return new Intl.NumberFormat().format(cash);
  };

  return(
    <div id="cash" onClick={() => generateCell('cash')} className='module cash'>
      <h1 className="ticker-value">
        {formatCash(cash)}
      </h1>
      <h1 className="ticker-lable cash"><i className="fas fa-arrow-down"></i></h1>
    </div>
  )
} 

export default Cash;