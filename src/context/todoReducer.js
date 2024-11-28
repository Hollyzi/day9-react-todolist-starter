export const initialState = [];

export const ADD = "ADD";
export const DELETE = "DELETE";
export const DONE = "DONE";
export const todoReducer = (state, action) => {
    if (action.type === ADD) {
        return [...state, {id: Date.now(), text: action.payload, done: false}]
    }
    if (action.type === DELETE) {
        return [...state].filter(e => e.id !== action.payload.id)
    }
    if (action.type === DONE) {
        [...state].forEach(e => {
                if (e.id === action.payload.id) {
                    e.done = true
                }
            }
        )
        return state;
    }
    return state;
};