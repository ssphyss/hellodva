import dva from 'dva';
import './index.css';
import { createBrowserHistory as createHistory } from 'history';
import createLoading from 'dva-loading';

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

// 1. Initialize
const app = dva({
    history: createHistory(),
    // onAction:logger
    onAction: [logger, error]
});


// 2. Plugins
app.use(createLoading());


// 3. Model
require('./models/demo').default.forEach(key => app.model(key.default));


// 4. Router 引入位置
app.router(require('./../config/router.config').default);

// 5. Start
app.start('#root');

