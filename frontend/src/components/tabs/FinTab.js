import React, { useState } from 'react';

const FinTab = ({ tab }) => {
  const [tabData, setTabData] = useState({
    type: tab.type,
    title: tab.title || '',
    amount: tab.amount || ''
  });

  const placeholder = () => {
    switch(tabData.type) {
      case('cash'):
        return 'Income source...';
      case('expenses'):
        return 'Expense...';
      default:
        return '';
    }
  };

  const formatMoney = number => {
    const num = Number(number);
    return new Intl.NumberFormat().format(num);
  }; 

  const validateNumber = (name, number) => {
    const regex = /^[0-9]+$/;
    if (number.match(regex)) {
      const money = formatMoney(number);
      setTabData({
        ...tabData,
        [name]: money
      });
    }
  };
  
  const handleChange = e => {
    let name = e.target.name;
    let value = e.target.value;
    const number = value.split(',').join('');
    
    if (name === 'amount' && value !== '') {
      validateNumber(name, number);
    } else {
      setTabData({
        ...tabData,
        [name]: value
      });
    }
  };
  
  return (
    <div id="tab" className="module">
      <div className="row">
        <input className="tab-title"
          name="title"
          type="text"
          placeholder={placeholder()}
          value={tabData.title}
          onChange={handleChange}
        />
        <input
          name="amount"
          type="text"
          placeholder="1,000"
          value={tabData.amount}
          onChange={handleChange}
          className={tabData.type}
          />
      </div>
      <div className="column">
        {/* <input /> */}
      </div>
    </div>
  );
};

export default FinTab;