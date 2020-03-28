import React, { useState } from 'react';
import { connect } from 'react-redux';
import { toggleView } from '../../actions/ui_actions';
import { days, months } from './ticker_utils';

const Calendar = ({ view, toggleView }) => {
  const today = new Date();
  const wd = days[today.toString().split(' ')[0]];
  const dd = today.getDate();
  const mm = months[today.getMonth()];
  const yyyy = today.getFullYear(); 
  
  const [calFields, setCalFields] = useState({
    f1: wd,
    f2: dd,
  });

  const handleView = () => {
    switch (view) {
      case ('week'):
        toggleView('month');
        setCalFields({ f1: mm, f2: yyyy });
        break;
      default:
        toggleView('week');
        setCalFields({ f1: wd, f2: dd });
    }
  };

  return(
    <div id="cal" onClick={() => handleView()} className='module cal'>
      <h1 className="cal-field">{calFields.f1}&nbsp;{calFields.f2}</h1>
      <h1 className="cal-lable cal"><i className="far fa-calendar-alt" /></h1>
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

