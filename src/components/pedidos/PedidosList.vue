<template>
    <v-container fluid>
      <v-layout row>
        <v-main>
          <v-app-bar>
            <v-app-bar-title class="text-center">Lista de Pedidos</v-app-bar-title>
          </v-app-bar>
          <v-container class="mt-15">
            <v-table fixed-header height="400px">
              <thead>
                <tr>
                  <th class="text-left">ID</th>
                  <th class="text-left">Descrição</th>
                  <th class="text-left">Editar/Excluir</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="pedido in pedidos" :key="pedido.id_pedido">
                  <td>{{ pedido.id_pedido }}</td>
                  <td>{{ pedido.descricao }}</td>
                  <td>
                    <v-btn @click="editarPedido(pedido)" color="yellow-darken-2" icon="mdi-table-edit" />
                    <v-btn @click="excluirPedido(pedido)" color="red-darken-3" icon="mdi-close-circle" />
                  </td>
                </tr>
              </tbody>
            </v-table>
          </v-container>
        </v-main>
      </v-layout>
    </v-container>
  </template>

<script lang="ts">
import CategoriaService from '@/services/categoriaService.ts';
import PedidosForm from '@/components/pedidos/PedidosForm.vue';

export default {
  data() {
    return {
        drawer:true,
        pedidos: [] as []
    };
  },
  created() {

  },
  methods: {

  }
};
</script>
