<template>
   <div class="cardprofil">
       <span class="like">({{ like }})</span><span>
        <i  @click="handclick" class="bi bi-hand-thumbs-up-fill"></i>
       </span>
   </div>
</template>

<script setup>
  
  import {ref} from 'vue'
  const like = ref(0)
  function handclick(){
    like.value++;
  }
</script>

<style scoped>
   .cardprofil{
    text-align:center;
     width:200px;
     border-radius:10px;
     background: #fff;
      border:1px solid #ccc;
     margin:auto;
   }

   .bi{
     color:rgb(230, 222, 14);
     font-size:2rem;
   }
   .like{
     font-size:1.5rem;
   }
   .bi:hover{
   color:rgb(231, 196, 3);
   cursor: pointer;
   }
</style>