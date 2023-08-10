<template>
    <h2>{{title}}</h2>
</template>

<script setup>
 defineProps({
    title:{
        type:String,
    }
 })
</script>

<style scooped>
h2{
    color:#fff;
    background-color:#1CB0F6;
    box-shadow: 5px 5px #1584b9;
    border-radius: 30px;
    width: 250px;
    text-align: center;
    padding:10px 25px;
}
</style>