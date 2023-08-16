<template>
    <div class="root">
        <Teleport to="body">
            <div class="modal">
                 <div>
        <h4>{{ titre }}</h4>
           <p class="note1">{{ content }}</p>
          <div class="btn-lite">💪🏾Revise mon cours</div>
          <div @click="$emit('restartquiz')" class="btn">Recommencé</div>
       </div>
            </div>
        </Teleport>
    </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
    content: {
        type: String,
        default: "La reponse se trouve dans l'eau😆"
    }, 
    titre:{
          type: String,
        default: "Message"
    }
})
const isOpen = ref(true)
</script>

<style scoped>

h4{
    text-align: center;
}
.btn-lite {
    background: #51B6C2;
    color: #fff;
    text-align: center;
    border-radius: 15px;
    padding: 10px 30px;
    box-shadow: 5px 5px #3398a4;
    margin-right:5px;
    margin-bottom:10px;
}
.note1 {
    font-size:3rem;
    font-weight:bold;
    color:#FF6600;
    text-align: center;
}
.btn{
    padding:10px 30px;
    font-weight: bold;
    background-color:#fff;
    border-radius: 15px;
      text-align: center;
    font-family: 'Nunito Sans', sans-serif;
    border:1px solid #e7e1d8;
    box-shadow: #e7e1d8 5px 5px;
    color:#000;
    transition: ease-in 0.1s;
}

.btn-lite:hover {
    cursor: pointer;
}
.btn:hover{
   cursor: pointer;  
}

.root {
    position: relative;
}

.modal {
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

}

.modal>div {
    background: #fff;
    padding: 50px;
    border-radius: 30px;
}</style>