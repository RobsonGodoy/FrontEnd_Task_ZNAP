export interface IProduto {
    id_produto: number;
    nome: string;
    preco: number;
    id_categoria: {
      descricao: string;
    };
  }