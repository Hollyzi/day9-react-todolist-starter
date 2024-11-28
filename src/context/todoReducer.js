export const initialState = [
  {id: Date.now(), text: "the first todo", done: false},
  {id: Date.now(), text: "the second todo", done: false},
];

export const todoReducer = (state, action) => {
  if(action.type==="ADD"){
    return [...state, {id: Date.now(), text: action.payload, done: false}]
  }

  return state;
};