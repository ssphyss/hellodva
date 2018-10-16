import React from 'react';
import {connect} from 'dva';   //導入models數據
import './index.css';

const pagesUser = (props) => {
    // console.log('pagesUser的props：',props);
    // console.log('【pagesUser】的propsloading：',props.loading);
    console.log(props.loading.global);

    // const { isFetching, error, user } = props.user;
    const { error, user } = props.user;
    const { dispatch } = props;
    let isFetching = props.loading.effects["user/fetch"]

    let data;

    if (error) {
        data = error;
    } else if (isFetching) {
        data = "Loading..."
    } else {
        data = user && user.data[0].name
    }
    return (
        <div>
            <h1>User頁面</h1>  
            <h2>{ data }</h2>
            <button onClick={ () => { dispatch({ type: 'user/fetch' }) } }>get user</button>
            <button onClick={ () => { dispatch({ type: 'user/fetchUser' }) } } className='btn'>按鈕Ajax-Get User</button>
            {/* <button onClick={ () => { dispatch({ type: 'user/fetch' }) } }>get user</button> */}
            <br/><br/><br/><br/>
            <button onClick={ () => { dispatch({ type: 'SHOW' }) } } >按鈕SHOW</button>
        </div>
  )
}

pagesUser.propTypes = {

}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    loading: state.loading
  };
};

// export default pagesUser;
export default connect(mapStateToProps)(pagesUser);

