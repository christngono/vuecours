<template>
  <h3>{{name}}</h3>
</template>

<script setup>
defineProps({
    name:{
        type: String,
    }
})
</script>

<style scoped>
    h3{
        color:#FF6600;
        font-weight: bold;
        text-transform:uppercase;
     
    }
    h3::after{
       content:'';
       position:relative;
       top:7px;
       left:-150px;
       display:inline-block;
        width: 50px;
        height: 5px;
        background-color: #FF6600;
    }
</style>