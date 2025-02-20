<template>

    <h1 v-if="is404">Not found 404</h1>

    <!-- {{ route.params.slug }} -->
    <div class="flexImg">

        <figure v-for="product of products" :key="product.id">
            <NuxtLink :to="`/product/${product.type}/${product.title}`"><NuxtImg :src="product.images[0]" width="250px"/>
            <figcaption>{{ product.title }} <br> {{ product.price }}</figcaption></NuxtLink>
        </figure>        

    </div>

    {{ product }}
</template>

<script setup lang="ts">
import { useProducts } from '~/stores/products';
const route = useRoute()
const productsStore = useProducts()

const products = ref([] as any[])
const product = ref({} as any)

const types = ['freezing','icecream']
const path = route.params.slug
console.log(path)
if (path.length==1) {
    products.value = productsStore.arr.filter(el=>el.type==path[0])
} else if (path.length==2) {
    product.value = productsStore.arr.find(el=>el?.title==path[1])
}


let is404 = ref(false)
for (let i=0; i< path.length; i++) {
    if (i==0 && !types?.includes(path[i])) is404.value = true
    // if (i==1 && !groups[path[0]]?.includes(path[i])) is404.value = true
    // if (i==2 && !products[path[1]]?.includes(path[i])) is404.value = true
    if (i>2)  {
        is404.value = true
        break
    }
}

if (import.meta.server) {
  const event = useRequestEvent()
  if (event && is404.value) setResponseStatus(event, 404)
}
</script>

<style scoped>
img {
    border-radius: 5px;
}
</style>