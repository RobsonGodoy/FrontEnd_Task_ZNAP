import axios from 'axios';
const API_BASE_URL = 'http://localhost:3456';

export default {

    async getCategorias() {
      try {
        const response = await axios.get(`${API_BASE_URL}/categorias`);
        return response.data;
      } catch (error) {
        console.error('Erro ao obter categorias:', error);
        throw error;
      }
    },
  
  };