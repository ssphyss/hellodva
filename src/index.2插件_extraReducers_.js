import dva from 'dva';
import './index.css';
import { createBrowserHistory as createHistory } from 'history';
import createLoading from 'dva-loading';
import { createLogger } from 'redux-logger';


const logger = store => next => action => {
  console.log('中間件1　dispatching：', action);
  let result = next(action);
  console.log('中間件2　next state：', store.getState());
  return result;
};

const error = store => next => action => {
  try {
    console.log('error');
    next(action)
  } catch(e) {
    console.log('error ' + e);
  }
};


const extraReducers = {
  form(state = false, action) {
    switch (action.type) {
      case 'SHOW':
        return true;
      case 'HIDE':
        return false;
      default:
        return state
    }
  }
}

// 在異步才會發生作用
const onEffect = (effect, { put }, model, key) => {
    console.log('model：',model);
    return function*(...args) {
        yield put({ type: 'SHOW' });
        yield effect(...args);
        yield put({ type: 'HIDE' });
    };
}


// 1. Initialize
// const app = dva();


// 1. Initialize
const app = dva({
    history: createHistory(),
    // 插件的createLogger()
    // onAction: createLogger()

    // onAction:logger
    onAction: [logger, error],
    extraReducers: extraReducers,
    onEffect: onEffect
});


// 2. Plugins
// app.use({});
// loading插件,要傳入參數namespace預設loading,可以傳空
app.use(createLoading());



// console.log('models：',require('./models/').default)
// 3. Model
// app.model(require('./models/example').default);
// app.model(require('./models/counter').default);
// require('./models').default.forEach(key => app.model(key.default));
require('./models/demo').default.forEach(key => app.model(key.default));
// require('./models/demo/index.js').default.forEach(key => app.model(key.default));



// 4. Router 引入位置
// app.router(require('./router').default);
app.router(require('./../config/router.config').default);

// 5. Start
app.start('#root');

// console.dir(app);
console.log('入口頁輸出app._store.getState()：',app._store.getState());