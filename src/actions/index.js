//actionCreator
export function selectBook(book) {
    //selectBook is an  action creator, it neds to rerutnr an action,
    //an object with a type propoerty
  return {
    type: 'BOOK_SELECTED',//action
    payload: book
  };
}