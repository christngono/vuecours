<template>
      <div class="question">
        <div class="card_q">
              <span class="">Vous aimez des disciplines qui vous encouragent à vous exprimer.</span>
        </div>

       <div class="note">
          <span class="pt">1</span>
          <span class="pt">2</span>
          <span class="pt">3</span>
          <span class="pt">4</span>
          <span class="pt">5</span>
       </div>

      </div>
</template>

<script setup>
  
</script>

<style>
      .card_q{
        padding:20px 20px;
        width: 100%;
        border-radius: 10px;
        border: 1px solid #ccc;
        color:#000;
        background: #fff;
      }
      .note{
        margin-top:5px;
        display: flex;
        justify-content: end;
      }
      .pt{
       display: flex;
       align-items: center;
       justify-content: center;
        background: #51B6C2;
        color:#fff;
        border-radius:50%;
        height: 30px;
        width:30px;

      }
      .pt:hover{
        cursor: pointer;
      }
      .question{
        width:40%;
        margin: 10px auto;
      }
      @media (max-width: 600px) {
       .question{
        width:90%;
      
      }
       .card_q{
       
        width: 95%;

    }
}
</style>