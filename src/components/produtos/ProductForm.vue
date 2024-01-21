<template>
    <v-dialog v-model="dialog" max-width="500" @click:outside="fecharModal">
        <v-card>
            <v-card-title>Produto</v-card-title>
            <v-card-text>
                <v-text-field v-model="nome" :counter="10" label="Nome do Produto" required hide-details></v-text-field>
                <v-text-field v-model="preco" :counter="10" label="Preço" required hide-details></v-text-field>
                <v-select v-model="select" :items="items" :rules="[v => !!v || 'Categoria é requerida']" label="Categoria"
                    required></v-select>
            </v-card-text>
            <v-card-actions>
                <v-btn @click="criarNovoProduto" color="green">Salvar Produto</v-btn>
                <v-btn @click="fecharModal" color="red">Cancelar</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
  
<script lang="ts">
import ProdutoService from '@/services/produtosService.ts';
import CategoriaService from '@/services/categoriaService.ts';
import { IProduto } from '@/interface/IProduto';
export default {
    data() {
        return {
            dialog: false,
            nome: '' as string,
            preco: 0 as number,
            select: '' as string,
            items: [] as Array<string>,
            categorias: [] as Array<{ id_categoria: number; descricao: string }>,
            modoEdicao: false,
            produtoIdEdicao: -1 as any,
        };
    },
    created() {
        this.carregarCategorias();
    },
    methods: {
        async carregarCategorias() {
            try {
                const response = await CategoriaService.getCategorias();
                this.categorias = response['categoria de produtos'].map((categoria: any) => ({
                    id_categoria: categoria.id_categoria,
                    descricao: categoria.descricao,
                }));
                this.items = this.categorias.map(categoria => categoria.descricao);
            } catch (error) {
                console.error('Erro ao carregar categorias:', error);
            }
        }, async criarNovoProduto() {
            try {
                const categoriaSelecionada = this.categorias.find(categoria => categoria.descricao === this.select);
                if (categoriaSelecionada) {
                    const novoProduto = {
                        nome: this.nome,
                        preco: this.preco,
                        id_categoria: categoriaSelecionada.id_categoria,
                    };
                    if (this.modoEdicao) {
                        await ProdutoService.atualizarProduto(this.produtoIdEdicao, novoProduto);
                    } else {
                        await ProdutoService.criarProduto(novoProduto);
                    }
                } else {
                    console.error('Categoria não encontrada para a descrição selecionada.');
                }
                this.$emit('produto-atualizado');
            } catch (error) {
                console.error('Erro ao criar/atualizar produto:', error);
            }
            this.fecharModal();
        },
        fecharModal() {
            this.dialog = false;
            this.nome = '';
            this.preco = 0;
            this.select = '';
            this.modoEdicao = false;
            this.produtoIdEdicao = -1;
        },
        editarProduto(produto: IProduto) {
            this.dialog = true;
            this.nome = produto.nome;
            this.preco = produto.preco;
            this.select = produto.id_categoria.descricao;
            this.modoEdicao = true;
            this.produtoIdEdicao = produto.id_produto;
        }
    },
};
</script>