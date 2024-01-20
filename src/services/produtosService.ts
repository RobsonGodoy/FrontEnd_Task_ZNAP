import axios from 'axios';

const API_BASE_URL = 'http://localhost:3456';

export default {
  // Método para obter todos os produtos
  async getProdutos() {
    try {
      const response = await axios.get(`${API_BASE_URL}/produtos`);
      return response.data;
    } catch (error) {
      console.error('Erro ao obter produtos:', error);
      throw error;
    }
  },

  // Método para obter um produto específico pelo ID
  async getProdutoPorId(produtoId: number) {
    try {
      const response = await axios.get(`${API_BASE_URL}/produtos/${produtoId}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao obter produto por ID:', error);
      throw error;
    }
  },

  // Método para criar um novo produto
  async criarProduto(novoProduto: object) {
    try {
      const response = await axios.post(`${API_BASE_URL}/produtos`, novoProduto);
      return response.data;
    } catch (error) {
      console.error('Erro ao criar produto:', error);
      throw error;
    }
  },

  // Método para atualizar um produto existente
  async atualizarProduto(produtoId: number, dadosAtualizados: object) {
    try {
      const response = await axios.put(`${API_BASE_URL}/produtos/${produtoId}`, dadosAtualizados);
      return response.data;
    } catch (error) {
      console.error('Erro ao atualizar produto:', error);
      throw error;
    }
  },

  // Método para excluir um produto
  async excluirProduto(produtoId: number) {
    try {
      const response = await axios.delete(`${API_BASE_URL}/produtos/${produtoId}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao excluir produto:', error);
      throw error;
    }
  },
};
