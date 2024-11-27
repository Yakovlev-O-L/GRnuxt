<template>
    <footer>
        <div>
            <div class="flex1">
                <div class="flex2">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Gallery</a>
                    <a href="#">News</a>
                </div>
                <div class="flex2">
                    <a href="#">Blog</a>
                    <a href="#">FAQ</a>
                    <a href="#">Contacts</a>
                    <a href="#">Privasy & Cookies</a>                    
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
    text-align: center;
    padding: 0, 20px;
    max-width: 100%;    
    bottom: 0px;    
}

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
    filter: grayscale(0);
}

</style>