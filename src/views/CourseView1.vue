<script setup>
import Test from '../components/Test.vue'
import BlockInfos from '../components/BlockInfo.vue'
import BigTitle from '../components/BigTitle.vue' 
import BigTitleVue from '../components/BigTitle.vue'
import Intro from '../components/Intro.vue'
import Paragraph from '../components/Paragraph.vue'
import SmallTitle from '../components/SmallTitle.vue'
import Title2 from '../components/Title2.vue'
import SimpleTitle from '../components/SimpleTitle.vue'
import CardImage from '../components/CardImage.vue'
import LasylabTitle from '../components/LasylabTitle.vue'
import Close from '../components/Close.vue'
import ButtonSpecial from '../components/shared/ButtonSpecial.vue'
import SectionAction from '../components/SectionAction.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
<Close/>
<div class='contain lign'>
<LasylabTitle/>
<SimpleTitle title='Etape 1- La transcription:'/>
<Paragraph class='gt' content=' Le gène de l’ADN situé dans le noyau fourni les informations nécessaires à la création des protéines dans le 
cytoplasme. Pour ce faire il va :'/>
<Paragraph class='gt' content="recopier les informations  de la molécule D’ADN  dans une molécule messagère dite acide ribonucléique messager (ARNm) en utilisant un complexe enzymatique qui s’appelle 
L’ARN-Polyméras"/>
<Paragraph class='gt' content="Ce dernier va incorporer des nucléotides présent dans le milieu cellulaire sur le brin ARN messager par complementarité des bases azotés avec l’un des brins de la molécules d’ADN"/>
<CardImage/>
<Paragraph class='gt' content="- Cette molécule va se déplacer hors du noyau vers le 
cytoplasme ou commence la seconde procédure qui est la traductio"/>
</div>

<SectionAction/>
     <Footer/>
</template>
 <style>
 
 </style>