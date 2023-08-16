<template>
    <BannerQuiz titre="Orienatation"/>
    <CardProfil />
    <div class="coquiz">
        <Notification />
    </div>
    <Questions />
    <Questions />
    <ApparitionCard/>
</template>

<script setup>
import Notification from '../components/card/Notification.vue';
import CardProfil from '../components/card/cardProfil.vue';
import BannerQuiz from '../components/quiz/BannerQuiz.vue';
import Questions from '../components/Questions/Questions.vue';
import ApparitionCard from '../components/card/ApparitionCard.vue';

</script>

<style>
.coquiz {
    width: 500px;
    margin: auto;
    padding-top: 100px;
}
</style>