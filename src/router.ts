
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import ProductList from '@/components/produtos/ProductList.vue';
import CategoriesList from '@/components/categorias/CategoriesList.vue';
import ClienteList from '@/components/clientes/ClientesList.vue';
import PedidosList from '@/components/pedidos/PedidosList.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/produtos', component: ProductList },
  { path: '/categorias', component: CategoriesList },
  { path: '/clientes', component: ClienteList },
  { path: '/pedidos', component: PedidosList},
  // Outras rotas...
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
