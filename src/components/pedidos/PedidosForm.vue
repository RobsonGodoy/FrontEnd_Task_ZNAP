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

</script>