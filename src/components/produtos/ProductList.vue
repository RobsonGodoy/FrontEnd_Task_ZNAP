<template>
    <v-app>
        <v-container fluid>
            <v-layout row>
                <v-navigation-drawer :width="180" permanent>
                    <v-list-item title="Controle do Admin" subtitle="Dev Robson Jr"></v-list-item>
                    <v-divider></v-divider>
                    <v-list-item link title="List Item 1"></v-list-item>
                    <v-list-item link title="List Item 2"></v-list-item>
                    <v-list-item link title="List Item 3"></v-list-item>
                </v-navigation-drawer>

                <v-main>
                    <v-app-bar>
                        <v-app-bar-title class="text-center">Lista de Produtos</v-app-bar-title>
                    </v-app-bar>
                    <v-container class="mt-15">
                        <v-row class="mb-4">
                            <v-btn @click="abrirModalNovoProduto" class="me-2 text-none" color="green"
                                prepend-icon="mdi-export-variant" variant="flat">
                                Novo Produto
                            </v-btn>
                            <ProductForm ref="novoProdutoModal" />
                            <v-btn class="me-2 text-none" color="red" prepend-icon="mdi-export-variant" variant="flat">
                                Excluir
                            </v-btn>
                            <v-text-field v-model="search" prepend-inner-icon="mdi-magnify" density="compact"
                                label="Pesquisar" flat hide-details variant="solo-filled"></v-text-field>
                        </v-row>
                        <v-table fixed-header height="400px">
                            <thead>
                                <tr>
                                    <th class="text-left">
                                    </th>
                                    <th class="text-left">
                                        Editar
                                    </th>
                                    <th class="text-left">
                                        ID
                                    </th>
                                    <th class="text-left">
                                        Nome
                                    </th>
                                    <th class="text-left">
                                        Preço
                                    </th>
                                    <th class="text-left">
                                        Categoria
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="produto in produtos" :key="produto.id_produto">
                                    <td><v-checkbox></v-checkbox></td>
                                    <td> editar </td>
                                    <td>{{ produto.id_produto }}</td>
                                    <td>{{ produto.nome }}</td>
                                    <td>{{ produto.preco }}</td>
                                    <td>{{ produto.id_categoria.descricao }}</td>
                                </tr>
                            </tbody>
                        </v-table>
                    </v-container>
                </v-main>
            </v-layout>
        </v-container>
    </v-app>
</template>
  
<script lang="ts">
import ProdutoService from '@/services/produtosService.ts';
import ProductForm from './ProductForm.vue';
import { IProduto } from '@/interface/IProduto'

export default {
    data() {
        return {
            drawer: true,
            produtos: [] as IProduto[],
            search: ''
        };
    },
    created() {
        this.getProdutos();
    },
    methods: {
        async getProdutos() {
            try {
                const response = await ProdutoService.getProdutos();
                if (response && response['Lista de Produtos']) {
                    this.produtos = response['Lista de Produtos'];
                }
                else {
                    console.warn('Resposta do ProdutoService não contém a propriedade esperada.');
                }
            }
            catch (error) {
                console.error('Erro ao carregar produtos:', error);
            }
        },
        abrirModalNovoProduto() {
            (this.$refs.novoProdutoModal as any).dialog = true;
        },
    },
    components: {
        ProductForm,
        // Não é necessário declarar "novoProdutoModal" aqui
    }
};
</script>
  