<template>
    <v-dialog v-model="dialog" max-width="500" @click:outside="fecharModal">
        <v-card>
            <v-card-title>Produto</v-card-title>
            <v-card-text>
                <v-text-field v-model="nome" :counter="10" label="Nome do Cliente" required hide-details></v-text-field>
                <v-text-field v-model="email" :counter="10" label="Email" required hide-details></v-text-field>
            </v-card-text>
            <v-card-actions>
                <v-btn @click="criarNovoCliente" color="green">Salvar Cliente</v-btn>
                <v-btn @click="fecharModal" color="red">Cancelar</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script lang="ts">
import ClienteService from '@/services/clienteService.ts';
import { ICliente } from '@/interface/ICliente';

export default {
    data() {
        return {
            dialog: false,
            nome: '' as string,
            email: '' as string,
            modoEdicao: false,
            ClienteIdEdicao: -1 as any,
        }
    },
    created() {

    },
    methods: {
        async criarNovoCliente() {
            try {
                if (this.modoEdicao) {
                    await ClienteService.atualizarCliente(this.ClienteIdEdicao, this.nome, this.email);
                } else {
                    await ClienteService.criarCliente(this.nome, this.email);
                }
                this.$emit('cliente-atualizado');
            } catch(error) {
                console.error('Erro ao criar/atulizar cliente: ', error)
            }
            this.fecharModal()
        },
        fecharModal() {
            this.dialog = false;
            this.nome = '';
            this.email = '';
            this.modoEdicao = false;
            this.ClienteIdEdicao = -1;
        },
        editarCliente(cliente: ICliente) {
            this.dialog =true;
            this.nome = cliente.nome;
            this.email = cliente.email;
            this.ClienteIdEdicao = cliente.id_cliente;
            this.modoEdicao = true;
        }
    }
}

</script>