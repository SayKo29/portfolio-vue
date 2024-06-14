<template>
  <header>
    <div class="logo">
      <img src="../assets/logo.png" alt="logo" />
    </div>
    <nav :class="statusNav">
      <span
        v-for="(value, key) in listNav"
        :key="key"
        :class="{ active: activeTab === value.toLowerCase() }"
        @click="changeTab(value.toLowerCase())"
      >
        {{ value }}
      </span>
    </nav>
    <div class="icon-bar" @click="toggleNav">
      <font-awesome-icon :icon="statusNav === 'active' ? faXmark : faBars" />
    </div>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useNavBarStore } from '../stores/navbarStore'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

const listNav = ['home', 'skills', 'projects', 'contact']
// console.log()
// let statusNav = ref()
const navbarStore = useNavBarStore()
const activeTab = computed(() => navbarStore.activeTab)

const changeTabActive = (value) => {
  navbarStore.mutations.changeTabActive(value)
}

const changeTab = (value) => {
  changeTabActive(value)
  toggleNav()
}

const toggleNav = (event) => {
  if (event) {
    event.stopPropagation()
  }
  statusNav.value = statusNav.value === 'active' ? undefined : 'active'
}

const clickOutside = (e) => {
  if (statusNav.value === 'active') {
    if (
      e.target.className !== 'icon-bar' &&
      e.target.className !== 'active' &&
      e.target.className !== 'logo' &&
      e.target.className !== 'nav'
    ) {
      toggleNav()
    }
  }
}

onMounted(() => {
  document.addEventListener('click', clickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', clickOutside)
})
</script>

<style scoped>
/* Agrega aquí tus estilos CSS */
header {
  position: fixed;
  width: min(1300px, 100%);
  height: 60px;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 20px;
  z-index: 100;
  backdrop-filter: blur(10px);
  & img {
    width: 50px;
  }
  & .logo,
  nav {
    display: flex;
    gap: 30px;

    & span {
      cursor: pointer;
      text-transform: capitalize;
      border-bottom: 2px solid transparent;
      font-size: 1.2em;
      &.active {
        color: var(--pink-color);
        text-shadow: 0 0 5px #7a43b6;
      }

      &:hover:not(.active) {
        border-bottom: 1.5px solid var(--pink-color);
        transition: 0.5s;
      }
    }
  }
}
</style>
