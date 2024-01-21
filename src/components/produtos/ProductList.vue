<template>
    <v-container fluid>
        <v-layout row>
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
                        <ProductForm ref="novoProdutoModal" @produto-atualizado="getProdutos" />
                        <v-text-field v-model="search" prepend-inner-icon="mdi-magnify" density="compact" label="Pesquisar"
                            flat hide-details variant="solo-filled"></v-text-field>
                    </v-row>
                    <v-table fixed-header height="400px">
                        <thead>
                            <tr>
                                <th class="text-left">
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
                                <th class="text-left">
                                    Editar/Excluir
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="produto in produtos" :key="produto.id_produto">
                                <td><v-checkbox></v-checkbox></td>
                                <td>{{ produto.id_produto }}</td>
                                <td>{{ produto.nome }}</td>
                                <td>{{ produto.preco }}</td>
                                <td>{{ produto.id_categoria.descricao }}</td>
                                <td>
                                    <v-btn @click="editarProduto(produto)" color="yellow-darken-2" icon="mdi-table-edit" />
                                    <v-btn @click="excluirProduto(produto)" color="red-darken-3" icon="mdi-close-circle" />
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

                this.produtos = response['Lista de Produtos'];

            }
            catch (error) {
                console.error('Erro ao carregar produtos:', error);
            }
        },
        abrirModalNovoProduto() {
            (this.$refs.novoProdutoModal as any).dialog = true;

        },
        editarProduto(produto: IProduto) {
            (this.$refs.novoProdutoModal as any).editarProduto(produto);

        },
        async excluirProduto(produto: IProduto) {
            try {
                await ProdutoService.excluirProduto(produto.id_produto as number);
                this.getProdutos();
            } catch (error) {
                console.error('Erro ao excluir produto:', error);
            }
        },
    },
    components: {
        ProductForm,
    }
};
</script>
  