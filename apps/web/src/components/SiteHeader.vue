<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, RouterLink } from 'vue-router';

const route = useRoute();

const isProducts = computed(() => route.path === '/products');
const isCheckout = computed(() => route.path === '/checkout');
</script>

<template>
  <header class="border-b border-zinc-200 bg-white">
    <div class="mx-auto flex min-h-16 max-w-screen-xl flex-wrap items-center justify-between gap-4 px-4 py-3 md:px-6 lg:px-8">
      <RouterLink to="/home" class="flex items-center gap-2 text-base font-medium tracking-tight">
        <span class="h-5 w-5 rounded-md border border-zinc-900"></span>
        <span>Monoline</span>
      </RouterLink>

      <nav class="order-3 flex basis-full flex-wrap items-center justify-start gap-x-6 gap-y-2 pt-1 text-sm font-normal text-zinc-600 md:order-none md:basis-auto md:justify-center md:pt-0" aria-label="Main navigation">
        <RouterLink to="/products" :class="isProducts ? 'text-zinc-900' : 'hover:text-zinc-900'">New arrivals</RouterLink>
        <RouterLink to="/products" :class="isProducts ? 'text-zinc-900' : 'hover:text-zinc-900'">Women</RouterLink>
        <RouterLink to="/products" :class="isProducts ? 'text-zinc-900' : 'hover:text-zinc-900'">Men</RouterLink>
        <RouterLink to="/home" :class="route.path === '/home' ? 'text-zinc-900' : 'hover:text-zinc-900'">Home</RouterLink>
      </nav>

      <RouterLink
        to="/checkout"
        class="inline-flex h-9 items-center justify-center gap-2 rounded-md border border-zinc-200 bg-white px-3 text-sm font-normal hover:bg-zinc-50"
        aria-label="Cart"
      >
        <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.5 3h2l2.4 12.4a2 2 0 0 0 2 1.6h8.8a2 2 0 0 0 2-1.6L21 7H6"/></svg>
        <span class="hidden md:inline" :class="isCheckout ? 'text-zinc-900' : ''">Cart</span>
      </RouterLink>
    </div>
  </header>
</template>
