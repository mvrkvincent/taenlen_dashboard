import React from 'react';

const Cell = ({ cell }) => { 

  const generateSymbol = () => {
    switch(cell.type) {
      case ('cash'):
        return <i className="fas fa-arrow-up"/>;
      case ('expenses'):
        return <i className="fas fa-arrow-down"/>;
      default:
        return <i className="far fa-calendar-alt"/>;
    }
  };

  return(
    <div className={`${cell.type} cell module row`}>
      <div className="row">
        {generateSymbol()}
        <div className="bold">{cell.title}</div>
      </div>
      <span>{cell.amount}</span>
    </div>
  )
};

export default Cell;