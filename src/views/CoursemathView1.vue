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
    <Close />
    <div class='contain lign'>
        <LasylabTitle />
        <SimpleTitle title="C’est quoi la propriété de Pythagore ?" />
        <Paragraph class='gt'>Déjà la propriété de Pythagore viens du mathématicien Pythagore
            <CardImage><img src='../assets/course/PYTHAGORE.png' height="200"/></CardImage>
    La propriété de Pythagore est une sorte de formule  magique😁😁😁 qui rélie les côtés d’un triangle rectangle</Paragraph>
    <Paragraph  class='gt'>Voici comment elle fonctionne.
    Comme toute formule magique elle a besoin d’ingrédient pour fonctionner 
    Quels sont les ingrédients : <span style="color:#ff6600">Propriétés directe</span>
    </Paragraph>
    <Paragraph  class='gt'>
        Il te faut un triangle rectangle, c’est important que, si tu ne sais pas ce qu’ ai un triangle rectangle regarde la vidéo sur les différents triangles(image)
   <span style="color:#FF6600">Alors le carré de l’hypoténuse est égale à la somme des carrés des deux autres cotés</span>  (images) c’est simple n’est ce pas!🤗   Il faut noter que l’hypotenuse est le coté le plus long du triangle rectangle et se situe en face de l’angle droit de ce dernier.

    </Paragraph>
       

    </div>

    <SectionAction />
    <Footer />
</template>
<style></style>