<template>
<div class='poa'>
      <div class="infos">
        <img src="../assets/images/attention.png" height='30' alt="#">
        <span class="">ATTENTION</span>
        <p class="pa">évite de commencer l’introduction par 
            des formules du type « ce texte… », « Cet extrait… » 
            Parce que le correcteur n’est pas censé connaître 
            le texte sur lequel porte le commentaire. 
            Les formules banales, les lieux communs  
            (« Maupassant, ce grand écrivain… », « De tout temps, 
            les poètes ont
             célébré l’amour », etc...) Sont également à éviter.</p>
      </div>
 </div>
</template>

<script setup>
    // defineProps({
    //     text:{
    //         type: String,
    //     },
    //     title:{
    //         type: String,
    //     }
    // })
</script>

<style>
.pa{
    padding-left:20px;
}
      .infos::before{
      content:'';
      position:relative;
      top:120px;
      left:5px;
      border-radius: 15px;
      display:block;
      width:5px;
      height: 100px;
      background-color:#F4627F;
      }
</style>