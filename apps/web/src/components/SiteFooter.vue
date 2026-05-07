<template>
  <footer class="border-t border-zinc-200 bg-white">
    <div class="mx-auto grid max-w-screen-xl gap-8 px-4 py-12 md:grid-cols-3 md:px-6 lg:px-8">
      <div class="grid gap-3">
        <h2 class="text-base font-medium">Monoline</h2>
        <p class="text-sm leading-relaxed text-zinc-500">Minimal goods for everyday use, built around quiet details and clear function.</p>
      </div>
      <nav class="grid gap-3 text-sm text-zinc-600" aria-label="Footer shop">
        <h2 class="text-base font-medium text-zinc-900">Shop</h2>
        <RouterLink to="/products" class="hover:text-zinc-900">New arrivals</RouterLink>
        <RouterLink to="/products" class="hover:text-zinc-900">Apparel</RouterLink>
        <RouterLink to="/products" class="hover:text-zinc-900">Home goods</RouterLink>
      </nav>
      <nav class="grid gap-3 text-sm text-zinc-600" aria-label="Footer support">
        <h2 class="text-base font-medium text-zinc-900">Support</h2>
        <a href="#" class="hover:text-zinc-900">Shipping</a>
        <a href="#" class="hover:text-zinc-900">Returns</a>
        <a href="#" class="hover:text-zinc-900">Contact</a>
      </nav>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>
