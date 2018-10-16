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
const app = dva({
  onEffect: onEffect
});


// 2. Plugins
app.use(createLoading());


// 3. Model
require('./models/demo').default.forEach(key => app.model(key.default));


// 4. Router
app.router(require('./../config/router.config').default);


// 5. Start
app.start('#root');
