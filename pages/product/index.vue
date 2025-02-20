<template>
    <div class="thisFlex">
        <figure>
            <NuxtLink to="/product/icecream"><NuxtImg src="/img/iceCream.jpg" width="600px" />
            <figcaption>
                Мороженое
            </figcaption></NuxtLink>
        </figure>

        <figure>
            <NuxtLink to="/product/freezing"><NuxtImg src="/img/frozenFood1.png" width="600px" />
            <figcaption>
                Заморозка
            </figcaption></NuxtLink>
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