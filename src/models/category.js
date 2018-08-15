import { query as queryCategorys, queryCurrent } from '../services/category';

export default {
  namespace: 'category',

  state: {
    list: [],
    currentCategory: {},
  },

  effects: {
    *fetch(_, { call, put }) {
      const response = yield call(queryCategorys);
      yield put({
        type: 'save',
        payload: response,
      });
    },
    *fetchCurrent(_, { call, put }) {
      const response = yield call(queryCurrent);
      yield put({
        type: 'saveCurrentCategory',
        payload: response,
      });
    },
  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        list: action.payload,
      };
    },
    saveCurrentCategory(state, action) {
      return {
        ...state,
        currentCategory: action.payload || {},
      };
    },
    changeNotifyCount(state, action) {
      return {
        ...state,
        currentCategory: {
          ...state.currentCategory,
          notifyCount: action.payload,
        },
      };
    },
  },
};
