<script setup>
import { RouterView } from 'vue-router'
import '@/assets/variables.css'
import { ref } from 'vue'

const ballStyle = ref({
  top: '50%',
  left: '50%'
})

let animationFrameId
const handleMouseMove = (event) => {
  const { clientX, clientY } = event

  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
  }

  animationFrameId = requestAnimationFrame(() => {
    ballStyle.value = {
      top: `${clientY}px`,
      left: `${clientX}px`
    }
  })
}
</script>

<template>
  <main @mousemove="handleMouseMove">
    <div class="gradient-ball" :style="ballStyle"></div>
    <RouterView />
  </main>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
.gradient-ball {
  position: fixed;
  width: 600px;
  height: 600px;
  filter: blur(200px);
  border-radius: 50%;
  z-index: -2;
  background-image: radial-gradient(circle, red, var(--green-color));
  opacity: 0.2;
  pointer-events: none; /* Makes sure the ball doesn't interfere with other elements */
  transform: translate(-50%, -50%); /* Center the ball */
  transition:
    top 0.1s ease-out,
    left 0.1s ease-out; /* Smooth transition */
}
</style>
<style scoped></style>
