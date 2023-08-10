<template>
    <div href="" class="special">
          {{ title }}
       <img :src="image" alt="" height="30"/>
      </div>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        default: 'Continuer'
    },
    image:{
         type: String,
    }
})
</script>

<style scoped>
.special {
    display: flex;
    justify-content: center;
    align-items:center;
    font-weight: bold;
    padding:auto;
    background-color: #fff;
    border-radius: 10px;
    height:100px;
    width:120px;
    font-size:0.9rem;
    font-family: 'Nunito Sans', sans-serif;
    border: 1px solid #e7e1d8;
    box-shadow: #e7e1d8 5px 5px;
    color: #000;
    transition: ease-in 0.1s;
    font-size:0.8rem;
}

a {
    text-decoration: none;
    color: white;
}

.special:hover {
    box-shadow: #D0D23F 5px 5px;
    color: #000;
    background-color: #EEF05D;
    border: 1px solid #D0D23F;
    cursor: pointer;
}

@media (max-width: 600px) {
    .btn {
        padding: 10px 20px;
        font-size: 0.9rem;

    }
   
}

</style>