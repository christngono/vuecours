<template>
   <div class='img'>
      <slot></slot>
    
   </div>
</template>

<script setup>

</script>

<style scoped>
   .img{
    width: 100%;
    margin:auto;
    display: flex;
    justify-content: center;
    border:1px solid #ccc;
    border-radius: 10px;
  
   }
   img{
    width: 70%;
   }

</style>