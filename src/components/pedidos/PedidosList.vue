<template>
  <v-container>
    <v-main>
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-card-title>Incluir Pedido</v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="12" md="6">
                  <v-select v-model="clienteSelecionado" :items="nomesClientes" label="Cliente" required></v-select>
                </v-col>
                <v-col cols="12" md="6">
                  <v-select v-model="produtoSelecionado" :items="nomesProdutos" label="Escolha um Produto" required></v-select>
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
    </v-main>
  </v-container>
</template>

<script lang="ts">
import { ICliente } from '@/interface/ICliente';
import { IProduto } from '@/interface/IProduto';
import ClienteService from '@/services/clienteService.ts';
import ProdutoService from '@/services/produtosService.ts';

export default {
  data() {
    return {
      clienteSelecionado: null,
      produtoSelecionado: null,
      clientes: [] as Array<ICliente>,
      produtos: [] as Array<IProduto>,
    };
  },
  computed: {
    nomesClientes() {
      return this.clientes.map(cliente => cliente.nome);
    },
    nomesProdutos() {
      return this.produtos.map(produto => produto.nome);
    },
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
      console.log('Pedido adicionado:', this.clienteSelecionado, this.produtoSelecionado);
      this.clienteSelecionado = null;
      this.produtoSelecionado = null;
    },
  },
};
</script>