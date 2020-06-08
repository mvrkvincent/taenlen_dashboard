import React from 'react';
import { connect } from 'react-redux';
import { toggleView } from '../../actions/ui_actions';
import { deleteCell } from '../../actions/cell_actions';

const Balance = ({ balance, staged, view, toggleView, generateCell, deleteCell }) => {

  const format = amount => {
    return new Intl.NumberFormat().format(amount);
  };

  const spendingModule = <div>
    <h1 className="ticker-value row">{format(balance.spending)}</h1>
    <h1 className="ticker-lable cal"><i className="far fa-credit-card" /></h1>
  </div>

  const savingsModule = <div>
    <h1 className="ticker-value row">{format(balance.savings)}</h1>
    <h1 className="ticker-lable cal"><i className="fas fa-piggy-bank" /></h1>
  </div>

  const handleView = () => {
    switch (view) {
      case ('spending'):
        toggleView('savings');
        generateCell({ label: 'savings' })
        break;
      default:
        toggleView('spending');
        deleteCell(staged.id)
    }
  };

  return (
    <div id="cal" onClick={() => handleView()} className="module cal">

      {view === 'savings' ? savingsModule : spendingModule}

    </div>
  )
};

const msp = ({ balance, cells, ui }) => ({
  staged: cells.staged,
  view: ui.view,
  balance: balance
})

const mdp = dispatch => ({
  toggleView: view => dispatch(toggleView(view)),
  deleteCell: cell => dispatch(deleteCell(cell))
})

export default connect(msp, mdp)(Balance);
