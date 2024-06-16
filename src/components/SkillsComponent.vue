<template>
  <section class="skills" ref="reftab">
    <div v-for="(category, categoryIndex) in skills" :key="categoryIndex">
      <div :class="`title${category.type === 'soft' ? '-soft' : ''}`" ref="addToRefs">
        {{ category.type === 'hard' ? 'Hard-Skills' : 'Soft-Skills' }}
      </div>
      <div class="list" ref="addToRefs">
        <SkillItem v-for="(item, index) in category.list" :key="index" :item="item" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { faVuejs, faReact, faJs, faPhp, faNodeJs } from '@fortawesome/free-brands-svg-icons'
import {
  faUser,
  faCircleQuestion,
  faUsers,
  faSmile,
  faUserTie,
  faMagnifyingGlass
} from '@fortawesome/free-solid-svg-icons'
import SkillItem from '@/components/SkillItem.vue'

// Definir el estado de las habilidades
const skills = ref([
  {
    type: 'hard',
    list: [
      {
        name: 'Vue',
        des: 'With more than 4 years in a project, this is my most used and experienced framework.',
        icon: faVuejs
      },
      {
        name: 'React Native',
        des: 'Made two apps with React Native, have been working with this framework for 2 years.',
        icon: faReact
      },
      {
        name: 'JavaScript',
        des: 'Used in all my loved frameworks always learning new things about it and after 5 years I still love it.',
        icon: faJs
      },
      {
        name: 'PHP',
        des: 'Developed some API features in a SaaS project for 3 years.',
        icon: faPhp
      },
      {
        name: 'NodeJs',
        des: 'Used for the backend personal projects, with authentication, real time communication and more.',
        icon: faNodeJs
      },
      {
        name: 'Astro js',
        des: 'Made a personal web project with scrapping to get the cheapest price for padel articles',
        icon: '/src/assets/astrojs.svg'
      }
    ]
  },
  {
    type: 'soft',
    list: [
      {
        name: 'Teach',
        des: 'Learned a lot of things in my career, and I love to share my knowledge with others.',
        icon: faUser
      },
      {
        name: 'Problem Solver',
        des: 'We have the power to solve real life problems with technology, and I like to do it.',
        icon: faCircleQuestion
      },
      {
        name: 'Team Player',
        des: "Working in a team, to me, it's the best way to learn and grow personally and professionally.",
        icon: faUsers
      },
      {
        name: 'Positive Attitude',
        des: 'Have a positive attitude is a must for me, to face any challenge and to be a better person.',
        icon: faSmile
      },
      {
        name: 'Autonomy',
        des: 'I can work alone or in a team, but i always want to be autonomous and proactive in my tasks.',
        icon: faUserTie
      },
      {
        name: 'Attention to Detail',
        des: 'I always try to be careful with the details, to make the best product possible.',
        icon: faMagnifyingGlass
      }
    ]
  }
])

const reftab = ref(null)
const refDivs = ref([])

// Función para agregar referencias
const addToRefs = (el) => {
  if (el && !refDivs.value.includes(el)) {
    refDivs.value.push(el)
  }
}

// Llamar al hook personalizado al montar el componente
onMounted(() => {
  //   useCustomHook(reftab, refDivs)
})
</script>

<style scoped>
.skills {
  & .title {
    text-align: center;
    font-size: 5vw;
    font-family: 'MuseoModerno', system-ui;
    padding-bottom: 10px;
  }
  & .title-soft {
    padding-top: 50px;
    text-align: center;
    font-size: 5vw;
    font-family: 'MuseoModerno', system-ui;
    padding-bottom: 10px;
  }
  & .des {
    color: #eee9;
    text-wrap: pretty;
    max-width: 500px;
    margin: auto;
    font-size: large;
  }

  & .list {
    margin-top: 50px;
    display: grid;
    grid-template-columns: repeat(auto-fill, 300px);
    justify-content: space-between;
    gap: 3vw;
    position: relative;
    &::before {
      position: absolute;
      content: '';
      width: 70%;
      height: 70%;
      background-image: linear-gradient(-45deg, red, blue);
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: -1;
      border-radius: 20px;
      filter: blur(100px);
      opacity: 0.8;
    }

    & .item {
      backdrop-filter: blur(50px);
      padding: 20px;
      border-radius: 20px;
      background-color: #01082488;

      & .image-container {
        width: 50px;
        height: 50px;
        background-color: #eee2;
        border-radius: 10px;

        & .icon {
          width: 100%;
          height: 100%;
          object-fit: contain;
          /* force icon to be white */
          filter: brightness(0) invert(1);
        }
      }
      & svg {
        font-size: 30px;
        background-color: #eee2;
        padding: 10px;
        border-radius: 10px;
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
  }
}

@media screen and (max-width: 768px) {
  section {
    padding: 20px;
  }
  .skills {
    & .title {
      padding-bottom: 6px;
      font-size: 3em;
      margin-top: 50px;
      text-align: left;
    }
    & .list {
      grid-template-columns: repeat(auto-fill, 200px);
      & .item {
        display: flex;
        flex-direction: column;
        align-items: center;

        & .des {
          text-wrap: pretty;
        }
      }
    }
  }
}
</style>
