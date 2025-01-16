<template>
    <div :class="route.path == '/iceCream' ? 'current' : ''">
        <NuxtLink href="/iceCream">Мороженое</NuxtLink>
    </div>
    <div :class="route.path == '/freezing' ? 'current' : ''">
        <NuxtLink href="/freezing">Заморозка</NuxtLink>
    </div>
</template>    

<script setup lang="ts">

    const route = useRoute()

</script>