<template>
    <div class="thisFlex">
        <figure>
            <NuxtImg src="/img/iceCream.jpg" sizes="600px" />
            <figcaption>
                <NuxtLink to="/product/icecream">Мороженое</NuxtLink>
            </figcaption>
        </figure>

        <figure>
            <NuxtImg src="/img/frozenFood.jpg" sizes="600px" />
            <figcaption>
                <NuxtLink to="/product/freezing">Заморозка</NuxtLink>
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