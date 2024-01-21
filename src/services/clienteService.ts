import axios from 'axios';

const API_BASE_URL = 'http://localhost:3456';

export default {
  async getClientes() {
    try {
      const response = await axios.get(`${API_BASE_URL}/clientes`);
      return response.data;
    } catch (error) {
      console.error('Erro ao obter clientes:', error);
      throw error;
    }
  },
  async criarCliente(nome: string, email: string) {
    try {
      const response = await axios.post(`${API_BASE_URL}/clientes`, { nome, email });
      return response.data;
    } catch (error) {
      console.error('Erro ao criar cliente:', error);
      throw error;
    }
  },
  async atualizarCliente(id: number, nome: string, email: string) {
    try {
      const response = await axios.put(`${API_BASE_URL}/clientes/${id}`, { nome, email });
      return response.data;
    } catch (error) {
      console.error('Erro ao atualizar cliente:', error);
      throw error;
    }
  },
  async excluirCliente(id: number) {
    try {
      const response = await axios.delete(`${API_BASE_URL}/clientes/${id}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao excluir cliente:', error);
      throw error;
    }
  },
};
