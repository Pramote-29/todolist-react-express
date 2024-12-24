import axios from "axios";

const apiurl = "http://localhost:5001/api/todo";

export const Alltodo = async () => await axios.get(apiurl);

export const removeqTodo = async (id) => await axios.delete(apiurl + "/" + id);

export const addTodo = async (data) => await axios.post(apiurl, data);

export const updateTodo = async (id, data) =>
  await axios.put(apiurl + "/" + id, data);