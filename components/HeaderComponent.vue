<template>
    <header>
        <h1>Мороженое и заморозка</h1>
        <div class="flex menu">
            <div :class="route.path == '/' ? 'current' : ''">
                <NuxtLink href="/">главная</NuxtLink>
            </div>
            <div :class="route.path == '/product' ? 'current' : ''">
                <NuxtLink href="/product">продукты</NuxtLink>
            </div>
            <div :class="route.path == '/about' ? 'current' : ''">
                <NuxtLink href="/about">о компании</NuxtLink>
            </div>
            <div :class="route.path == '/feedback' ? 'current' : ''">
                <NuxtLink href="/feedback">обратная связь</NuxtLink>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
const route = useRoute()

</script>

<style scoped>

header {
    background-color: rgb(100, 163, 245);
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;    
    z-index: 1;
}

h1 {
    text-align: center;
}   
.menu {
    gap: 20px;
    justify-content: center;
    align-items: center;
    background-color:rgb(100, 163, 245);
    text-transform: uppercase;
    border-radius: 5px;
}

.menu div {
    padding: 10px;
}

.center {
    position: absolute;
    top: 50%;
    left: 45%;
}

.current {
    background-color: darkturquoise;
    border-radius: 5px;
}

a {
    color: black;
    text-decoration: none;
}
</style>