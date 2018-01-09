import { combineReducers } from 'redux';
import  BooksReducer  from './reducerBooks'

const rootReducer = combineReducers({
  // state: (state = {
  //   books: BooksReducer
  // }) => state
  books: BooksReducer
});

export default rootReducer;
