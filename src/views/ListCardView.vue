<script setup>
import CardCourse from '../components/card/CardCourse.vue'
import BigTitlecourse from '../components/BigTitlecourse.vue'
import Banner from '../components/Banner.vue'
import Navbar from '../components/Navbar.vue'
import Filter from '../components/Filter.vue'
import Footer from '../components/Footer.vue'



</script>
<template>
  
  <Navbar/>
<Banner/>

<div class="contain_70">
  <Filter/>
<div class='BigTitlecourse'>Tous les contenus <span>cours(3eme)</span></div>
<div class='contain_f'>
    <CardCourse/>
    <CardCourse/>
    <CardCourse/>
    <CardCourse/>
</div>
    <BigTitlecourse/>
<div class='contain_f'>
    <CardCourse iconeimage='src/assets/images/maths.png'/>
    <CardCourse iconeimage='src/assets/images/maths.png'/>
    <CardCourse iconeimage='src/assets/images/maths.png'/>
    <CardCourse iconeimage='src/assets/images/maths.png'/>
</div>
<div class='seeall'>Voir la suite</div>
 <BigTitlecourse matter="Français" image='src/assets/images/french.png'/>
<div class='contain_f'>
  <CardCourse color='#FEE6A4' color2="#FFCD35" iconeimage='src/assets/images/virtuel.svg'/>
  <CardCourse color='#FEE6A4' color2="#FFCD35"/>
  <CardCourse color='#FEE6A4' color2="#FFCD35"/>
  <CardCourse color='#FEE6A4' color2="#FFCD35"/>
</div>
<BigTitlecourse matter="Physique" image='src/assets/images/Physique.svg'/>
<div class='contain_f'>
  <CardCourse color='#FBD8D4' color2="#FF6645" iconeimage='src/assets/images/video.png'/>
  <CardCourse color='#FBD8D4' color2="#FF6645" iconeimage='src/assets/images/video.png'/>
  <CardCourse color='#FBD8D4' color2="#FF6645" iconeimage='src/assets/images/video.png'/>
  <CardCourse color='#FBD8D4' color2="#FF6645" iconeimage='src/assets/images/video.png'/>
</div>

    </div>
   <Footer/>
</template>

<style >
  .contain_f{
   display:flex;
   justify-content: space-between;
   flex-wrap:wrap;
  }
  .contain_70{
    width: 70%;
    margin:auto;
  }
  .BigTitlecourse{
    font-weight: bold;
    font-size:2rem;
    margin:auto;
    padding-bottom:20px;
  }

   .BigTitlecourse>span{
     font-size:1.2rem;
     font-weight:300;
   }
   .seeall{
    padding-top: 50px;
    text-align:right;
    font-weight: bold;
   }
 
     @media (max-width: 600px) {
       .contain_70{
    width: 90%;
    margin:auto;
  }
    }

</style>


