<template>
    <footer>
        <div class="flexNav" style="color: black;">
    <div><a href="index.html">Home</a></div>
    <div><a href="dz3.3.html">Previous</a></div>
    <div style="color: red;">dz3.4</div>
    <div><a href="dz4.1.html">Next</a></div>
</div>
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
        <img src="img4/fb.png" width="40px" height="40px">
        <img src="img4/insta.png" width="40px" height="40px">
        <img src="img4/youtube.png" width="40px" height="40px">
      </div>
    </div>
    <hr>
    <br>
    Copyright &copy; Company 2018-2019
  </div>
</footer>
</template>

<style scoped>
footer {
    background-color: rgb(1 160 226);
    text-align: center;
    height: 120px;   
    bottom: 0px;
    left: 0px;
    right: 0px;    
}

body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      color: black;
      padding: 10px;
      margin: 0;
    }

    div {
      padding: 60px;
      max-width: 900px;
      background-color: #2a4f6e;
      color: white;
      text-align: center;
    }

    div div {
      padding: 0;
    }

    a {
      color: white;
      text-decoration: none;
    }

    img {
      filter: grayscale(1);
    }

    .flex1 {
      display: flex;
      justify-content: space-around;
      align-items: center;
      align-items: flex-start;
    }

    .flex2 {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      flex-wrap: wrap;
      gap: 0;
    }

    .flex3 {
      display: flex;
      gap: 30px;
    }

    img:hover {
      filter: grayscale(0);
    }
    
    a:hover {
      text-decoration: underline;
      color: white;
    }
</style>