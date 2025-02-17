<template>
    <div class="thisFlex">
        <figure>
            <NuxtLink to="/product/icecream"><NuxtImg src="/img/iceCream.jpg" sizes="600px" /></NuxtLink>
            <figcaption>
                Мороженое
            </figcaption>
        </figure>

        <figure>
            <NuxtLink to="/product/freezing"><NuxtImg src="/img/frozenFood.jpg" sizes="600px" /></NuxtLink>
            <figcaption>
                Заморозка
            </figcaption>
        </figure>
    </div>
</template>

<style scoped>
figure {
    background-color: rgba(72, 209, 205, 0.671);
    text-align: center;
    border-radius: 10px;
    padding: 10px;    
    max-width: none;
    margin: 20px;
}
.thisFlex{
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px
}

</style>