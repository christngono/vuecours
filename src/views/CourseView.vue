<script setup>
import Test from '../components/Test.vue'
import BlockInfos from '../components/BlockInfo.vue'
import BigTitle from '../components/BigTitle.vue' 
import BigTitleVue from '../components/BigTitle.vue'
import Intro from '../components/Intro.vue'
import Paragraph from '../components/Paragraph.vue'
import SmallTitle from '../components/SmallTitle.vue'
import Title2 from '../components/Title2.vue'
import Close from '../components/Close.vue'
import SectionAction from '../components/SectionAction.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
   <Close/>
<div class="contain">
   <BigTitle title='commentaire composé'/>
    <Intro name='Introduction'/>
   <Paragraph content='Le commentaire composé est un exercice de type II en littérature française qui te demande 
une maitrise absolue des règles de la méthodologie, des enjeux de la langue française et 
une parfaite connaissance des œuvres au programme d’une part. D’autre part, c’est un 
exercice de destruction et de reconstruction respectant l’ordre méthodologique. Comme 
tout exercice, le commentaire se fait en trois 03 parties à savoir : Une introduction, un 
développement et une conclusion. Nous allons te guider tout au long de ce cours à rédiger 
un bon devoir de commentaire composé. C’est partie '/>
<Paragraph class='bold' content='Avant de commencer, voici quelques règles simples que tu dois connaitre :'/>
  <Test title='Bon savoir' text="Sautes deux lignes entre : Ton introduction et ton développement Ton développement et ta conclusion Saute une ligne entre chaque partie de ton devoir Commence tes paragraphes par un alinéa."/>  

   <SmallTitle nbr='1' title='À quoi sert un commentaire composé ?'/>
   <Paragraph class='bold' content='Avant de commencer la rédaction de notre devoir de commentaire nous allons nous 
intéresser à son rôle. Quel est donc le rôle du commentaire ? Il s’agit d’expliquer un 
texte et ses enjeux de manière ordonnée et structurée. Pour ce faire, deux 
démarches sont nécessaires '/>
<Paragraph content=' démarche analytique (1re étape) : analyser le texte en exposant les idées cachées du texte, 
c’est-à-dire ce dont il est question dans le texte ;
z démarche synthétique (2e étape) : définir les grands axes de la réflexion en parlant du 
premier (1) et du deuxième (2) centre d’intérêt.'/>
   <Title2 />
  
   <BlockInfos/>
</div>   
   <SectionAction/>
   <Footer/>
</template>
<style scoped>

 
</style>
