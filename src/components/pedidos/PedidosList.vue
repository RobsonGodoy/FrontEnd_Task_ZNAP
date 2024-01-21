<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>Incluir Pedido</v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12" md="6">
                <v-autocomplete
                  v-model="clienteSelecionado"
                  :items="clientes"
                  item-text="nome"
                  item-value="id_cliente"
                  label="Escolha um Cliente"
                ></v-autocomplete>
              </v-col>
              <v-col cols="12" md="6">
                <v-autocomplete
                  v-model="produtoSelecionado"
                  :items="produtos"
                  item-text="nome"
                  item-value="id_produto"
                  label="Escolha um Produto"
                ></v-autocomplete>
              </v-col>
            </v-row>
            <v-row class="mt-4">
              <v-col cols="12">
                <v-btn @click="adicionarPedido" color="green">Adicionar Pedido</v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import ClienteService from '@/services/clienteService.ts';
import ProdutoService from '@/services/produtosService.ts';

export default {
  data() {
    return {
      clienteSelecionado: null,
      produtoSelecionado: null,
      clientes: [],
      produtos: [],
    };
  },
  created() {
    this.carregarClientes();
    this.carregarProdutos();
  },
  methods: {
    async carregarClientes() {
      try {
        const response = await ClienteService.getClientes();
        this.clientes = response['Lista de Clientes'];
      } catch (error) {
        console.error('Erro ao carregar clientes: ', error);
      }
    },
    async carregarProdutos() {
      try {
        const response = await ProdutoService.getProdutos();
        this.produtos = response['Lista de Produtos'];
      } catch (error) {
        console.error('Erro ao carregar produtos: ', error);
      }
    },
    adicionarPedido() {
      // Implemente a lógica para adicionar o pedido usando as seleções feitas
      // clienteSelecionado e produtoSelecionado.
      console.log('Pedido adicionado:', this.clienteSelecionado, this.produtoSelecionado);
      // Limpar as seleções após adicionar o pedido, se necessário
      this.clienteSelecionado = null;
      this.produtoSelecionado = null;
    },
  },
};
</script>
