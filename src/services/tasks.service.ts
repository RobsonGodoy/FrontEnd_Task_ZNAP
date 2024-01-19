import axios from 'axios';

const BASE_URL = 'http://localhost:7000/tarefas';

export const TaskService = {
  getAllTasks: async () => {
    const response = await axios.get(BASE_URL);
    return response.data;
  },
  getTaskById: async (taskId: number) => {
    const response = await axios.get(`${BASE_URL}/${taskId}`);
    return response.data;
  },
  addTask: async (newTask: { title: string; description: string }) => {
    const response = await axios.post(BASE_URL, newTask);
    return response.data;
  },
  updateTask: async (taskId: string, updatedTask: { title: string; description: string }) => {
    const response = await axios.put(`${BASE_URL}/${taskId}`, updatedTask);
    return response.data;
  },
  deleteTask: async (taskId: number) => {
    const response = await axios.delete(`${BASE_URL}/${taskId}`);
    return response.data;
  },
};
