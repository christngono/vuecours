<template>
    <div class="card_progress">
      <progress id="file"  value="32" max="100"></progress>
  </div>
</template>

<script setup>

</script>

<style scoped>
progress{
    width: 100%;
    height:10%;
}

.card_progress{
border:1px solid #e7e1d8;
box-shadow: #e7e1d8 5px 5px;
border-radius:10px 20px 20px 0px;
width:40%;
margin:auto;
padding:10px 10px;
}
@media (max-width: 600px) {
    .card_progress{
    width: 90%;
   
}
 
  
}

</style>