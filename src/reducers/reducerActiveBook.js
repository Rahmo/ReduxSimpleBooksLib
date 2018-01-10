//ONLY the state if whats this reducer responsisble for not the app state
export default function (state = null, action){
    switch (action.type){
        case 'BOOK_SELECTED': 
         return action.payload
    }
    
    return state
}