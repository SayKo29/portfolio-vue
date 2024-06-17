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
let statusNav = ref(false)
const navbarStore = useNavBarStore()
const activeTab = computed(() => navbarStore.activeTab)

const changeTabActive = (value) => {
  navbarStore.changeTabActive(value)
}

const changeTab = (value) => {
  changeTabActive(value)
  toggleNav()
  scrollToSection(value)
}

const scrollToSection = (className) => {
  const section = document.querySelector(`.${className}`)
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
    const separation = 80 // Adjust the separation value as needed
    const offsetPosition = section.offsetTop - separation
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
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

const sections = ref([])

onMounted(() => {
  document.addEventListener('click', clickOutside)
  document.addEventListener('scroll', handleScroll)

  sections.value = listNav.map((section) => document.querySelector(`.${section}`))

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const sectionClass = entry.target.className
        changeTabActive(sectionClass)
      }
    })
  }, observerOptions)

  sections.value.forEach((section) => {
    observer.observe(section)
  })
})

onUnmounted(() => {
  document.removeEventListener('click', clickOutside)
  document.removeEventListener('scroll', handleScroll)
})

const handleScroll = () => {
  statusNav.value = undefined
}
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
.icon-bar {
  display: none;
}

@media screen and (max-width: 768px) {
  header {
    & .icon-bar {
      display: block;
    }
    nav {
      position: fixed;
      background-color: var(--nav-mobile-color);
      width: 80%;
      height: 100vh;
      inset: 0 auto 0 0;
      color: var(--nav-mobile-color);
      flex-direction: column;
      padding: 50px;
      box-sizing: border-box;
      left: -100%;
      opacity: 0;
      transition: 0.5s;
      &.active {
        left: 0;
        opacity: 1;
      }
      & span {
        font-size: 1.3em;
        margin: 20px 0;
        color: #eee;
        width: fit-content;
      }
    }
  }
}
</style>
