<template>
<div class='bigTitlecourse'>
  <span class='img-matter'><img :src="image" height='40' alt="">
  </span><span class='matter'>{{matter}}</span>
</div>
 
</template>

<script setup>
    defineProps({
        matter:{
            type:String,
            default:'Mathématiques'
        },
        image:{
            type:String,
            default: "src/assets/images/maths.png"
        }
    })
</script>
     
<style scoped>
.matter{
    font-size:2rem;
    font-weight:bold;
    
    
}
.img-matter img{
    vertical-align: bottom;
}
.bigTitlecourse{
    margin-top:80px;
    margin-bottom:20px;
}
</style>