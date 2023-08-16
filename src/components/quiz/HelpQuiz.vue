       <template>
                <div class="root">
                    <span @click="isOpen = true"
                          class="help"> <i class="bi bi-info-circle"></i></span>
                    <Teleport to="body">
                        <div class="modal"
                             v-if="isOpen">
                             <Modalcontent @click="isOpen = false"  titre="consigne" action="ok" content="Repondre à la question en choissisant parmis les reponses🤣"/>

                        </div>
                    </Teleport>
                </div>
</template>

<script setup>
import { ref } from 'vue'
import Modalcontent from '../card/Modalcontent.vue';
const isOpen = ref(false)
</script>

<style scoped>
.btn-lite {
    background: #51B6C2;
    color: #fff;
    border-radius: 15px;
    padding: 10px 20px;
    box-shadow: 2px 2px #3398a4;
}

.btn-lite:hover {
    cursor: pointer;
}
.help:hover{
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
}
.help{
    display:center;
    justify-content: center;
    background: #fff;
    border:1px solid #e7e1d8;
    box-shadow: #e7e1d8 5px 5px;
    padding:15px 15px;
     margin-right:10px;
    border-radius:10px;

}

</style>