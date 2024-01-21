<template>
  <v-app>
    <v-navigation-drawer :width="180" permanent>
    <v-list-item title="Controle do Admin" subtitle="Dev Robson Jr"></v-list-item>
    <v-divider></v-divider>
    <v-list-item link to="/produtos" title="Produtos"></v-list-item>
    <v-list-item link to="/categorias" title="Categorias"></v-list-item>
    <v-list-item link to="/clientes" title="Clientes"></v-list-item>
  </v-navigation-drawer>
  <router-view></router-view>
  </v-app>
</template>
<style scoped></style>
<script setup lang="ts"></script>