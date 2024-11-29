import axios from "axios";

const instance=axios.create(
    {
        baseURL:"https://67495c7c868020296630aab6.mockapi.io/todo",
        timeout:5000
    }
);

export const getTodos=async ()=>{
    const response = instance.get("/TodoItem");
    return (await response).data
}

export const addTodo=async (todo)=>{
    const response=instance.post("/TodoItem",todo)
    return (await response).data
}