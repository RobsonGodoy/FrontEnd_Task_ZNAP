<template>
    <v-dialog v-model="dialog" max-width="500">
      <v-card>
        <v-card-title>Novo Produto</v-card-title>
        <v-card-text>
          <!-- Conteúdo do formulário para criar um novo produto -->
          <!-- Exemplo: campos de entrada, etc. -->
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="Nome do Produto"
            required
            hide-details
          ></v-text-field>
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="Preço"
            required
            hide-details
          ></v-text-field>
          <v-select
        v-model="select"
        :items="items"
        :rules="[v => !!v || 'Item is required']"
        label="Item"
        required
      ></v-select>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="criarNovoProduto" color="green">Criar Produto</v-btn>
          <v-btn @click="fecharModal" color="red">Cancelar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </template>
  
  <script lang="ts">
  export default {
    data() {
      return {
        dialog: false,
      };
    },
    methods: {
      async criarNovoProduto() {
        // Lógica para criar um novo produto
        // Chamada ao serviço ou API
        this.fecharModal();
      },
      fecharModal() {
        this.dialog = false;
      },
    },
  };
  </script>