import React from 'react';
// import Counter from './../../../../components/demo/Counter';
import Counter from './../../../components/demo/Counter'
import {connect} from 'dva';
import PropTypes from 'prop-types';

// 按需導入
import { counterAdd, counterAsyncAdd } from './../../../actions'

// 從props可以看到有history可以取出
// 再傳遞給子層
// const PageCounter = (props) => {
// const PageCounter = ({counter}) => {
// const PageCounter = ({counter, dispatch}) => {
  const PageCounter = ({history, counter, dispatch, counterAdd, counterAsyncAdd}) => {

  // console.log('上層props：',props)
  console.log('上層history：',history)
  console.log('上層counter：',counter)
  console.log('上層dispatch：',dispatch)
  return (
    <div className="demo-box">
      <h1>點擊範例</h1>
      <p>PageCounter 引入Counter組件</p>
      <hr/>
      <Counter
        // counter {...props} 
        // counter={ counter }
        counter={ counter } dispatch={ dispatch }
        counterAdd={ counterAdd } counterAsyncAdd={ counterAsyncAdd } 
        history={ history } 
      />
    </div>
  )
}

Counter.propTypes = {
  counter: PropTypes.object
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  };
};


// export default PageCounter;
// export default connect()(PageCounter);
// export default connect(mapStateToProps)(PageCounter);
export default connect(mapStateToProps,{ counterAdd, counterAsyncAdd })(PageCounter);