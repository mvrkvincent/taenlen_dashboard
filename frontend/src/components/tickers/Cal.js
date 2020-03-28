import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { toggleView } from '../../actions/ui_actions';
import { months } from './utils/months';

const Cal = ({ view, toggleView }) => {
  const today = new Date();
  const wd = today.toString().split(' ')[0];
  const dd = today.getDate();
  const mm = months[today.getMonth()];
  const yyyy = today.getFullYear(); 
  
  const [calFields, setCalFields] = useState({
    f1: '',
    f2: '',
  });

  const handleView = () => {
    switch (view) {
      case ('month'):
        toggleView('week');
        break;
      case ('week'):
        toggleView('month');
        break;
      default:
        toggleView('month');
    }
  };

  useEffect(() => {
    switch (view) {
      case ('month'):
        setCalFields({ f1: mm, f2: yyyy });
        break;
      case ('week'):
        setCalFields({ f1: wd, f2: dd });
        break;
      default:
        toggleView('month');
    }
  }, [view]);

  return(
    <div id="cal" onClick={() => handleView()} className='module cal'>
      <div className='row'>
        <div id="f1" className="cal-field">{calFields.f1}</div>
        <div className="cal-field">{calFields.f2}</div>
      </div>
      <h1 className="cal-lable cal"><i className="far fa-clock"></i></h1>
    </div>
  ) 
};

const msp = ({ ui }) => ({
  view: ui.view
})

const mdp = dispatch => ({
  toggleView: view => dispatch(toggleView(view))
})

export default connect(msp, mdp)(Cal);

