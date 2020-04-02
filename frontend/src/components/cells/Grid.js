import React from 'react';
import Cell from './Cell';

const Grid = ({ cells }) => {

  const displayAllCash = () => {
    let allCash = [];
    cells.forEach((cell, i) => {
      if (cell.label === 'cash') {
        allCash.push(<Cell key={i} cell={cell} />);
      }
    });
    return allCash;
  };

  const displayAllExpenses = () => {
    let allExpenses = [];
    cells.forEach((cell, i) => {
      if (cell.label === 'expenses') {
        allExpenses.push(<Cell key={i} cell={cell} />);
      }
    });
    return allExpenses;
  };

  return(
      <div id="all" className="module row">
        <div id="all-cash" className="column">
          {displayAllCash()}
        </div>
        <div id="all-expenses">
          {displayAllExpenses()}
        </div>
      </div>
  )
};


export default Grid;