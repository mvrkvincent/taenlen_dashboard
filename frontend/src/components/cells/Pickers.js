import React from 'react';
import { days, months } from '../../utils/cell_utils';

export const DayPicker = ({ style, cell, handleChange }) => {
  let dayOptions = Object.values(days).map(day => <option key={day} value={day}>{day}</option>)
  return (
    <select
      id='day'
      style={style}
      onChange={handleChange}
      value={cell.day}
      required="required"
      className="option">{dayOptions}</select>
  )
};

export const DatePicker = ({ style, cell, handleChange }) => {
  let dateOptions = [];
  let date = 1
  while (dateOptions.length < 31) {
      dateOptions.push(<option key={date} value={date}>{date}</option>)
      date++
  };

  return (
    <select
      id='date'
      style={style}
      onChange={handleChange}
      value={cell.date}
      required="required"
      className="option">{dateOptions}</select>
  )
};

// export const DatePicker = ({ style, cell, handleChange }) => {
//   let dateOptions = [];
//   let date = 1
//   while (dateOptions.length < 31) {
//     let formattedDate;
//     if (date === 1 || date === 21 || date === 31) {
//       formattedDate = date.toString() + 'st'
//       dateOptions.push(<option key={date} value={date}>{formattedDate}</option>)
//       date++
//     } else if (date === 2 || date === 22) {
//       formattedDate = date.toString() + 'nd'
//       dateOptions.push(<option key={date} value={date}>{formattedDate}</option>)
//       date++
//     } else if (date === 3 || date === 23) {
//       formattedDate = date.toString() + 'rd'
//       dateOptions.push(<option key={date} value={date}>{formattedDate}</option>)
//       date++
//     } else {
//       formattedDate = date.toString() + 'th'
//       dateOptions.push(<option key={date} value={date}>{formattedDate}</option>)
//       date++
//     }
//   };

//   return (
//     <select
//       id='date'
//       style={style}
//       onChange={handleChange}
//       value={cell.date}
//       required="required"
//       className="option">{dateOptions}</select>
//   )
// };

export const MonthPicker = ({style, cell, handleChange}) => {
  let monthOptions = Object.values(months).map(mon => <option key={mon} value={mon}>{mon}</option>)
  return(
    <select 
      id="month"
      style={style} 
      onChange={handleChange} 
      value={cell.month}
      required="required" 
      className="option">{monthOptions}</select>
  )
};

