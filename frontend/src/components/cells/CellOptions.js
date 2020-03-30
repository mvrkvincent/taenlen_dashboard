import React from 'react';

const CellButtons = ({ cellData, setCellData}) => {

  const handleFrequency = e => {
    e.preventDefault();
    let toggle = '';
   
      switch (cellData.frequency) {
        case ('One Time'):
          toggle = "Weekly";
          break;
        case ('Weekly'):
          toggle = "Bi-Weekly";
          break;
        case ('Bi-Weekly'):
          toggle = 'Monthly';
          break;
        case ('Monthly'):
          toggle = 'Yearly';
          break;
        default:
          toggle = 'One Time';
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
    return visible;
  };

  return (
    <div style={toggleView()} className="row cell-options">
      <button
        onClick={handleFrequency}
        value="frequency"
        className="frequency">{cellData.frequency}</button>
      <button className="check"><i className="fas fa-check" /></button>
    </div>
  )
};

export default CellButtons;