<template>
    <footer>
        <div>
            <div class="flex1">
                <div class="flex2">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Gallery</a>
                    <a href="#">News</a><br>
                </div>
                <div class="flex2">
                    <a href="#">Blog</a>
                    <a href="#">FAQ</a>
                    <a href="#">Contacts</a>
                    <a href="#">Privasy & Cookies</a><br>
                </div>
                <div class="flex3">
                    <NuxtImg src="img/fb.png" sizes="40px" />
                    <NuxtImg src="img/insta.png" sizes="40px" />
                    <NuxtImg src="img/youtube.png" sizes="40px" />
                </div>
            </div>
            <hr>
            Copyright &copy; Company 2018-2019
        </div>
    </footer>
</template>

<style scoped>
footer {
    background-color: rgb(1 160 226);
    /* justify-content: center; */
    text-align: center;
    max-width: 100%;
    height: 120px;
    bottom: 0px;
    /*left: 0px;
    right: 0px; */
}

/* div {
    padding: 60px;
    max-width: 900px;
    margin: 0 auto;
    color: white;
    text-align: center;
} */

/* div div {
    padding: 0;
} */

a {
    color: black;
    text-decoration: none;
}

img {
    filter: grayscale(1);
}

.flex1 {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
}

.flex2 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: wrap;    
}

.flex3 {
    display: flex;
    gap: 30px;
}

img:hover {
    filter: grayscale(0);}


</style>