<template>
  <section class="contact" ref="refTab">
    <div class="title" ref="addToRefs">Contact me</div>
    <div class="des" ref="addToRefs">
      If you want to know more about me, my availability, or just chat for a while, I leave you my
      communications.
    </div>
    <div class="list" ref="addToRefs">
      <div class="item">
        <font-awesome-icon :icon="faLinkedin" size="1x" :style="{ paddingRight: '5px' }" />
        <a href="https://www.linkedin.com/in/aaron-sarmiento/" class="contact"> Aaron Sarmiento </a>
      </div>
      <div class="item">
        <font-awesome-icon :icon="faEnvelope" size="1x" :style="{ paddingRight: '5px' }" />
        <a href="mailto:aaronsar29@gmail.com" class="contact"> aaronsar29@gmail.com </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const refTab = ref(null)
const refDivs = ref([])

const addToRefs = (el) => {
  if (el && !refDivs.value.includes(el)) {
    refDivs.value.push(el)
  }
}

onMounted(() => {
  //   useCustomHook(refTab, refDivs)
})
</script>

<style scoped>
.contact {
  padding-bottom: 220px;
  & .title {
    font-size: 5vw;
    text-align: center;
    font-family: 'MuseoModerno', system-ui;
    padding-bottom: 10px;
  }
  & .des {
    color: #eee9;
    text-wrap: pretty;
    text-align: center;
    max-width: 500px;
    margin: auto;
    font-size: large;
    padding-bottom: 60px;
  }
  & .list {
    text-align: center;

    & .item,
    & .item2 {
      margin-top: 50px;

      a {
        color: #eee;
        text-decoration: none;
        cursor: pointer;
        width: auto;
        border-bottom: 1px solid #fff;
      }
    }
  }
}
</style>
