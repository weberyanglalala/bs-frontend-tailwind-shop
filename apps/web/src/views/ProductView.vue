<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { relatedProducts } from '../data/shop';
</script>

<template>
  <main>
    <section class="mx-auto grid max-w-screen-xl items-start gap-8 px-4 py-16 md:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
      <div class="grid gap-4">
        <div class="grid aspect-square place-items-center rounded-lg border border-zinc-200 bg-zinc-100 text-sm text-zinc-500">Product image</div>
        <div class="grid grid-cols-4 gap-3">
          <button type="button" class="aspect-square rounded-lg border border-zinc-200 bg-zinc-100" aria-label="View image one"></button>
          <button type="button" class="aspect-square rounded-lg border border-zinc-200 bg-zinc-100" aria-label="View image two"></button>
          <button type="button" class="aspect-square rounded-lg border border-zinc-200 bg-zinc-100" aria-label="View image three"></button>
          <button type="button" class="aspect-square rounded-lg border border-zinc-200 bg-zinc-100" aria-label="View image four"></button>
        </div>
      </div>

      <article class="grid gap-6">
        <div class="flex items-center justify-between gap-4">
          <span class="inline-flex h-7 items-center rounded-md border border-zinc-200 bg-white px-3 text-sm text-zinc-600">Apparel</span>
          <span class="inline-flex h-7 items-center rounded-md border border-red-200 bg-white px-3 text-sm text-red-600">Limited stock</span>
        </div>
        <div class="grid gap-4">
          <h1 class="text-2xl font-medium leading-tight tracking-tight">Linen overshirt</h1>
          <p class="text-base font-normal leading-relaxed text-zinc-600">A relaxed overshirt cut from washed cotton linen with a clean collar, straight hem, and quiet utility pockets.</p>
          <p class="text-base font-medium">$86</p>
        </div>
        <div class="grid gap-3">
          <p class="text-sm font-medium">Color</p>
          <div class="flex flex-wrap gap-2">
            <button class="h-9 w-9 rounded-md border border-zinc-200 bg-zinc-900" aria-label="Black"></button>
            <button class="h-9 w-9 rounded-md border border-zinc-200 bg-stone-200" aria-label="Stone"></button>
            <button class="h-9 w-9 rounded-md border border-zinc-200 bg-white" aria-label="White"></button>
          </div>
        </div>
        <div class="grid gap-3">
          <p class="text-sm font-medium">Size</p>
          <div class="flex flex-wrap gap-2">
            <button class="inline-flex h-9 min-w-9 items-center justify-center rounded-md border border-zinc-200 bg-white px-3 text-sm hover:bg-zinc-50">S</button>
            <button class="inline-flex h-9 min-w-9 items-center justify-center rounded-md border border-zinc-900 bg-zinc-900 px-3 text-sm text-zinc-50">M</button>
            <button class="inline-flex h-9 min-w-9 items-center justify-center rounded-md border border-zinc-200 bg-white px-3 text-sm hover:bg-zinc-50">L</button>
            <button class="inline-flex h-9 min-w-9 items-center justify-center rounded-md border border-zinc-200 bg-white px-3 text-sm hover:bg-zinc-50">XL</button>
          </div>
        </div>
        <RouterLink to="/checkout" class="inline-flex h-10 w-full items-center justify-center rounded-md border border-zinc-900 bg-zinc-900 px-4 text-sm font-medium text-zinc-50 hover:bg-zinc-800">Add to cart</RouterLink>
        <div class="overflow-hidden rounded-lg border border-zinc-200 bg-white">
          <table class="w-full border-collapse text-sm">
            <tbody>
              <tr class="border-b border-zinc-200"><th class="w-1/2 p-4 text-left font-normal text-zinc-500">Material</th><td class="w-1/2 p-4">55% linen, 45% cotton</td></tr>
              <tr class="border-b border-zinc-200"><th class="w-1/2 p-4 text-left font-normal text-zinc-500">Fit</th><td class="w-1/2 p-4">Relaxed, true to size</td></tr>
              <tr class="border-b border-zinc-200"><th class="w-1/2 p-4 text-left font-normal text-zinc-500">Care</th><td class="w-1/2 p-4">Cold wash, line dry</td></tr>
              <tr><th class="w-1/2 p-4 text-left font-normal text-zinc-500">Origin</th><td class="w-1/2 p-4">Made in Portugal</td></tr>
            </tbody>
          </table>
        </div>
      </article>
    </section>

    <section class="mx-auto max-w-screen-xl px-4 py-12 md:px-6 lg:px-8">
      <div class="mb-6 flex items-end justify-between gap-4">
        <h2 class="text-lg font-medium">Related products</h2>
      </div>
      <div class="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        <article v-for="product in relatedProducts" :key="product.id" class="overflow-hidden rounded-lg border border-zinc-200 bg-white">
          <RouterLink to="/product">
            <div class="grid aspect-square place-items-center border-b border-zinc-200 bg-zinc-100 text-sm text-zinc-500">{{ product.imageLabel }}</div>
            <div class="grid gap-2 p-6">
              <h3 class="text-base font-medium">{{ product.name }}</h3>
              <p class="text-sm text-zinc-500">{{ product.category }}</p>
              <span class="text-sm font-medium">{{ product.price }}</span>
            </div>
          </RouterLink>
        </article>
      </div>
    </section>
  </main>
</template>
