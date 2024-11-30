import axios from "axios";

const instance=axios.create(
    {
        baseURL:"https://67495c7c868020296630aab6.mockapi.io/todo",
        timeout:5000
    }
);

export const getTodos=async ()=>{
    const response = await instance.get("/TodoItem");
    return (await response).data
}

export const addTodo=async (todo)=>{
    const response= await instance.post("/TodoItem",todo)
    return response.data
}

export const deleteTodo=async (id)=>{
    const response=await instance.delete(`/TodoItem/${id}`)
    return  response.data
}

export const searchTodo=async (id)=>{
    const response=await instance.get(`/TodoItem/${id}`)
    return response.data
}

export const updateTodo=async (id,text)=>{
    const response=await instance.put(`/TodoItem/${id}`,text)
    return response.data
}