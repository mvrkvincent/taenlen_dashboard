import React from 'react';
import { connect } from 'react-redux';
import { setBalance } from '../../actions/balance_actions';

const Cash = ({ cash, cells, generateCell, setBalance }) => {

  const format = cash => {
    return new Intl.NumberFormat().format(cash);
  };

  const displayCash = () => {
    if (cash > 0) {
      return <h1 className="ticker-value">{format(cash)}</h1>;
    } else {
      return <h1 className="ticker-value no-cells">0</h1>
    }
  };

  return(
    <div id="cash" onClick={() => generateCell('cash')} className='module cash'>

      {displayCash()}

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