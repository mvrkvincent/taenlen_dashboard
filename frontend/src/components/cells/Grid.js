import React from 'react';
import Cell from './Cell';

const Grid = ({ cells }) => {

  const darkMode = {
    background: '#1c1c1c',
    borderColor: '#1c1c1c',
    boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.5)'
  };

  const displayAllCash = () => {
    let allCash = [];
    cells.forEach((cell, i) => {
      if (cell.label === 'cash') {
        allCash.push(<Cell key={i} cell={cell} />);
      }
    });
    if (allCash[0]) {
      return allCash;
    } else {
      return <span className="no-cells">Add Income</span>
    }
  };

  const displayAllExpenses = () => {
    let allExpenses = [];
    cells.forEach((cell, i) => {
      if (cell.label === 'expenses') {
        allExpenses.push(<Cell key={i} cell={cell} />);
      }
    });
    if (allExpenses[0]) {
      return allExpenses;
    } else {
      return <span className="no-cells">Add Expenses</span>
    }
  };

  return(
      <div id="all" style={darkMode} className="module row">
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