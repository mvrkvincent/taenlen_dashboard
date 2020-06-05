import React from 'react';
import Cell from './Cell';

const Grid = ({ cells, darkStyle }) => {

  const displayAllCash = () => {
    let allCash = [];

    cells.forEach(cell => {
      if (cell.label === 'cash') {
        allCash.push(<Cell key={cell.id} cell={cell} />);
      }
    });

    if (allCash[0]) {
      return allCash;
    } else {
      return <span className="no-cells">Add Income</span>
    };
  };

  const displayAllExpenses = () => {
    let allExpenses = [];

    cells.forEach(cell => {
      if (cell.label === 'expenses') {
        allExpenses.push(<Cell key={cell.id} cell={cell} />);
      }
    });

    if (allExpenses[0]) {
      return allExpenses;
    } else {
      return <span className="no-cells">Add Expenses</span>
    }

  };

  return(
    <>

      <div id="all" style={darkStyle.module} className="module row">
        <div id="all-cash" className="column">
          {displayAllCash()}
        </div>
        <div id="all-expenses">
          {displayAllExpenses()}
        </div>
      </div>

    </>
  )
};

export default Grid;