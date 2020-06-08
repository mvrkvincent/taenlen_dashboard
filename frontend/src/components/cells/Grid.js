import React, { useState } from 'react';
import { connect } from 'react-redux';
import { toggleEdit } from '../../actions/ui_actions';
import Cell from './Cell';

const Grid = ({ edit, cells, toggleEdit, darkStyle }) => {

  const style = edit ? { ...darkStyle.toggle, borderColor: '#26C6DA', color: '#26C6DA' } : { ...darkStyle.toggle, borderColor: 'transparent' };

  const editText = edit ? 'Save Cells' : 'Edit Cells';

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
      <button style={style} className="edit" onClick={() => toggleEdit()}>{editText}</button>

    </>
  )
};

const msp = ({ ui }) => ({
  edit: ui.edit
})

const mdp = dispatch => ({
  toggleEdit: () => dispatch(toggleEdit())
})

export default connect(msp, mdp)(Grid);