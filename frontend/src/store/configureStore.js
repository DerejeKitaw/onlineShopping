import { createStore, applyMiddleware, compose ,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import categoryReducer from './reducers/categoryReducer';
import errorReducer from './reducers/errorReducer';

const initialState = {};

const middleware = [thunk];

const store = createStore(
  combineReducers({
    category: categoryReducer,
    errors: errorReducer
  }),
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;