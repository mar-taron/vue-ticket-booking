<template>
  <div id="app">
    <router-view/>
    <vue-up></vue-up>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
ol,ul{list-style:none;margin:0px;padding:0px;}
a{text-decoration:none;}
.txt-rt{text-align:right;}/* text align right */
.txt-lt{text-align:left;}/* text align left */
.txt-center{text-align:center;}/* text align center */
.float-rt{float:right;}/* float right */
.float-lt{float:left;}/* float left */
.clear{clear:both;}/* clear float */
.pos-relative{position:relative;}/* Position Relative */
.pos-absolute{position:absolute;}/* Position Absolute */
.vertical-base{ vertical-align:baseline;}/* vertical align baseline */
.vertical-top{  vertical-align:top;}/* vertical align top */
nav.vertical ul li{ display:block;}/* vertical menu */
nav.horizontal ul li{ display: inline-block;}/* horizontal menu */
ul li{text-align: left;}
img{max-width:100%;}
body{
  padding:0;
  margin:0;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  -ms-background-size: cover;
  -moz-background-size: cover;
  font-family: 'Open Sans', sans-serif !important;
}

h1,h2,h3,h4,h5,h6{
  margin:0; 
font-family: 'Kotta One', serif;
} 
p{
  margin:0;
}
ul{
  margin:0;
  padding:0;
}
label{
  margin:0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background:url(./assets/images/cinema.jpg) no-repeat center;
}

</style>
