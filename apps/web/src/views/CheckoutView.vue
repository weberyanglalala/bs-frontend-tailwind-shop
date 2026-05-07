<script setup lang="ts">
import { cartItems } from '../data/shop';
</script>

<template>
  <main>
    <section class="border-b border-zinc-200 bg-white">
      <div class="mx-auto grid max-w-screen-xl gap-2 px-4 py-12 md:px-6 lg:px-8">
        <h1 class="text-2xl font-medium leading-tight tracking-tight">Cart and checkout</h1>
        <p class="text-sm text-zinc-500">3 items in your cart</p>
      </div>
    </section>

    <section class="mx-auto grid max-w-screen-xl items-start gap-8 px-4 py-12 md:px-6 lg:grid-cols-[minmax(0,2fr)_minmax(300px,1fr)] lg:px-8">
      <div class="grid gap-8">
        <section aria-labelledby="cart-title">
          <h2 id="cart-title" class="mb-6 text-lg font-medium">Cart items</h2>
          <div class="grid gap-4 lg:gap-0 lg:overflow-hidden lg:rounded-lg lg:border lg:border-zinc-200">
            <article v-for="item in cartItems" :key="item.name" class="grid grid-cols-[88px_minmax(0,1fr)] gap-4 rounded-lg border border-zinc-200 bg-white p-4 lg:grid-cols-[96px_minmax(0,1fr)_96px_104px_96px_64px] lg:items-center lg:rounded-none lg:border-0 lg:border-b lg:border-zinc-200">
              <div class="aspect-square rounded-lg border border-zinc-200 bg-zinc-100"></div>
              <div class="grid min-w-0 gap-3 lg:gap-1">
                <h3 class="text-base font-medium">{{ item.name }}</h3>
                <p class="text-sm text-zinc-500">{{ item.variant }}</p>
                <div class="flex items-end justify-between gap-4 lg:hidden">
                  <div>
                    <p class="text-sm text-zinc-500">Qty {{ item.qty }}</p>
                    <p class="text-sm font-medium">{{ item.price }}</p>
                  </div>
                  <a href="#" class="inline-flex h-10 items-center justify-center rounded-md border border-zinc-200 px-4 text-sm font-medium hover:bg-zinc-50">Remove</a>
                </div>
              </div>
              <span class="hidden text-sm lg:block">{{ item.price }}</span>
              <span class="hidden h-9 w-[72px] items-center justify-center rounded-md border border-zinc-200 text-sm lg:inline-flex">{{ item.qty }}</span>
              <span class="hidden text-sm lg:block">{{ item.price }}</span>
              <a href="#" class="hidden text-sm text-zinc-600 hover:text-zinc-900 lg:block">Remove</a>
            </article>
          </div>
        </section>

        <section class="grid gap-6 rounded-lg border border-zinc-200 bg-white p-6" aria-labelledby="checkout-info-title">
          <h2 id="checkout-info-title" class="text-lg font-medium">Checkout information</h2>
          <div class="grid gap-4 md:grid-cols-2">
            <div class="grid gap-2"><label for="name" class="text-sm font-medium">Name</label><input id="name" type="text" placeholder="Your name" class="h-10 rounded-md border border-zinc-200 bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-zinc-900/10" /></div>
            <div class="grid gap-2"><label for="phone" class="text-sm font-medium">Phone</label><input id="phone" type="text" placeholder="Phone number" class="h-10 rounded-md border border-zinc-200 bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-zinc-900/10" /></div>
            <div class="grid gap-2"><label for="email" class="text-sm font-medium">Email</label><input id="email" type="email" placeholder="Email address" class="h-10 rounded-md border border-zinc-200 bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-zinc-900/10" /></div>
            <div class="grid gap-2"><label for="address" class="text-sm font-medium">Address</label><input id="address" type="text" placeholder="Shipping address" class="h-10 rounded-md border border-zinc-200 bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-zinc-900/10" /></div>
          </div>
          <div class="grid gap-3">
            <p class="text-sm font-medium">Payment method</p>
            <div class="grid gap-3">
              <label class="flex items-center gap-3 rounded-md border border-zinc-200 p-4 text-sm text-zinc-600"><span class="h-4 w-4 rounded-full border border-zinc-200"></span>Credit card</label>
              <label class="flex items-center gap-3 rounded-md border border-zinc-200 p-4 text-sm text-zinc-600"><span class="h-4 w-4 rounded-full border border-zinc-200"></span>Bank transfer</label>
              <label class="flex items-center gap-3 rounded-md border border-zinc-200 p-4 text-sm text-zinc-600"><span class="h-4 w-4 rounded-full border border-zinc-200"></span>Cash on delivery</label>
            </div>
          </div>
        </section>
      </div>

      <aside class="sticky top-6 grid gap-6 rounded-lg border border-zinc-200 bg-white p-6" aria-labelledby="summary-title">
        <h2 id="summary-title" class="text-lg font-medium">Order summary</h2>
        <div class="grid gap-4 text-sm text-zinc-600">
          <div class="flex items-center justify-between gap-4"><span>Subtotal</span><span>$170</span></div>
          <div class="flex items-center justify-between gap-4"><span>Shipping</span><span>$8</span></div>
          <div class="flex items-center justify-between gap-4"><span>Tax</span><span>$9</span></div>
          <div class="flex items-center justify-between gap-4 border-t border-zinc-200 pt-4 text-base font-medium text-zinc-900"><span>Total</span><span>$187</span></div>
        </div>
        <a href="#" class="inline-flex h-10 w-full items-center justify-center rounded-md border border-zinc-900 bg-zinc-900 px-4 text-sm font-medium text-zinc-50 hover:bg-zinc-800">Place order</a>
      </aside>
    </section>
  </main>
</template>
