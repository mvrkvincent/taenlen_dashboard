import React from 'react';

const Cell = ({ cell }) => { 

  const generateSymbol = () => {
    switch(cell.type) {
      case ('cash'):
        return <i className="fas fa-arrow-up"/>;
      case ('expenses'):
        return <i className="fas fa-arrow-down"/>;
    }
  };

  return(
    <div className={`${cell.type} cell module`}>
      <div className="row">
        {generateSymbol()}
        <div className="bold">{cell.title}</div>
        <span>{cell.amount}</span>
      </div>
    </div>
  )
};

export default Cell;