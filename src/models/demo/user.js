import axios from 'axios';

export default {

  namespace: 'user',

  state: {
    // isFetching: false,          改成用局部控制偵聽loading
    error: null,
    user: null
  },

  subscriptions: {
    setup({ dispatch, history }) { 
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) { 
      yield put({ type: 'save' });
    },
    *fetchUser(_, { call, put }) {  
      yield put({ type: 'fetch/start' });
      // const user = yield call(axios.get, "https://jsonplaceholder.typicode.com/users");
      // yield put({ type: "fetch/success", user: user });
      try {
        const user = yield call(axios.get, "https://jsonplaceholder.typicode.com/users");
        yield put({ type: "fetch/success", user: user });
      } catch(e) {
         yield put({ type: "fetch/error", error: e.message });
      }
    },
  },

  reducers: {

    'fetch/start' (state, action) {
      return {
        // isFetching: true,  改成用局部控制偵聽loading
        error: null,
        user: null
      }
    },

    'fetch/success' (state, action) {
      return {
        // isFetching: false,  改成用局部控制偵聽loading
        error: null,
        user: action.user
      }
    },

    'fetch/error' (state, action) {
      return {
        // isFetching: false,  改成用局部控制偵聽loading
        error: action.error,
        user: null
      }
    }
  },

};
