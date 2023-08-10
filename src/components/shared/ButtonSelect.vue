<template>
    <span href="" class="btn"> {{title}}</span> 
</template>

<script setup>
defineProps({
    title:{
        type:String,
        default:'Continuer'
    }
})
</script>

<style scoped>
.btn{
    padding:15px 40px;
    font-weight: bold;
    background-color:#fff;
    border-radius:40px;
   
    font-family: 'Nunito Sans', sans-serif;
    border:1px solid #e7e1d8;
    box-shadow: #e7e1d8 5px 5px;
    color:#000;
    transition: ease-in 0.1s;
}
a{
    text-decoration: none;
    color:white;
}
.btn:hover{
    box-shadow: #D0D23F 5px 5px;
    color:#000;
    background-color: #EEF05D;
    border: 1px solid #D0D23F;
    cursor: pointer;  
}
 @media (max-width: 600px) {
        .btn{
    padding:10px 20px;
    font-size:0.9rem;
  
        }
    }
</style>