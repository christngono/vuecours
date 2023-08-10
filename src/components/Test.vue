<template>
  <div class="block">
    <div class="block1">
       <div class="emoji">😀</div>
       <div class="title">{{ title }}</div>
    </div>
    <div class="block2">
        <p>{{ text }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
    text: {
        type: String,
   
    },
      title: {
        type: String,

    }
})

</script>

<style scoped>
      .block{
        border:2px solid#00B9E2;
        padding:10px;
        border-radius: 10px;
        display:flex;
        margin-bottom:10px;
        max-width:600px;
      }
      .block1{
        width:20%;
        margin:auto;
      }
      .block2{
        color:black;
        font-weight: bold;
        width: 70%;
      }
      .title{
        font-weight: bold;
        color:#FF6600;

        font-size:1.5rem;
        text-align: center;
      }
      .emoji{
        font-size:1.8rem;
        text-align: center;
      }
      @media (max-width: 600px) {
        .block{
             flex-direction:column;
        }
        .block1{
            width: 100%!important;
        }
        .block2{
            width: 100%!important;
            text-align: center;
        }
      
      }
</style>