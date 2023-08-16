<template>
  <BannerQuiz titre="Mathématiques"/>
   <TitreQuiz> La propriété de pythagore</TitreQuiz>
  <CardOverlay v-if='endofQuiz' :content="`${score}/${questioncounter}`" titre="Tu as eu une note 😀" @restartquiz="onQuizstart()"/>
    <div class="card_progress">
       <div class="bc" style="100%"></div>
       <div class="progress" :style="`width:${timer}%`"></div>
    </div>
   <div class="contain_quiz">
    <span>{{ score }}/4</span>
   <QuestionQuiz >{{ currentquestion.question }}</QuestionQuiz>
   <div  v-for="(choice,item) in currentquestion.choices" :key="item">
    
     <div :ref='OptionChosen' class='default-answer btn-1'  @click="OnOptionClicked(choice, item)"><span class="rg">{{ item + 1 }}</span> {{ choice }}</div>
   </div>
  
   
   </div>
  
</template>

<script setup>
import BannerQuiz from '../components/quiz/BannerQuiz.vue';
import TitreQuiz from '../components/quiz/TitreQuiz.vue';
import ProgressQuiz from '../components/quiz/ProgressQuiz.vue';
import QuestionQuiz from '../components/quiz/QuestionQuiz.vue';

import Button from '../components/shared/Button.vue';
import CardOverlay from '../components/card/CardOverlay.vue';
import { onMounted, ref } from 'vue'

const questioncounter = ref(0);
const endofQuiz  = ref(false);
const currentquestion = ref({
  question: '',
  answer: '',
  choices: [],
});

let canClick = true;
let score = ref(0);
let timer = ref(0);

let  percentagescore = ref(0);
const questions = [
  {
    question: "1-Dans qu’elle condition applique t’on la propriété de pythagore ?",
    answer: 1,
    choices: [" dans un triangle rectangle", " dans n’importe qu’elle triangle ", "dans un carrée ", "aucune n’est vrai"],
  },
  {
    question: " c’est quoi un triangle rectangle?",
    answer: 2,
    choices: ["c'est un rectangle triangle", "c'est un triangle qui as un angle droit", "c'est triangle qui 3 angles droit",
  "c'est une figure qui forme un petit carrée"],
  },
 
   {
    question: "ABC est un triangle rectangle en A la formule de pythagore est ",
    answer: 1,
    choices: ["𝐵𝐶^2=𝐴𝐵^2+𝐴𝐶^2", "A𝐶^2=𝐵𝐶^2+𝐴𝐶^2", "A𝐵^2=𝐴𝐶^2+𝐵𝐶^2"]
  },
   {
    question: " ABC est un triangle rectangle en A telque AB= 5, AC=7,  BC est égale à ?",
    answer: 1,
    choices: ["BC=4", "BC=12", "BC=49", "BC=0"]
  },
  


];

const loadQuestion = () => {
  //je charge la question suivante
  if(questions.length> questioncounter.value){
    currentquestion.value = questions[questioncounter.value];
    questioncounter.value++;
     
  
  }else{
   //plus de question
    
    onQuizend();
   console.log('get out');
  }
 
};
// const countDownTimer = function(){
//    let interval = setInterval(()=>{
//      if(timer.value > 0){
//       timer.value +=20;

//     }else{
//       onQuizend();
//       clearInterval(interval)
//     }
//   }, 100);
//  };
// les foncions
let itemsRef =[];
const OptionChosen = (element)=>{
  if(element){
    itemsRef.push(element);
  }
}
const clearSelected = (divSelected)=>{
  setTimeout(()=>{
  divSelected.classList.remove('good-answer')
  divSelected.classList.remove('bad-answer')
  divSelected.classList.add('default-answer')

    timer.value += 100 / questions.length;
loadQuestion();
 
  },1000);
};
const OnOptionClicked = (choice, item)=>{
  if(canClick){

    const divContainer = itemsRef[item];
    const OptionId = item + 1;
    if (currentquestion.value.answer === OptionId) {
      score.value++
     
      console.log('your are correct')
      console.log(score);
      divContainer.classList.add('good-answer')
      divContainer.classList.remove('default-answer')

    } else {
      console.log('your are bad')
      divContainer.classList.add('bad-answer')
      divContainer.classList.remove('default-answer')
    }
   // bar
    
  
     
 

    console.log(choice, item);
   
    //charge la question suivante
    clearSelected(divContainer);
  }

  }
const onQuizstart = ()=>{
  questioncounter.value = 0;
  endofQuiz.value=false;
  canClick=true;
  score.value = 0;
  timer.value = 0;

  currentquestion = {
    question: '',
    answer: 1,
    choices: [],
  };
  questions.value =[];
  percentagescore.value = 0;
    loadQuestion();
 
}; 
const onQuizend = ()=>{
  //calcul le pourcentage
  percentagescore.value = (score.value/100)*100;
  //arrete le timer
  timer.value = 100;
  //affiche le overlay
   endofQuiz.value = true;
};
onMounted(() => {
  loadQuestion();
 
});
</script>

<style scoped>
.btn-1 {
   padding:10px 0px;
    text-align:center;
    width:100%;
    font-weight: bold;
   
    border-radius: 40px;
    display: block;
    font-family: 'Nunito Sans', sans-serif;

   cursor: pointer;
   
    transition: ease-in 0.1s;
    margin-top:15px;
}
.contain_quiz{

  width:40%;

  padding:5px 10px 10px 10px;
  margin:10px auto;
  border-radius:20px;
  border:2px solid #e7e1d8;

}
.bad-answer{
   color:#fff;
    cursor: pointer;
    background: #FF4B4B;
    box-shadow: 5px 5px #d42c2c;
     font-size:0.9rem;
   font-weight: 400;
     text-align: left;
}
.good-answer{
    text-align: left;
  color:#fff;
  background:#1CB0F6 ;
    box-shadow: 5px 5px #0975a7;
     font-size:0.9rem;
   font-weight: 400;
}

.default-answer{
   color: #000;
   text-align: left;
   background-color: #fff;
   box-shadow: #e7e1d8 5px 5px;
   border: 1px solid #e7e1d8;
   font-size:0.9rem;
   font-weight: 400;
}
.card_progress{
border:1px solid #e7e1d8;
box-shadow: #e7e1d8 5px 5px;
border-radius:10px 20px 20px 0px;
width:40%;
margin:auto;
padding:10px 10px;
}
.progress{
  height: 10px;
  background: #1CB0F6;
  border-radius:30px;

}
.bc{
   height: 10px;
   position: relative;
   top:10px;
   left:0;
  background: #e7e1d8;
  border-radius:30px;
    z-index:-1;
}
/*styl rang*/
.rg{
margin-left:10px;
margin-right: 10px;
display: inline-block;
height: 20px;
width:20px;
border-radius:50%;
text-align: center;
background:#e7e1d8;
}
@media (max-width: 600px) {
    
    .contain_quiz{
  width:85%;
}
   .card_progress{
    width: 90%;
   
}
.quest {
  padding: 12px;
  width: 90%;
}
}
</style>