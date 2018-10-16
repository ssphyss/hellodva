import React from 'react';
import { routerRedux } from 'dva/router'

const Counter = ({history, counter, dispatch}) => {
    
  return (
    <div>
        <button onClick={ () => dispatch(routerRedux.push('/')) }>routerRedux 回到根目錄</button>
    </div>
  )
}

export default Counter;
