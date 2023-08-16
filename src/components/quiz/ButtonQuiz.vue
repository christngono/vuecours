<template>
    <span href=""
          class="btn-1"> <slot></slot> </span>
</template>

<script setup>
</script>

<style>
.btn-1 {
   padding:10px 0px;
    text-align:center;
    width:100%;
    font-weight: bold;
   
    border-radius: 40px;
    display: block;
    font-family: 'Nunito Sans', sans-serif;

   cursor: pointer;
    color: #000;
    transition: ease-in 0.1s;
    margin-top:15px;
}


a {
    text-decoration: none;
    color: white;
}




</style>