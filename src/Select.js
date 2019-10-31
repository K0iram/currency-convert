import React from 'react';

const Select = ({selectValue, onChange, rates}) => {
  return (  
    <select name="Currency" value={selectValue} onChange={onChange}>
      {Object.keys(rates)
        .map(name =>
          <option selected={name === 'EUR'} value={name}>{name}</option>
        )
      } 
    </select>
  );
}
 
export default Select;