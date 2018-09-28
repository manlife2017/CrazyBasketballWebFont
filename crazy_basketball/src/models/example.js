import * as index from "../services/example";


export default {

  namespace: 'example',

  state: {},

  // 模块初始化
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      console.log(history);
      dispatch({type:"fetch"})
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      console.log("fetch go go go")
      const data = yield  call(index.query)
      console.log(data)
    },
  },

  reducers: {
    save(state, action) {
      console.log("save go go go")
      return { ...state, ...action.payload };
    },
  },

};
