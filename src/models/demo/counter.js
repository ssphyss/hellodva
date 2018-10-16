import { delay } from 'dva/saga';
import pathToRegexp from 'path-to-regexp';

export default {

  namespace: 'counter',

  state: {
    count: 501
  },

  // setup　可以隨便定義
  subscriptions: {
    setup(props) { 
        console.log('props：',props);
    },
    setup2({ dispatch, history }) { 
        console.log('subscriptions 的 dispatch：',dispatch);
        console.log('subscriptions 的 history：',history);
        window.onresize = () => {
          dispatch({ type: 'add' });
      };
    },
    // onClick({ dispatch }) {
    //   document.addEventListener('click', () => {
    //     dispatch({ type: 'add' });
    //     dispatch({ type: 'asyncAdd' });
    //   })
    // },
    setupHistory({ dispatch, history }) {
      history.listen((location) => {
        // console.log('setupHistory的location：',location);
        // dispatch({ type: 'add' });
        
        // if (location.pathname === '/counter') {
        //   dispatch({ type: 'add' });
        // }

        const match = pathToRegexp('/counter').exec(location.pathname);

        if (match) {
          console.log('setupHistory的location匹配方法２：',location);
          dispatch({ type: 'add' })
        }
      })
    }
  },


  effects: {
    // 等同於
    // *asyncAdd(_, { call, put, select }) { }
  
    *asyncAdd({ payload }, { call, put, select }) { 
      // const counter = yield select(state => state.counter)
      // console.log('counter：',counter);
      // const counter = yield select(({ counter }) => counter)
      // console.log('{ counter }：',counter);

      // const counter = yield select(_ => _.counter)
      // console.log('_ => _.counter：',counter);
      const { counter } = yield select(_ => _);
      console.log('_ => _：',counter);

      yield call(delay,1000);
      yield put({ 
        type: 'add' 
      });
    },
  },

  reducers: {
    add(state, action) {
      return { 
        count: state.count + 100
       };
    },
    des(state, action) {
      return { 
        count: state.count - 1
       };
    },
    // add(state, action) {
    //   console.log('打印action：',action);
    //   console.log('打印action.type：',action.type);
    //   console.log('打印action.name：',action.name);
    //   // return { ...state, ...action.payload };
    //   return { 
        
    //     count: state.count + 1
    //    };
    // },
    // 'add'(state, action) {
    //   return { 
    //     count: state.count + 100
    //    };
    // },    
    // 'login/start'(state, action) {
    //   return { 
    //     count: state.count + 100
    //    };
    // },
    // 'login/end'(state, action) {
    //   return { 
    //     count: state.count - 100
    //    };
    // },
  }
};
