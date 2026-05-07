<script setup lang="ts">
import { RouterView } from 'vue-router';
import SiteHeader from './components/SiteHeader.vue';
import SiteFooter from './components/SiteFooter.vue';
</script>

<template>
  <div class="min-h-screen bg-white text-zinc-900 antialiased">
    <SiteHeader />
    <RouterView />
    <SiteFooter />
  </div>
</template>
