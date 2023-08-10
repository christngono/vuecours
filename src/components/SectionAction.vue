<template>
  <div class="section">
    <ButtonSpecial image='/src/assets/continu1.png' title="Continuer"/>
    <router-link to="/course/quiz">
    <ButtonSpecial image='src/assets/QUI.png' title="Quiz"/>
    </router-link>
   
    <ButtonSpecial image='src/assets/doa.png' title="Télécharger"/>

  </div>
</template>

<script setup>
import ButtonSpecial from '../components/shared/ButtonSpecial.vue'
</script>

<style scoped>
 .section{
    width: 50%;
    background: #fff;
    border-radius: 20px;
    margin: 20px auto;
    padding:30px;
   display: flex;
   justify-content: space-around;

  }
  @media (max-width: 600px) {
      .section{
         width:80%;
      }
   }
</style>