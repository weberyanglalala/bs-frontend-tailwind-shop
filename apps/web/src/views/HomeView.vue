<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { categories, featuredProducts } from '../data/shop';
</script>

<template>
  <main>
    <section class="mx-auto grid max-w-screen-xl items-center gap-8 px-4 py-16 md:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
      <div class="grid gap-6">
        <span class="inline-flex h-7 w-fit items-center rounded-md border border-zinc-200 bg-white px-3 text-sm font-normal text-zinc-600">New season</span>
        <div class="grid gap-4">
          <h1 class="max-w-xl text-2xl font-medium leading-tight tracking-tight text-zinc-900">Quiet essentials for everyday living</h1>
          <p class="max-w-xl text-base font-normal leading-relaxed text-zinc-600">A minimal collection of clothing, objects, and home goods designed with clear structure and lasting utility.</p>
        </div>
        <div class="flex flex-wrap gap-3">
          <RouterLink to="/products" class="inline-flex h-10 items-center justify-center rounded-md border border-zinc-900 bg-zinc-900 px-4 text-sm font-medium text-zinc-50 hover:bg-zinc-800">Shop collection</RouterLink>
          <RouterLink to="/products" class="inline-flex h-10 items-center justify-center rounded-md border border-zinc-200 bg-white px-4 text-sm font-medium text-zinc-900 hover:bg-zinc-50">View lookbook</RouterLink>
        </div>
      </div>
      <div class="grid min-h-72 place-items-center rounded-lg border border-zinc-200 bg-zinc-100 p-6 lg:min-h-[420px]">
        <div class="grid h-full min-h-56 w-full place-items-center rounded-lg border border-zinc-200 bg-white text-sm text-zinc-500">Hero image</div>
      </div>
    </section>

    <section class="mx-auto max-w-screen-xl px-4 py-12 md:px-6 lg:px-8">
      <div class="mb-6 flex items-end justify-between gap-4">
        <h2 class="text-lg font-medium text-zinc-900">Shop by category</h2>
      </div>
      <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
        <article v-for="category in categories" :key="category.title" class="grid min-h-32 gap-4 rounded-lg border border-zinc-200 bg-white p-6">
          <span class="h-8 w-8 rounded-md border border-zinc-200 bg-zinc-100"></span>
          <div class="grid gap-2">
            <h3 class="text-base font-medium text-zinc-900">{{ category.title }}</h3>
            <p class="text-sm font-normal leading-relaxed text-zinc-500">{{ category.description }}</p>
          </div>
        </article>
      </div>
    </section>

    <section class="mx-auto max-w-screen-xl px-4 py-12 md:px-6 lg:px-8">
      <div class="mb-6 flex items-end justify-between gap-4">
        <h2 class="text-lg font-medium text-zinc-900">Featured products</h2>
        <RouterLink to="/products" class="inline-flex h-10 items-center justify-center rounded-md border border-zinc-200 bg-white px-4 text-sm font-medium hover:bg-zinc-50">View all</RouterLink>
      </div>
      <div class="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
        <article v-for="product in featuredProducts" :key="product.id" class="overflow-hidden rounded-lg border border-zinc-200 bg-white">
          <RouterLink to="/product">
            <div class="grid aspect-square place-items-center border-b border-zinc-200 bg-zinc-100 text-sm text-zinc-500">{{ product.imageLabel }}</div>
            <div class="grid gap-2 p-6">
              <h3 class="text-base font-medium">{{ product.name }}</h3>
              <p class="text-sm text-zinc-500">{{ product.description }}</p>
              <div class="flex items-center justify-between gap-3">
                <span class="text-sm font-medium">{{ product.price }}</span>
                <span class="rounded-md border border-zinc-200 px-3 py-1 text-sm text-zinc-600">{{ product.badge }}</span>
              </div>
            </div>
          </RouterLink>
        </article>
      </div>
    </section>
  </main>
</template>
