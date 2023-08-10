<template>
<div class='smalltitle2'>
  <span class='past'>{{nbr}}</span><span class='titre'>{{title}}</span>
</div>
  
</template>

<script setup>
  defineProps({
     title:{
         type:String,
         default:'voici le titre de niveau deux'
     },
     nbr:{
        type:String,
        default:'a',
     }
  })
</script>

<style scoped >

h3{

   font-weight: bold;
}
.past{
    font-weight: bold;
     color:#fff;
}
.smalltitle2{
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
    background-color: #1CB0F6;
    border-radius:50%;
    height: 30px;
    width:30px;
    z-index: -1;

}
.titre{
  color:black;
}

</style>