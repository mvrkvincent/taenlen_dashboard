import React from 'react';
import { connect } from 'react-redux';
import { submitCell, updateCell } from '../../actions/cell_actions';

const CellOptions = ({ cell, setCellData, submitCell, updateCell, darkStyle }) => {

  const handleFrequency = e => {
    e.preventDefault();
    let toggle = '';
      switch (cell.frequency) {
        case ('One Time'):
          toggle = "Weekly";
          break;
        case ('Weekly'):
          toggle = "Monthly";
          break;
        case ('Monthly'):
          toggle = 'Yearly';
          break;
        default:
          toggle = 'One Time';
      }
    
    setCellData({
      ...cell,
      [e.target.value]: toggle
    });

  };

  const generatePriority = () => {
    if (cell.label === 'expenses') {
      return(
        <button style={darkStyle.button} onClick={handlePriority} value="priority" className="option">
          {cell.priority}
        </button>
      )
    } else {
      return null;
    }
  };

  const handlePriority = e => {
    e.preventDefault();
    let toggle = '';

    switch (cell.priority) {
      case ('Low'):
        toggle = "Medium";
        break;
      case ('Medium'):
        toggle = "High";
        break;
      default:
        toggle = 'Low';
    }

    setCellData({
      ...cell,
      [e.target.value]: toggle
    });

  };


  const generateDatePicker = () => {
    let picker = null;
    let dayOptions = [<option>Mon</option>, <option>Tue</option>, <option>Wed</option>]
    let dateOptions = [<option>1st</option>, <option>2nd</option>, <option>3rd</option>]
    let monthOptions = [<option>Jan</option>, <option>Feb</option>, <option>Mar</option>]
    let dayPicker = <select style={darkStyle.button} onChange={handleDate} value='Day' required="required" className="left option">{dayOptions}</select>
    let datePicker = <select style={darkStyle.button} onChange={handleDate} value='Date' required="required" className="left option">{dateOptions}</select>
    let monthPicker = <select style={darkStyle.button} onChange={handleDate} value='Month' required="required" className="left option">{monthOptions}</select>

    switch(cell.frequency) {
      case ('One Time'):
        picker = null;
        return picker;
      case ('Weekly'):
        picker = dayPicker;
        return picker;
      case ('Monthly'):
        picker = datePicker;
        return picker;
      case ('Yearly'):
        picker = [datePicker, monthPicker]
        return picker
      default:
        picker = null;
        return picker;
    }
  };

  const toggleView = () => {
    let visible = {};
    if ((cell.title !== '') && (cell.amount !== '')) {
      visible = {
        height: '4rem',
        paddingTop: '1rem'
      };
    }
    return visible;
  };

  const handleDate = e => {
    e.preventDefault();
    console.log(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const formattedCell = { ...cell, amount: parseInt(cell.amount.split(',').join('')) };

    if (cell.id) {
      updateCell(formattedCell);
    } else {
      submitCell(formattedCell);
    }

  };

  return (
    <div id="cell-options" style={toggleView()} className="row">

      <div className="row">

        <button style={darkStyle.button} onClick={handleFrequency} value="frequency" className="left option">
          {cell.frequency}
        </button>

        {generateDatePicker()}

        {generatePriority()}

      </div>

      <button style={darkStyle.button} onClick={handleSubmit} className="right action">
        <i className="fas fa-check"/>
      </button>

    </div>
  )
};

const mdp = dispatch => ({
  submitCell: cell => dispatch(submitCell(cell)),
  updateCell: cell => dispatch(updateCell(cell))
})

export default connect(null, mdp)(CellOptions);