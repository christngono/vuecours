<template>
     <div class="container">
       
         <div class="part1">
            <img src="../assets/images/maths.png" height="200" alt='#'/>
         </div>
         <div class="part2">
           <Navbar class="visible"/>
              <div class="zone-text">
              
               <img src="../assets/images/personnage.png" alt=""><br/>
                <span>Bienvenue sur lasylab</span>
                
                <p>Apprendre, comprendre, et progresser sans stress<br/>
                   Cours vidéos, fiches de cours, epreuves, exercices et chat avec les enseignants </p>
             </div>
           <div class="zone-button">
              <Button href="listcourse"/>
           </div>
         </div>
     </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
import Button from '../components/shared/Button.vue';
</script>

<style scoped>
.zone-text img{
   height:200px;
}
.visible{
  display: none;
}
.container{
    display:flex;
    height: 100%;
}
   .part1{
    width:50%;
    height: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
   }
   .part2{
  
    background: #235390;
    width:50%;
    height: 100%;
    color:#fff;
   }
   .zone-text{
    padding-top:20px;
    margin:auto;
    width: 70%;
    font-size:2rem;
   }
   .zone-button{
    margin:100px auto;
    width: 70%;
   }
   p{
      font-size:1.1rem;
   }
   @media (max-width: 600px) {
      .part1{
         display:none;
      }
    .part2{
      width: 100%;
    }
     .zone-text{
  
    width: 90%;
   
   }
   .visible{
  display: flex;
}
   }
</style>