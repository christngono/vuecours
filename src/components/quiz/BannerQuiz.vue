<template>
  <div class="nav">
      <div class="nav_contain">
          <div> <span class="te">Mathématique</span></div>
          <div><img src="../../assets/logolasylab.png"
                   alt="" height="80"></div>
          <div>
              <img src="../../assets/ruby.svg"
                   alt="" height="20">
              <img src="../../assets/star.svg"
                   alt="" height="20">
          </div>
      </div>
  </div>
</template>

<script setup>
 
</script>

<style scoped>
       .nav {
           height: 80px;
           color: #fff;
           background: linear-gradient(90deg, #EC6519 0%, rgba(237, 229, 30, 0.74) 100%);
       }

       .nav_contain {
        margin:auto;
           display: flex;
           align-items: center;
           height: 100%;
           justify-content: space-between;
           width: 80%;
       }
       .te{
        font-size:1.5rem;
        font-weight: bold;
       }
</style>