import React from 'react';
import { days, months } from '../../utils/cell_utils';

export const DayPicker = ({ style, handleChange }) => {
  let dayOptions = days.map((day, i) => <option key={i} value={day}>{day}</option>)
  return (
    <select
      style={style}
      onChange={handleChange}
      value='Day'
      required="required"
      className="option">{dayOptions}</select>
  )
}

export const DatePicker = ({ style, handleChange }) => {
  let dateOptions = [];
  let date = 1
  while (dateOptions.length < 31) {
    debugger
    let formattedDate;
    if (date === 1 || date === 21 || date === 31) {
      formattedDate = date.toString() + 'st'
      dateOptions.push(<option key={date} value={date}>{formattedDate}</option>)
      date++
    } else if (date === 2 || date === 22) {
      formattedDate = date.toString() + 'nd'
      dateOptions.push(<option key={date} value={date}>{formattedDate}</option>)
      date++
    } else if (date === 3 || date === 23) {
      formattedDate = date.toString() + 'rd'
      dateOptions.push(<option key={date} value={date}>{formattedDate}</option>)
      date++
    } else {
      formattedDate = date.toString() + 'th'
      dateOptions.push(<option key={date} value={date}>{formattedDate}</option>)
      date++
    }
  }

  return (
    <select
      style={style}
      onChange={handleChange}
      value='Date'
      required="required"
      className="option">{dateOptions}</select>
  )
};

export const MonthPicker = ({style, handleChange}) => {
  let monthOptions = months.map((mon, i) => <option key={i} value={mon}>{mon}</option>)
  return(
    <select 
      style={style} 
      onChange={handleChange} 
      value='Month'
      required="required" 
      className="option">{monthOptions}</select>
  )
}

