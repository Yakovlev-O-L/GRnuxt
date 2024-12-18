<template>

    <h1 v-if="is404">Not found 404</h1>

    {{ route.params.slug }}
    <!-- <div class="flexImg">

        <figure v-for="product of productsStore.arr" :key="product.id">
            <NuxtImg preload :src="product.images[0]" sizes="258px" />
            <figcaption>{{ product.title }} <br> {{ product.price }}</figcaption>
        </figure>        

    </div> -->
</template>

<script setup lang="ts">
import { useProducts } from '~/stores/products';
const route = useRoute()

const types = ['morozhenoe','zamorozka']
const groups = {
    morozhenoe:[
        'ays', 'clavica'
    ],
    zamorozka:['agroservice'],
} as Record<string, string[]>
const products = {
    ays:[
        'stakanchik', 'eskimo'
    ],
    agroservice:['kotleti'],
} as Record<string, string[]>

let is404 = ref(false)
const path = route.params.slug
for (let i=0; i< path.length; i++) {
    if (i==0 && !types?.includes(path[i])) is404.value = true
    if (i==1 && !groups[path[0]]?.includes(path[i])) is404.value = true
    if (i==2 && !products[path[1]]?.includes(path[i])) is404.value = true
    if (i>2)  {
        is404.value = true
        break
    }
}

if (import.meta.server) {
  const event = useRequestEvent()
  if (event && is404.value) setResponseStatus(event, 404)
}
const productsStore = useProducts()
</script>

<style scoped>
img {
    border-radius: 5px;
}
</style>