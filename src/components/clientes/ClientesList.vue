<template>
  <v-container fluid>
    <v-layout row>
      <v-main>
        <v-app-bar>
          <v-app-bar-title class="text-center">Lista de Clientes</v-app-bar-title>
        </v-app-bar>
        <v-container class="mt-15">
          <v-row class="mb-4">
            <v-btn @click="abrirModalNovoCliente" class="me-2 text-none" color="green" prepend-icon="mdi-export-variant"
              variant="flat">
              Novo Cliente
            </v-btn>
            <ClienteForm ref="novoClienteModal" @cliente-atualizado="getClientes" />
            <v-text-field v-model="search" prepend-inner-icon="mdi-magnify" density="compact" label="Pesquisar" flat
              hide-details variant="solo-filled"></v-text-field>
          </v-row>
          <v-table fixed-header height="400px">
            <thead>
              <tr>
                <th class="text-left">ID</th>
                <th class="text-left">Nome</th>
                <th class="text-left">Email</th>
                <th class="text-left">Editar/Excluir</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="cliente in clientes" :key="cliente.id_cliente">
                <td>{{ cliente.id_cliente }}</td>
                <td>{{ cliente.nome }}</td>
                <td>{{ cliente.email }}</td>
                <td>
                  <v-btn @click="editarCliente(cliente)" color="yellow-darken-2" icon="mdi-table-edit" />
                  <v-btn @click="excluirCliente(cliente)" color="red-darken-3" icon="mdi-close-circle" />
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
import ClienteService from '@/services/clienteService.ts';
import { ICliente } from '@/interface/ICliente.ts';
import ClienteForm from "@/components/clientes/ClientesForm.vue";

export default {
  data() {
    return {
      drawer: true,
      clientes: [] as ICliente[],
      search: ''
    };
  },
  created() {
    this.getClientes();

  },
  methods: {
    async getClientes() {
      try {
        const response = await ClienteService.getClientes();
        this.clientes = response['Lista de Clientes'];
      } catch (error) {
        console.error('Erro ao carregar clientes: ', error)
      }

    },
    abrirModalNovoCliente() {
      (this.$refs.novoClienteModal as any).dialog = true;

    },
    editarCliente(cliente: ICliente) {
      (this.$refs.novoClienteModal as any).editarCliente(cliente);

    },
    async excluirCliente(cliente: ICliente) {
      try {
        await ClienteService.excluirCliente(cliente.id_cliente as number);
        this.getClientes()
      } catch (error) {
        console.error('Erro ao excluir cliente: ', error)
      }
    }

  },
  components: {
    ClienteForm
  }
};
</script>
  