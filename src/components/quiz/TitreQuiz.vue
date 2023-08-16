<template>
   <div class="titreQuiz">
        <div class="name">
            <span> <slot></slot></span>
        </div>
        <div class="cp_help">
            <HelpQuiz /> 
        </div>
   
      </div>
</template>

<script setup>
import HelpQuiz from './HelpQuiz.vue';


</script>

<style scoped>
.name span{
    font-size:1.2rem;
    font-weight: bold;
}
.help{
    display:center;
    justify-content: center;
    background: #fff;
    border:1px solid #e7e1d8;
    box-shadow: #e7e1d8 5px 5px;
    padding:15px 15px;
     margin-right:10px;
    border-radius:10px;

}
.help:hover{
    cursor: pointer;
}
.titreQuiz{
    
    width:30%;
    margin: 40px auto;
    display:flex;

}
.cp_help{
    margin-left:10px;
    display:flex;
}

@media (max-width: 600px) {
   .titreQuiz{
    
    width:90%;
    margin: 40px auto;
    display:flex;

} 
  
}
</style>