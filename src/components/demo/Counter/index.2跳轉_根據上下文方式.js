import React from 'react';

// 搭配上下文取得路由跳轉
import PropTypes from 'prop-types';

// 有第2個參數context
const Counter = ({counter, dispatch}, context) => {
  return (
    <div>
        <button onClick={ () => context.router.history.push('/') }>context回到根目錄</button>
    </div>
  )
}

// 記得 Counter.contextTypes
Counter.contextTypes = {
  router: PropTypes.object
}

export default Counter;

