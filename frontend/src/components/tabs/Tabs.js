import React from 'react';
import { connect } from 'react-redux';
import { createTab } from '../../actions/tab_actions';
import FinTab from './FinTab';

const Tabs = ({ tabs, createTab }) => {
  let cash = 2400;
  let expenses = 1000;
  
  const formatMoney = money => {
    return new Intl.NumberFormat().format(money);
  };

  const formatDate = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = String(today.getFullYear()).substr(-2).padStart(2, '0');

    today = mm + '.' + dd + '.' + yyyy;
    return today;
  };

  const generateTab = type => {
    createTab({
      type: type
    });
  };

  const displayTabs = () => {
    
    return tabs.map((tab, i) => <FinTab key={i} tab={tab} /> ) 
  };

  return (
    <>
      <div className="row tabs-head">
        <div id="cash" onClick={() => generateTab('cash')} className='module cash'>
          <h1 className="tabs-head-amount">
            {formatMoney(cash)}
          </h1>
          <h1 className="tabs-head-lable cash"><i className="fas fa-arrow-down"></i></h1>
        </div>
        <div id="time" className='module time'>
          <h1 className="tabs-head-amount">
            {formatDate()}
          </h1>
          <h1 className="tabs-head-lable time"><i className="far fa-clock"></i></h1>
        </div>
        <div id="expenses" onClick={() => generateTab('expenses')} className='module expenses'>
          <h1 className="tabs-head-amount">
            {formatMoney(expenses)}
          </h1>
          <h1 className="tabs-head-lable expenses"><i className="fas fa-arrow-up"></i></h1>
        </div>
      </div>
      <div id="tabs" className="grid">
        {displayTabs()}
      </div>
    </>
  );
};

const msp = ({ tabs }) => ({
  tabs: Object.values(tabs)
});

const mdp = dispatch => ({
  createTab: tab => dispatch(createTab(tab))
})

export default connect(msp, mdp)(Tabs);

