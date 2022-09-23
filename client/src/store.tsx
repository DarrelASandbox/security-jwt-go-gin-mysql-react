import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userLoginReducer } from './reducers/userReducer';

const reducers = combineReducers({
  userLogin: userLoginReducer,
});

// Argument of type 'string | null' is not assignable to parameter of type 'string'.
// Type 'null' is not assignable to type 'string'.
// So we use `!` to indicate that this is not undefined.
const userInfo = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo')!)
  : undefined;

// https://stackoverflow.com/questions/67296603/type-string-is-not-assignable-to-type-undefined-error-on-react-redux-initial
// Read up for `as {}`
const initialState = { userLogin: { userInfo } } as {};
const middleware = [thunk];

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

export type RootState = ReturnType<typeof store.getState>;
