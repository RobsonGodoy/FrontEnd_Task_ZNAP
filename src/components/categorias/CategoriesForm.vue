<template>
    <v-dialog v-model="dialog" max-width="500" @click:outside="fecharModal">
      <v-card>
        <v-card-title>Categoria</v-card-title>
        <v-card-text>
          <v-text-field v-model="descricao" label="Descrição da Categoria" required hide-details></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="criarNovaCategoria" color="green">Salvar Categoria</v-btn>
          <v-btn @click="fecharModal" color="red">Cancelar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </template>
  
  <script lang="ts">
  import CategoriaService from '@/services/categoriaService.ts';
  import {ICategoria } from '@/interface/ICategoria';
  
  export default {
    data() {
      return {
        dialog: false,
        descricao: '' as string,
        modoEdicao: false,
        categoriaIdEdicao: -1 as any,
      };
    },
    methods: {
      async criarNovaCategoria() {
        try {
          const novaCategoria: ICategoria = {
            descricao: this.descricao,
          };
  
          if (this.modoEdicao) {
            await CategoriaService.atualizarCategoria(this.categoriaIdEdicao, novaCategoria);
          } else {
            await CategoriaService.criarCategoria(novaCategoria);
          }
          this.$emit('categoria-atualizada')

        } catch (error) {
          console.error('Erro ao criar ou atualizar categoria:', error);
        }
        this.fecharModal();
      },
      fecharModal() {
        this.descricao = '';
        this.modoEdicao = false;
        this.categoriaIdEdicao = -1;
        this.dialog = false;
      },
      editarCategoria(categoria: ICategoria) {
        this.descricao = categoria.descricao;
        this.modoEdicao = true;
        this.categoriaIdEdicao = categoria.id_categoria;
        this.dialog = true;
      },
    },
  };
  </script>
  