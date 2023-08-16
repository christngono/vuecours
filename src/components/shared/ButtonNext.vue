<template>
  <span class="btn-lite">{{ title }}</span>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        default: "suivant😆"
    }
})
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
</style>