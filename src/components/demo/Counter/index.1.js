import React from 'react';
import { routerRedux } from 'dva/router'

const Counter = ({history, counter, dispatch, counterAdd, counterAsyncAdd}) => {
  return (
    <div>
        <button onClick={ () => { dispatch({ type: 'counter/asyncAddAA'}) } }> 體驗query-string+++ </button> 
    </div>
  )
}

Counter.propTypes = {

}

export default Counter;

