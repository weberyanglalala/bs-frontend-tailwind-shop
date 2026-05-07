<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { allProducts } from '../data/shop';
</script>

<template>
  <main>
    <section class="border-b border-zinc-200 bg-white">
      <div class="mx-auto flex max-w-screen-xl flex-col gap-3 px-4 py-12 md:flex-row md:items-end md:justify-between md:px-6 lg:px-8">
        <div class="grid gap-2">
          <h1 class="text-2xl font-medium leading-tight tracking-tight">All products</h1>
          <p class="text-sm text-zinc-500">12 products</p>
        </div>
        <button type="button" class="inline-flex h-10 w-fit items-center justify-center gap-2 rounded-md border border-zinc-200 bg-white px-4 text-sm font-medium hover:bg-zinc-50 lg:hidden">
          <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 6h16"/><path d="M7 12h10"/><path d="M10 18h4"/></svg>
          Filter
        </button>
      </div>
    </section>

    <section class="mx-auto grid max-w-screen-xl gap-6 px-4 py-12 md:px-6 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-8 lg:px-8">
      <aside class="hidden w-[220px] self-start rounded-lg border border-zinc-200 bg-white p-6 lg:block" aria-label="Product filters">
        <h2 class="text-base font-medium">Filters</h2>
        <div class="mt-6 grid gap-3 border-t border-zinc-200 pt-6">
          <p class="text-sm font-medium">Category</p>
          <label class="flex items-center gap-2 text-sm text-zinc-600"><span class="h-4 w-4 rounded-md border border-zinc-200"></span>Apparel</label>
          <label class="flex items-center gap-2 text-sm text-zinc-600"><span class="h-4 w-4 rounded-md border border-zinc-200"></span>Bags</label>
          <label class="flex items-center gap-2 text-sm text-zinc-600"><span class="h-4 w-4 rounded-md border border-zinc-200"></span>Home</label>
        </div>
        <div class="mt-6 grid gap-3 border-t border-zinc-200 pt-6">
          <p class="text-sm font-medium">Price</p>
          <label class="flex items-center gap-2 text-sm text-zinc-600"><span class="h-4 w-4 rounded-md border border-zinc-200"></span>Under $50</label>
          <label class="flex items-center gap-2 text-sm text-zinc-600"><span class="h-4 w-4 rounded-md border border-zinc-200"></span>$50 to $100</label>
          <label class="flex items-center gap-2 text-sm text-zinc-600"><span class="h-4 w-4 rounded-md border border-zinc-200"></span>Over $100</label>
        </div>
      </aside>

      <div>
        <div class="mb-6 flex items-center justify-between gap-4">
          <p class="text-sm text-zinc-500">Showing 1 to 12</p>
          <span class="inline-flex h-7 items-center rounded-md border border-zinc-200 bg-white px-3 text-sm text-zinc-600">Sort by newest</span>
        </div>

        <div class="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-3">
          <article v-for="product in allProducts" :key="product.id" class="overflow-hidden rounded-lg border border-zinc-200 bg-white">
            <RouterLink to="/product">
              <div class="grid aspect-square place-items-center border-b border-zinc-200 bg-zinc-100 text-sm text-zinc-500">{{ product.imageLabel }}</div>
              <div class="grid gap-2 p-6">
                <h3 class="text-base font-medium">{{ product.name }}</h3>
                <p class="text-sm text-zinc-500">{{ product.category }}</p>
                <div class="flex items-center justify-between gap-3">
                  <span class="text-sm font-medium">{{ product.price }}</span>
                  <span :class="product.badge === 'Sale' ? 'text-sm text-red-600' : 'rounded-md border border-zinc-200 px-3 py-1 text-sm text-zinc-600'">{{ product.badge }}</span>
                </div>
              </div>
            </RouterLink>
          </article>
        </div>

        <nav class="mt-8 flex items-center justify-center gap-2" aria-label="Pagination">
          <a class="inline-flex h-9 min-w-9 items-center justify-center rounded-md border border-zinc-900 bg-zinc-900 px-3 text-sm text-zinc-50" href="#">1</a>
          <a class="inline-flex h-9 min-w-9 items-center justify-center rounded-md border border-zinc-200 px-3 text-sm hover:bg-zinc-50" href="#">2</a>
          <a class="inline-flex h-9 min-w-9 items-center justify-center rounded-md border border-zinc-200 px-3 text-sm hover:bg-zinc-50" href="#">3</a>
          <a class="inline-flex h-9 items-center justify-center rounded-md border border-zinc-200 px-3 text-sm hover:bg-zinc-50" href="#">Next</a>
        </nav>
      </div>
    </section>
  </main>
</template>
