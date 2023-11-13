// redux/store.ts
import { createStore, AnyAction } from 'redux';

export interface RootState {
  page: string;
}

export const actionTypes = {
  SET_PAGE: 'SET_PAGE',
};

const initialState: RootState = {
  page: '#about',
};

const reducer = (state: RootState = initialState, action: AnyAction): RootState => {
  switch (action.type) {
    case actionTypes.SET_PAGE:
      return { ...state, page: action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
