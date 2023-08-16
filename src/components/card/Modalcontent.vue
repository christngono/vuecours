<template>
   <div>
        <h4>{{ titre }}</h4>
       <p>{{ content }}</p>
       <span @click="$emit(close)" class="btn-lite">{{ action }}</span>
   </div>

</template>

<script setup>

defineProps({
    content:{
        type:String,
        default:"La reponse se trouve dans l'eau😆"
    },
    titre:{
        type:String,
        default: 'Notification',
    },
    action:{
        type:String,
        default:'close'
    },
})
defineEmits("close");
</script>

<style scoped>
div{
    background: #fff;
    padding:50px;
    border-radius:30px;
}
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
</style>