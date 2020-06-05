import React from 'react';
import { days, months } from '../../utils/ticker_utils';

const Calendar = ({ darkStyle }) => {
  const today = new Date();
  const wd = days[today.toString().split(' ')[0]];
  // const wd = today.toString().split(' ')[0];
  const dd = today.getDate();
  const mm = months[today.getMonth()];
  const yyyy = today.getFullYear(); 

  return(

    <button
      style={darkStyle.dash}
      className="dash-button">
        {wd}, {dd} {mm} {yyyy}
    </button>
  ) 
};

export default Calendar;
