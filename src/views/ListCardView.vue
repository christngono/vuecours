<script setup>
import CardCourse from '../components/card/CardCourse.vue'
import BigTitlecourse from '../components/BigTitlecourse.vue'
import Banner from '../components/Banner.vue'
import Navbar from '../components/Navbar.vue'
import Filter from '../components/Filter.vue'
import Footer from '../components/Footer.vue'
import { ref } from 'vue'

// const courrentcourses = ref({
//   typecontent: '',
//   titre: '',
//   classe:"",
//   type: "",
//   matter: "",
//   iconeimage: "",
//   color: "",
//   href: "",
//   image: "",
// });
const courses = [
  {
    typecontent:"Cours",
    titre:"La propriété de Pythagore",
    classe:"3eme",
    type:"leçon 1",
    matter:"mathématiques",
    iconeimage:"src/assets/images/virtuel.svg",
    color:"#CFECB1",
    href:"mathcourse",
    image:"src/assets/images/truecrayon.svg",
  },
   {
    typecontent: "Cours",
    titre: "Les valeurs absolus",
    classe: "3ème",
    type: "leçon 2",
    matter: "mathématiques",
    iconeimage: "src/assets/images/virtuel.svg",
    color: "#CFECB1",
    href: "mathcourse",
    image: "src/assets/images/truecrayon.svg",
  },
  {
    typecontent: "Cours",
    titre: "Les intervalles",
    classe: "3ème",
    type: "leçon 3",
    matter: "mathématiques",
    iconeimage: "src/assets/images/virtuel.svg",
    color: "#CFECB1",
    href: "course1",
    image: "src/assets/images/truecrayon.svg",
  },
  {
    typecontent: "Cours",
    titre: "Les Racines et ensembles",
    classe: "3ème",
    type: "leçon 4",
    matter: "mathématiques",
    iconeimage: "src/assets/images/virtuel.svg",
    color: "#CFECB1",
    href: "course1",
    image: "src/assets/images/truecrayon.svg",
  },
]
const courses2 = [
  {
    typecontent: "Cours vidéo",
    titre: "C'est une suite numérique",
    classe: "Première DC",
    type: "leçon 5",
    matter: "mathématiques",
    iconeimage: "src/assets/images/video.png",
    color: "#FEE6A4",
    color2: "#FFCD35",
    href: "course/video",
    image: "src/assets/images/truecrayon.svg",
  },
  {
    typecontent: "Cours vidéo",
    titre: "Introdution dissertation",
    classe: "Première A",
    type: "leçon 6",
    matter: "littérature",
    iconeimage: "src/assets/images/video.png",
    color: "#FEE6A4",
    color2:"#FFCD35",
    href: "course/video",
    image: "src/assets/images/truecrayon.svg",
  },
  {
    typecontent: "Cours vidéo",
    titre: "Les lentilles minces",
    classe: "Première D",
    type: "leçon 7",
    matter: "Physique",
    iconeimage: "src/assets/images/video.png",
     color: "#FEE6A4",
    color2: "#FFCD35",
    href: "course1",
    image: "src/assets/images/truecrayon.svg",
  },
  {
    typecontent: "Cours vidéo",
    titre: "Les intégrales",
    classe: "Terminale C",
    type: "leçon 8",
    matter: "mathématiques",
    iconeimage: "src/assets/images/video.png",
    color: "#FEE6A4",
    color2: "#FFCD35",
    image: "src/assets/images/truecrayon.svg",
  },
]


</script>
<template>
  
  <Navbar/>
<Banner/>

<div class="contain_70">
  <Filter/>
<div class='BigTitlecourse'>Tous les contenus </div>
 <div class='contain_f' >
  
   <CardCourse v-for="(course, item) in courses" :key="item" :typecontent="course.typecontent" :titre="course.titre" :class="course.classe"
      :type="course.type" :matter="course.matter" :iconeimage="course.iconeimage"  
      :href ="course.href"  :classe ="course.classe"
      />
       <CardCourse v-for="(course, item) in courses2" :key="item" :typecontent="`${course.typecontent}`" :titre="`${course.titre}`" :class="`${course.classe}`"
        :type="`${course.type}`" :matter="`${course.matter}`" :iconeimage="`${course.iconeimage}`"  
        :href ="`${course.href}`" :color2="`${course.color2}`" :color="`${course.color}`" :classe ="`${course.classe}`"
        />
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


