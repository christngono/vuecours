<template>
   <a :href="href">
   <div class='elt'>
     <div class='close'><img src="../assets/images/croix.png" alt="#"></div>
   </div>
   </a>

   
</template>

<script setup>
defineProps({
   href: {
      type: String,
      default:'/listcourse'
   },
})
</script>

<style scoped>
       .close{
        background: #F7F1ED;
        border:2px solid #F1DFD0;
        height:50px;
        width:50px;
        margin-bottom:10px;
        border-radius: 50%;
        box-shadow: 5px 2px #f2e1d1;
       }
       .close:hover{
          cursor: pointer;
       }
       img{
          height: 50px;
       }
       .elt{
          width:90%;
          padding-bottom:20px;
        display: flex;
        justify-content: flex-end;
     
       }
</style>