<template>
    <span href="" class="btn"> 
         <a :href="href"> {{ title }}</a>
       </span> 
</template>

<script setup>
defineProps({
    title:{
        type:String,
        default:'C\'est partie😀'
    },
    href:{
        type:String,
        default:'/'
    }
})
</script>

<style scoped>
.btn{
    padding:10px 30px;
    font-weight: bold;
    background-color:#fff;
    border-radius: 15px;
   
    font-family: 'Nunito Sans', sans-serif;
    border:1px solid #e7e1d8;
    box-shadow: #e7e1d8 5px 5px;
    color:#000;
    transition: ease-in 0.1s;
}
a{
    text-decoration: none;
    color:black;
}
.btn:hover{
    box-shadow: #D0D23F 5px 5px;
    color:#000;
    background-color: #EEF05D;
    border: 1px solid #D0D23F;
    cursor: pointer;  
}
</style>