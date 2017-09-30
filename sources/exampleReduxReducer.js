function todosReducer(state = [], action) {
  // ...
}

function visibilityFilterReducer(state = 'SHOW_ALL', action) {
  // ...
}

// Questo è il Reducer composto
const todoAppReducer = combineReducers({
  todos: todosReducer,
  visibilityFilter: visibilityFilterReducer
});