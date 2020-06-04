import React, { useState } from 'react';
import { connect } from 'react-redux';
import { toggleView } from '../../actions/ui_actions';

const Balance = ({ view, toggleView }) => {
  const [spending, setSpending] = useState(1200);
  const [savings, setSavings] = useState(25000);

  const format = amount => {
    return new Intl.NumberFormat().format(amount);
  };

  const spendingModule = <div>
    <h1 className="ticker-value row">{format(spending)}</h1>
    <h1 className="ticker-lable cal"><i className="far fa-credit-card" /></h1>
  </div>

  const savingsModule = <div>
    <h1 className="ticker-value row">{format(savings)}</h1>
    <h1 className="ticker-lable cal"><i className="fas fa-piggy-bank" /></h1>
  </div>

  const handleView = () => {
    switch (view) {
      case ('spending'):
        toggleView('savings');
        break;
      default:
        toggleView('spending');
    }
  };

  return (
    <div id="cal" onClick={() => handleView()} className="module cal">

      {view === 'savings' ? savingsModule : spendingModule}

    </div>
  )
};

const msp = ({ ui }) => ({
  view: ui.view
})

const mdp = dispatch => ({
  toggleView: view => dispatch(toggleView(view))
})

export default connect(msp, mdp)(Balance);
