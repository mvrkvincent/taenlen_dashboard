import React, { useState } from 'react';
import { connect } from 'react-redux';
import { toggleView } from '../../actions/ui_actions';
import { months } from '../../utils/ticker_utils';

const Calendar = ({ view, toggleView }) => {
  const today = new Date();
  // const wd = days[today.toString().split(' ')[0]];
  const wd = today.toString().split(' ')[0];
  const dd = today.getDate();
  const mm = months[today.getMonth()];
  const yyyy = today.getFullYear(); 
  
  const [calValues, setCalValues] = useState({
    f1: wd,
    f2: dd,
  });

  const handleView = () => {
    switch (view) {
      case ('week'):
        toggleView('month');
        setCalValues({ f1: mm, f2: yyyy });
        break;
      default:
        toggleView('week');
        setCalValues({ f1: wd, f2: dd });
    }
  };

  return(
    <div id="cal" onClick={() => handleView()} className="module cal">

      <h1 className="ticker-value row">{calValues.f1} {calValues.f2}</h1>
      <h1 className="ticker-lable cal"><i className="far fa-calendar-alt" /></h1>
      
    </div>
  ) 
};

const msp = ({ ui }) => ({
  view: ui.view
})

const mdp = dispatch => ({
  toggleView: view => dispatch(toggleView(view))
})

export default connect(msp, mdp)(Calendar);
