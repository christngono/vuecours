<template>
  <p :class='bold' >
  <slot></slot>
  </p>
</template>

<script setup>
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