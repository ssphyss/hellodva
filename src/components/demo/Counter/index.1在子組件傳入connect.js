import React from 'react';
import {connect} from 'dva';


// const Counter = (props) => {
//   console.log(props);
//   console.log(props.counter);
//   return (
//     <div>
//         <p>Counter組件開始</p>
//         Counter
//     </div>
//   )
// }

const Counter = ({counter}) => {

  console.log(counter);
  return (
    <div>
        <p>Counter組件開始</p>
        <h1>{counter.count}</h1>
    </div>
  )
}

Counter.propTypes = {

}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  };
};

// export default Counter;
// export default connect()(Counter) ;
export default connect(mapStateToProps)(Counter) ;