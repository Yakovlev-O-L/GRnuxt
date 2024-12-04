<template>
    <div class="flexImg">

        <figure v-for="product of productsStore.arr" :key="product.id">
            <NuxtImg preload :src="product.images[0]" sizes="258px" />
            <figcaption>{{ product.title }} <br> {{ product.price }}</figcaption>
        </figure>

        <figure v-for="product of productsStore.arr" :key="product.id">
            <NuxtImg preload :src="product.images[1]" sizes="258px" />
            <figcaption>{{ product.title }} <br> {{ product.price }}</figcaption>
        </figure>


        <figure>
            <NuxtImg preload src="img\clavica\Советский_коса_пломб-258x258.jpg.jpg" sizes="258px" />
            <figcaption>Косичка "Советский" пломбир <br> 500гр</figcaption>
        </figure>
        
        <figure>
            <NuxtImg preload src="img\clavica\Советский_коса_шок-258x258.jpg.jpg" sizes="258px" />
            <figcaption>Косичка "Советский" шоколад <br> 500гр</figcaption>
        </figure>

        <figure>
            <NuxtImg preload src="img\clavica\Amerikanec_110-258x258.jpg.jpg" sizes="258px" />
            <figcaption>Рожок "Американец" <br> 110гр</figcaption>
        </figure>

        <figure>
            <NuxtImg preload src="img\clavica\Arbuz_70-258x258.jpg.jpg" sizes="258px" />
            <figcaption>Фруктовый лёд "Арбуз" <br> 70гр</figcaption>
        </figure>
        
        <figure>
            <NuxtImg src="img\clavica\AZART_kivi-258x258.jpg.jpg" sizes="258px" />
            <figcaption>Рожок "Азарт киви" <br> 140гр</figcaption>
        </figure>

        <figure>
            <NuxtImg src="img\clavica\AZART_klubnika-258x258.jpg.jpg" sizes="258px" />
            <figcaption>Рожок "Азарт клубника" <br> 140гр</figcaption>
        </figure>

        <figure>
            <NuxtImg src="img\clavica\AZART_shokolad-258x258.jpg.jpg" sizes="258px" />
            <figcaption>Рожок "Азарт шоколад" <br> 140гр</figcaption>
        </figure>

        <figure>
            <NuxtImg src="img\clavica\Bednyi_Evrey_110-258x258.jpg.jpg" sizes="258px" />
            <figcaption>Рожок "Бедный еврей" <br> 110гр</figcaption>
        </figure>

        <figure>
            <NuxtImg src="img\clavica\Berezka_70-258x258.jpg.jpg" sizes="258px" />
            <figcaption>Вафельный стаканчик "Берёзка" <br> 70гр</figcaption>
        </figure>

        <figure>
            <NuxtImg src="img\clavica\Desert_Limon_80-258x258.jpg.jpg" sizes="258px" />
            <figcaption>Бумажный стаканчик "Лимон" <br> 100гр</figcaption>
        </figure>

        <figure>
            <NuxtImg src="img\clavica\Dvoynoy_Shokolad_70-258x258.jpg.jpg" sizes="258px" />
            <figcaption>Эскимо "Двойной шоколад" <br> 70гр</figcaption>
        </figure>

        <figure>
            <NuxtImg src="img\clavica\fistashka-258x258.jpg.jpg" sizes="258px" />
            <figcaption>Вафельный стакан "Фисташка" <br> 80гр</figcaption>
        </figure>
        
        <figure>
            <NuxtImg src="img\clavica\Fruktoleto_Arbuz_Kivi_70г-1-258x258.jpg.jpg" sizes="258px" />
            <figcaption>Эскимо "Фруктолето" Арбуз-Киви <br> 70гр</figcaption>
        </figure>

        <figure>
            <NuxtImg src="img\clavica\Fruktoleto_Lesnye_Yagodi_100-258x258.jpg.jpg" sizes="258px" />
            <figcaption>Стакан "Фруктолето" Лесные ягоды <br> 70гр</figcaption>
        </figure>

        <figure>
            <NuxtImg src="img\clavica\Hohol_110-258x258.jpg.jpg" sizes="258px" />
            <figcaption>Рожок "Хохол" <br> 110гр</figcaption>
        </figure>

        <figure>
            <NuxtImg src="img\clavica\karamelka-258x258.jpg.jpg" sizes="258px" />
            <figcaption>Вафельный стакан "Карамелька" <br> 80гр</figcaption>
        </figure>

        <figure>
            <NuxtImg src="img\clavica\klubnichka-258x258.jpg.jpg" sizes="258px" />
            <figcaption>Вафельный стакан "Клубничка" <br> 80гр</figcaption>
        </figure>

        <figure>
            <NuxtImg src="img\clavica\Krazy_Kola_70-258x258.jpg.jpg" sizes="258px" />
            <figcaption>Фруктовый лёд "Crazy Kola" <br> 70гр</figcaption>
        </figure>

        <figure>
            <NuxtImg src="img\clavica\Krazy_Kola_85-258x258.jpg.jpg" sizes="258px" />
            <figcaption>Фруктовый лёд "Crazy Kola" <br> 85гр</figcaption>
        </figure>

        <figure>
            <NuxtImg src="img\clavica\Mark_55-258x258.jpg.jpg" sizes="258px" />
            <figcaption>Эскимо "MARK" <br> 55гр</figcaption>
        </figure>

        <figure>
            <NuxtImg src="img\clavica\Mark_Apelsin_Apelsin_55-258x258.jpg.jpg" sizes="258px" />
            <figcaption>Эскимо "MARK" Апельсин <br> 55гр</figcaption>
        </figure>

        <figure>
            <NuxtImg src="img\clavica\Mark_Kivi_Kivi_55-258x258.jpg.jpg" sizes="258px" />
            <figcaption>Эскимо "MARK" Киви <br> 55гр</figcaption>
        </figure>

        <figure>
            <NuxtImg src="img\clavica\nastroenie_120_chernosliv-258x258.jpg.jpg" sizes="258px" />
            <figcaption>Стакан "Настроение" Чернослив <br> 120гр</figcaption>
        </figure>

        <figure>
            <NuxtImg src="img\clavica\nastroenie_120_klubnika-258x258.jpg.jpg" sizes="258px" />
            <figcaption>Стакан "Настроение" Клубника <br> 120гр</figcaption>
        </figure>

        <figure>
            <NuxtImg src="img\clavica\NASTROYeNIYe_brusnika-258x258.jpg.jpg" sizes="258px" />
            <figcaption>Косичка "Настроение" Брусника <br> 500гр</figcaption>
        </figure>

        <figure>
            <NuxtImg src="img\clavica\NASTROYeNIYe_kivi-258x258.jpg.jpg" sizes="258px" />
            <figcaption>Косичка "Настроение" Киви <br> 500гр</figcaption>
        </figure>

        <figure>
            <NuxtImg src="img\clavica\NASTROYeNIYe_klubnika-258x258.jpg.jpg" sizes="258px" />
            <figcaption>Косичка "Настроение" Клубника <br> 500гр</figcaption>
        </figure>

        <figure>
            <NuxtImg src="img\clavica\NASTROYeNIYe_mango-258x258.jpg.jpg" sizes="258px" />
            <figcaption>Косичка "Настроение" Манго <br> 500гр</figcaption>
        </figure>

        <figure>
            <NuxtImg src="img\clavica\NASTROYeNIYe_sgushchenka1-258x258.jpg.jpg" sizes="258px" />
            <figcaption>Косичка "Настроение" Сгущёнка <br> 500гр</figcaption>
        </figure>

        <figure>
            <NuxtImg src="img\clavica\NASTROYeNIYe_tryufel-258x258.jpg.jpg" sizes="258px" />
            <figcaption>Косичка "Настроение" Трюфель <br> 500гр</figcaption>
        </figure>

        <figure>
            <NuxtImg src="img\clavica\Obamka_60-258x258.jpg.jpg" sizes="258px" />
            <figcaption>Эскимо "Обамка" <br> 60гр</figcaption>
        </figure>

        <figure>
            <NuxtImg src="img\clavica\Okean_70-258x258.jpg.jpg" sizes="258px" />
            <figcaption>Фруктовый лёд "Океан" <br> 70гр</figcaption>
        </figure>

        <figure>
            <NuxtImg src="img\clavica\Okean_70-258x258.jpg.jpg" sizes="258px" />
            <figcaption>Фруктовый лёд "Океан" <br> 70гр</figcaption>
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