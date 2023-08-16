<script setup>
import { ref } from 'vue'
import ButtonNext from '../shared/ButtonNext.vue';

const show = ref(false)
</script>

<template>
  <div class="apparition">  
<ButtonNext @click="show = !show"/>
    <Transition>
    <p v-if="show" class="card_q">quel age as tu?</p>
    </Transition>

    </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
 .card_q{
        padding:20px 20px;
        width: 100%;
        border-radius: 20px 20px 20px 0px;
        border: 1px solid #ccc;
        color:#000;
        background: #fff;
      }
      .apparition{
        width:40%;
        margin: 10px auto;
      }
</style>