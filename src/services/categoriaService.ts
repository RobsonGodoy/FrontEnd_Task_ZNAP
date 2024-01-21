import axios from 'axios';
import { ICategoria } from '@/interface/ICategoria';
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
  async criarCategoria(novaCategoria: ICategoria) {
    try {
      const response = await axios.post(`${API_BASE_URL}/categorias`, novaCategoria);
      return response.data;
    } catch (error) {
      console.error('Erro ao criar categoria:', error);
      throw error;
    }
  },

  // Método para atualizar uma categoria existente
  async atualizarCategoria(idCategoria: number, dadosAtualizados: object) {
    try {
      const response = await axios.put(`${API_BASE_URL}/categorias/${idCategoria}`, dadosAtualizados);
      return response.data;
    } catch (error) {
      console.error('Erro ao atualizar categoria:', error);
      throw error;
    }
  },

  // Método para excluir uma categoria
  async excluirCategoria(idCategoria: number) {
    try {
      const response = await axios.delete(`${API_BASE_URL}/categorias/${idCategoria}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao excluir categoria:', error);
      throw error;
    }
  },
};