<template>
  <p :class='bold' >
   {{content}}
  </p>
</template>

<script setup>
defineProps({
  content:{
    type: String,
  }
})
</script>

<style scoped>
       p{
        font-size:1.1rem;
       }
       .bold{
        font-weight: bold;
       }
       .or{
         color:#FF6600;
       }
       .ita{
        font-style: italic;
       }
       .gt{
        color:#0C444A;
       }
</style>