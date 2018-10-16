import React from 'react';

// 讓子層得到 history
// const PageCounter = (props) => {
const Counter = ({history, counter, dispatch, counterAdd, counterAsyncAdd}) => {
    
  // console.log('子層props：',props)
  console.log('子層得到history：',history)
  console.log('子層得到 counterAdd：',counterAdd);
  console.log(counterAdd);
  // console.log('子層counter：',counter)
  // console.log('子層counter.count：',counter.count)
  // console.log('子層dispatch()：',dispatch)
  return (
    <div>
        <p>Counter組件開始</p>
        <h1>{counter.count}</h1>

        <button onClick={ () => history.push('/')}>history.push回到根目錄</button>

        <br/><br/><br/>
        {/* <Link to='/'>Link回到根目錄</Link> */}

        <br/><br/><br/>
        {/* <button onClick={ () => context.router.history.push('/') }>context回到根目錄</button> */}
        {/* <button onClick={ () => { dispatch({ type: 'add'}) } }>按鈕</button>   */}
        <br/><br/><br/>

        <button onClick={ () => { dispatch({ type: 'counter/add', name: 'rails365點一下' }) } }>按鈕 + </button> 
        <button onClick={ () => { dispatch({ type: 'counter/des'}) } }>按鈕 - </button> 
        <br/><br/><br/>
        <button onClick={ () => { dispatch({ type: 'counter/login/start'}) } }>按鈕counter/login/start </button> 
        <button onClick={ () => { dispatch({ type: 'counter/login/end'}) } }>按鈕counter/login/end </button> 

        <br/><br/><br/>
        <button onClick={ () => { dispatch({ type: 'counter/add'}) } }> 一般add </button> 
        <button onClick={ () => { dispatch({ type: 'counter/asyncAdd'}) } }> 異步add(延遲1秒) </button> 

        <br/><br/><br/>
        <h3>體驗redux-actions</h3>
        <p>透過新增actions/index.js新增很多dispatch...來調用</p>
        <button onClick={ () => { counterAdd() }}> 體驗redux-actions＋ </button> 
        <button onClick={ () => { counterAsyncAdd() }}> 體驗redux-actions＋(延遲1秒) </button> 



    </div>
  )
}

Counter.propTypes = {

}

export default Counter;

// 搭配路由,高階組件包
// export default withRouter(Counter);





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