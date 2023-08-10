<template>
 
  <div class="CardCourse">
     <a :href="href">
    <div class='one'>
    <div class="course_head">
        <img :src='image' height='30' alt="">
        <span>{{type}}</span>
    </div>
    <div class="course_body">
        <div class='course_img'> <img class='' :src='iconeimage'  alt=""></div>
           <span>{{titre}}</span><br/>
           <span class="no">{{typecontent}}</span>
         </div>
     </div>
    <div class="course_foot">
        <div class="">{{matter}}</div>
        <div>{{classe}}</div>
    </div>
     </a>
  </div>
 
</template>

<script setup>
defineProps({
  lesson:{
    type: String,
  },
  image:{
    type:String,
    default:'src/assets/images/truecrayon.svg',
  },
  matter:{
    type:String,
     default:'Mathématiques',
  },
  type:{
    type:String,
       default:'leçon 1',
  },
  iconeimage:{
    type:String,
     default:'src/assets/images/virtuel.svg',
  },
  typecontent:{
    type:String,
    default:'notion',
  },
  titre:{
    type:String,
    default:'Equation et inéquations',
  },
   classe:{
    type:String,
    default:'Première A',
  },
  color:{
    type:String,
    default:'#CFECB1',
  },
   color2:{
    type:String,
    default:'#98D652',
  },
  href:{
    type:String,
    default:'course1',
  }
})


</script>

<style>

.course_head{
    display:flex;
    width:60px;
    justify-content: space-between;
    
}
.course_head span{
  font-size:0.9rem;
}
.CardCourse{
    margin-top:10px;
    height: 200px;
    border-radius: 10px;
    width:250px;
    background-color: #c4c4c4;
    box-shadow: 2px 2px #C4C4C4;
}
.course_body{
height: 80px;
}
.CardCourse:hover{
    background-color: #c4c4c4;
    box-shadow: 2px 4px #C4C4C4;
    cursor: pointer;
    
}
.one{
    padding: 10px;
    background-color:v-bind(color);
    height: 70%;
     border-radius: 10px 10px 0px 0px;
}
.course_foot{
font-size: 0.8rem;
border-radius: 0 0 10px 10px;
font-weight: bold;
display:flex;
flex-wrap:wrap;
justify-content: space-between;
background-color:v-bind(color2);
padding: 10px;
}
.course_body> span{
 line-height: 2px;
  font-size:0.9rem;
}
.no{
    font-weight: bold;
    color:#000;
    font-size: 0.9rem;
}
.course_img{
   text-align: center; 
}
.course_img>img{
   height: 50px;
}
.course_head span{
    vertical-align:top;
    
}
a{
  color:#000;
  text-decoration: none;
}
@media (max-width: 600px) {
       .CardCourse{
    width: 45%;
    height: 170px;
 
  }
   .course_body{
    padding-bottom:2px;
   }
  .course_body>p{
    font-size: 0.7rem;
  }
  .course_body p{
 line-height: 2px;
}
.course_foot{
  padding: 1px 5px;
  height: 25px;
  font-size:0.7rem;
}
.course_img>img{
   height: 40px;
}
.course_body> span{
 line-height: 2px;
  font-size:0.7rem;
}
    }

</style>