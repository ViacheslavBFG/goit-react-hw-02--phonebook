import React from 'react';

 const Filter = ({ value, onChange }) => (
  <input
    type="text"
    name="filter"
    placeholder="Search contacts"
    value={value}
    onChange={onChange}
  />
);

export default Filter;