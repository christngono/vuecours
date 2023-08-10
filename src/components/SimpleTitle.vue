<template>
<div>
    <span class='ort'><img src="../assets/images/perso.png" height="50" alt='#'/>{{title}}</span> 
</div>
</template>

<script setup>
  defineProps({
     title:{
        type:String,
        default:'mon titre simple'
     }
    
  })
</script>

<style  scoped>

    .ort{
         color:#FF6600;
         font-weight: bold;
         font-size:1.2rem;
         padding-bottom:2px;
       }
</style>