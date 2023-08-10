<template>
   <div class="nav">
    <div class="cont">
      <div class="bl-logo">
        <span class="logo">akabnam</span>
         <div class="bl-btn-ca">
            <span ><a href="" class="btn">proposer votre service</a> </span>
            <span> <a href="">connexion</a></span>
          </div>
    </div>
      <div class="bl-search">
        <input type="search" class="search">
      </div>
      <div class="bl-btn">
        <span ><a href="" class="btn">proposer votre service</a> </span>
        <span> <a href="">connexion</a></span>
      </div>
      </div>
   </div>
</template>

<script setup>
 
</script>

<style scoped>
.bl-btn-ca{
display: none;
}
.bl-logo{
  width: 10%;
  display: flex;
}
.bl-search{
  width: 60%;
}
.bl-btn{
  width: 30%;
  text-align: right;
}
  .cont{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    height: 80px;
    width:90%;
    margin:auto;
   
  }
  .nav{
    
    background:#1D3901;
    height: 90px;
  }
  .logo{
    color:#F96900;
  }
  .btn{
    color:#F96900;
    border:1px solid #F96900;
    padding:5px 10px;
  }
  .search{
    width: 100%;
    padding:13px 5px;
    border-radius: 30px;
  }
   @media (max-width: 860px) {
    .bl-search{
  width: 100%;
}
.bl-btn{
display: none;
}
.bl-logo{
  width: 100%;
  padding-bottom:10px;
  display: flex;
  justify-content: space-between;
}
.nav{
    padding-top:15px;
}
.bl-btn-ca{
display: flex;
}
   }
</style>