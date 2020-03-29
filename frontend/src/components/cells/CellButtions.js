import React from 'react';

const CellButtons = ({cellData, setCellData}) => {

  const handleFrequency = e => {
    e.preventDefault();
    let toggle = '';

    if (cell.type === 'cash') {
      switch (cellData.frequency) {
        case ('Frequency'):
          toggle = "Weekly";
          break;
        case ('Weekly'):
          toggle = "Bi-Weekly";
          break;
        case ('Bi-Weekly'):
          toggle = 'Semi-Monthly';
          break;
        case ('Semi-Monthly'):
          toggle = 'Monthly';
          break;
        case ('Monthly'):
          toggle = 'Frequency';
          break;
        default:
          toggle = 'Frequency';
      }
    } else if (cell.type === 'expenses') {
      switch (cellData.frequency) {
        case ('Frequency'):
          toggle = "Daily";
          break;
        case ('Daily'):
          toggle = "Weekly";
          break;
        case ('Weekly'):
          toggle = "Monthly";
          break;
        case ('Monthly'):
          toggle = 'Yearly';
          break;
        case ('Yearly'):
          toggle = 'Frequency';
          break;
        default:
          toggle = 'Frequency';
      }
    } 
    
    setCellData({
      ...cellData,
      [e.target.value]: toggle
    });

  };

  const toggleView = () => {
    let visible = {};
    if ((cellData.title !== '') && (cellData.amount !== '')) {
      visible = {
        height: '2rem',
        marginTop: '1.5rem'
      };
    }
  };

  return (
    <div style={visible} className="row cell-options">
      <button className="trash"><i className="fas fa-trash-alt" /></button>
      <button
        style={toggleView()}
        onClick={handleFrequency}
        value="frequency"
        className="frequency">{cellData.frequency}</button>
      <button className="check"><i className="fas fa-check" /></button>
    </div>
  )
};

export default CellButtons;