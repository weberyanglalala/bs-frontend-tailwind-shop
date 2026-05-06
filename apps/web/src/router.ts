import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from './views/HomeView.vue';
import ProductsView from './views/ProductsView.vue';
import ProductView from './views/ProductView.vue';
import CheckoutView from './views/CheckoutView.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: HomeView, meta: { title: 'Home · Monoline' } },
    { path: '/products', component: ProductsView, meta: { title: 'Products · Monoline' } },
    { path: '/product', component: ProductView, meta: { title: 'Product · Monoline' } },
    { path: '/checkout', component: CheckoutView, meta: { title: 'Checkout · Monoline' } },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

router.afterEach((to: { meta: { title?: string } }) => {
  document.title = to.meta.title || 'Vue Tailwind Shop';
});

export default router;
