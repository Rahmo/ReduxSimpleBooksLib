import { combineReducers } from 'redux';
import  BooksReducer  from './reducerBooks';
import ActiveBook from './reducerActiveBook';

const rootReducer = combineReducers({
  // state: (state = {
  //   books: BooksReducer
  // }) => state
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
