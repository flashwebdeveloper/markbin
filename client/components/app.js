import React from 'react';
import Header from './header.js';
import BinsList from './bins/bins_list';

export default (props) => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
}
