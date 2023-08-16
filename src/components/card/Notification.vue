<template>
   <div class="root">
        <span @click="isOpen = true" class="btn-lite">Aide</span>
        <Teleport to="body">
        <div class="modal" v-if="isOpen">
          <Modalcontent/>
        </div>
        </Teleport>
   </div>
</template>

<script setup>
  import { ref }  from 'vue'
import Modalcontent from './Modalcontent.vue';
defineProps({
    content: {
        type: String,
        default: "La reponse se trouve dans l'eau😆"
    }
})
  const isOpen = ref(false)
</script>

<style scoped>
.btn-lite{
    background: #51B6C2;
    color:#fff;
    border-radius:15px;
    padding:10px 20px;
    box-shadow: 2px 2px #3398a4;
}
.btn-lite:hover{
    cursor: pointer;
}
.root{
    position: relative;
}
.modal{
    position: absolute;
    top:0;
    left:0;
    background: rgba(0,0,0,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    width:100%;
    height: 100%;

}
.modal > div{
    background: #fff;
    padding:50px;
    border-radius:30px;
}

</style>