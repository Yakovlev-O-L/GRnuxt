<template>
    <div class="flexImg">

        <figure v-for="product of productsStore.arr" :key="product.id">
            <NuxtImg preload :src="product.images[0]" sizes="258px" />
            <figcaption>{{ product.title }} <br> {{ product.price }}</figcaption>
        </figure>

    </div>
</template>

<script setup lang="ts">
import { useProducts } from '~/stores/products';

const productsStore = useProducts()
</script>

<style scoped>
img {
    border-radius: 5px;
}
</style>