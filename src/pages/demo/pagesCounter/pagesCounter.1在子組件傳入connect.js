import React from 'react';
import Counter from './../../components/demo/Counter'
import PropTypes from 'prop-types';

const PageCounter = (props) => {
  return (
    <div className="demo-box">
      <h1>點擊範例</h1>
      <p>PageCounter 引入Counter組件</p>
      <hr/>
      <Counter />
    </div>
  )
}

Counter.propTypes = {
  counter: PropTypes.object
}

export default PageCounter;