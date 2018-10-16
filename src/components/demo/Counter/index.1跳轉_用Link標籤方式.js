import React from 'react';

//搭配Link標籤
import { Link } from 'dva/router'

const Counter = ({history, counter, dispatch}) => {
    
  return (
    <div>
        <Link to='/'>Link回到根目錄</Link>
    </div>
  )
}

export default Counter;
