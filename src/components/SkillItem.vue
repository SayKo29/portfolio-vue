<template lang="">
  <div class="item">
    <div v-if="typeof props.item.icon === 'string'" class="image-container">
      <img :src="props.item.icon" :alt="props.item.name" class="icon" />
    </div>
    <font-awesome-icon v-else :icon="props.item.icon" />
    <h3>{{ props.item.name }}</h3>
    <div class="des">{{ props.item.des }}</div>
  </div>
</template>
<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
const props = defineProps(['item'])
</script>
<style scoped>
.item {
  svg {
    font-size: 30px;
    background-color: #eee2;
    padding: 10px;
    border-radius: 10px;
    max-width: 50px;
    max-height: 50px;
  }
  .image-container {
    width: 50px;
    height: 50px;
    background-color: #eee2;
    border-radius: 10px;
    .icon {
      width: 100%;
      height: 100%;
      object-fit: contain;
      /* force icon to be white */
      filter: brightness(0) invert(1);
    }
  }
  & .des {
    text-align: left;
    width: 100%;
    font-size: medium;
    color: #eee9;
    text-wrap: balance;
  }
  h3 {
    font-size: larger;
  }
}
</style>
