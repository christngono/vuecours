<template>
    <div class="quest">
  <div>
    <span><slot></slot></span>
  </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.quest{
    margin:auto auto 30px auto;
    padding:20px;
    width: 90%;
}
div{
    width: 95%;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    background:#e7e1d8;
    border-radius:10px;
    font-weight: bold;
    font-size:1.2rem;
}
</style>