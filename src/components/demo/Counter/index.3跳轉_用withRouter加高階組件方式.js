import React from 'react';

// 用在複雜路由傳遞,後面包高階組件
import { withRouter } from 'dva/router'

const Counter = ({counter, dispatch}) => {
    
  return (
    <div> 
        <button onClick={ () => history.push('/')}>回到根目錄</button>
    </div>
  )
}

// 搭配路由,高階組件包
export default withRouter(Counter);





// import React from 'react';

// const Counter = ({ counter, dispatch }) => {
//   return (
//     <div>
//       <h1>{ counter.count }</h1>
//       <button onClick={ () => { dispatch({ type: 'counter/add' }) } }>+</button>
//     </div>
//   )
// }

// Counter.propTypes = {
// }

// export default Counter;