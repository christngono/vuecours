<template>
<div class='smalltitle'>
  <span class='past'>{{nbr}}</span><span>{{title}}</span>
</div>
  
</template>

<script setup>
  defineProps({
     title:{
         type:String,
         default:'voici mon titre'
     },
     nbr:{
        type:Number,
        default:1,
     }
  })
</script>

<style scoped >

h3{
   color:#1CB0F6;
   font-weight: bold;
}
.past{
    font-weight: bold;
}
.smalltitle{
    font-size:1.2rem;
    color:#1CB0F6;
    font-weight: bold;
    margin-bottom:20px;
}
.past::after{
    content:'';
    display:inline-block;
    position:relative;
    top:10px;
    left:-21px;
    border:3px solid #1CB0F6;
    border-radius:50%;
    height: 30px;
    width:30px;

}

</style>