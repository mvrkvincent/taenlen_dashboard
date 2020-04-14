import React from 'react';
import { connect } from 'react-redux';
import { setBalance } from '../../actions/balance_actions';

const Cash = ({ cells, generateCell, setBalance }) => {
  let cash = 0;

  const formatCash = cash => {
    return new Intl.NumberFormat().format(cash);
  };

  const calculateCash = () => {
    cells.forEach(cell => {
      if (cell.label === 'cash') {
        cash += cell.amount;
      }
    });
    if (cash > 0) {
      return <h1 className="ticker-value">{formatCash(cash)}</h1>;
    } else {
      return <h1 className="ticker-value no-cells">0</h1>
    }
  };

  return(
    <div id="cash" onClick={() => generateCell('cash')} className='module cash'>

      {calculateCash()}

      <h1 className="ticker-lable cash"><i className="fas fa-arrow-up"/></h1>
      
    </div>
  )
} 

const msp = ({ cells }) => ({
  cells: cells.all ? Object.values(cells.all) : []
})

const mdp = dispatch => ({
  setBalance: balance => dispatch(setBalance(balance))
})

export default connect(msp, mdp)(Cash);