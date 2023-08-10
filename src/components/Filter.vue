<script setup>
import ButtonSelect from './shared/ButtonSelect.vue';
</script>

<template>
  <div class="filter">
        <ButtonSelect class='es' title="Classe"/>
        <ButtonSelect class='es' title="Matiére"/>
        <ButtonSelect class='es' title="contenus"/>
 </div>
</template>



<style scoped>
.es{
    margin-right:10px;
}
.filter{
    padding-bottom:5px;
    background:#e7e1d8;
    border-radius:30px;
    height: 50px;
}
</style>