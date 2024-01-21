<template>
    <v-container fluid>
      <v-layout row>
        <v-main>
          <v-app-bar>
            <v-app-bar-title class="text-center">Lista de Categorias</v-app-bar-title>
          </v-app-bar>
          <v-container class="mt-15">
            <v-row class="mb-4">
              <v-btn @click="abrirModalNovaCategoria" class="me-2 text-none" color="green" prepend-icon="mdi-export-variant"
                variant="flat">
                Nova Categoria
              </v-btn>
              <CategoryForm ref="novaCategoriaModal" @categoria-atualizada="getCategorias" />
              <v-text-field v-model="search" prepend-inner-icon="mdi-magnify" density="compact" label="Pesquisar" flat
                hide-details variant="solo-filled"></v-text-field>
            </v-row>
            <v-table fixed-header height="400px">
              <thead>
                <tr>
                  <th class="text-left">ID</th>
                  <th class="text-left">Descrição</th>
                  <th class="text-left">Editar/Excluir</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="categoria in categorias" :key="categoria.id_categoria">
                  <td>{{ categoria.id_categoria }}</td>
                  <td>{{ categoria.descricao }}</td>
                  <td>
                    <v-btn @click="editarCategoria(categoria)" color="yellow-darken-2" icon="mdi-table-edit" />
                    <v-btn @click="excluirCategoria(categoria)" color="red-darken-3" icon="mdi-close-circle" />
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
  import CategoriaServicos from '@/services/categoriaService';
  import { ICategoria } from '@/interface/ICategoria.ts';
  import CategoryForm from '@/components/categorias/CategoriesForm.vue';
  
  export default {
    data() {
      return {
        drawer: true,
        categorias: [] as ICategoria[],
        search: '',
      };
    },
    created() {
      this.getCategorias();
    },
    methods: {
      async getCategorias() {
        try {
          const response = await CategoriaServicos.getCategorias();
          this.categorias = response['categoria de produtos'];
        } catch (error) {
          console.error('Erro ao carregar categorias: ', error);
        }
      },
      abrirModalNovaCategoria() {
        (this.$refs.novaCategoriaModal as any).dialog = true;
      },
      editarCategoria(categoria: ICategoria) {
        (this.$refs.novaCategoriaModal as any).editarCategoria(categoria);
      },
      async excluirCategoria(categoria: ICategoria) {
        try {
          await CategoriaServicos.excluirCategoria(categoria.id_categoria as number);
          this.getCategorias();
        } catch (error) {
          console.error('Erro ao excluir categoria: ', error);
        }
      },
    },
    components: {
      CategoryForm
    }
  };
  </script>
  