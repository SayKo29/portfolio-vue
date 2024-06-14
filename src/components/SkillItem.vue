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
console.log(props.item)
</script>
<style lang=""></style>
