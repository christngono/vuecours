<template>
  <div class='wrap_banner'>
    <div class='align'><span class="titre">Cours - exercices- vidéo - astuces</span></div>
  </div>
</template>

<script>

</script>

<style>
.titre{
  background: #fff;
  padding:15px 25px;
}

    .wrap_banner{
        background-image:url('../assets/bcg.svg');
        display:flex;
        justify-content: center;
        align-items: center;
        height: 400px;
        margin-bottom:50px;
    }
    .wrap_banner span{
    font-size:2rem;
    font-weight:bold;

    }
    .align img{
        vertical-align: middle;
    }
      @media (max-width: 600px) {
        .wrap_banner{
        height: 200px;
    }
     .wrap_banner span{
    font-size:1.2rem;
 

    }
  }
</style>