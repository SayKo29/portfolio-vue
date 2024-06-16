<template>
  <section class="projects" ref="refTab">
    <div class="title" ref="addToRefs">My projects</div>
    <div class="des" ref="addToRefs">
      Below I show you both professional and personal projects with a brief explanation of the
      technologies used and my contribution.
    </div>
    <div class="list" ref="addToRefs">
      <div
        class="item"
        v-for="(item, index) in listProjects"
        :key="index"
        @click="openProject(item)"
      >
        <div class="images">
          <img :src="item.images" alt="" />
        </div>
        <div class="content">
          <h3>{{ item.name }}</h3>
          <div class="des">{{ item.des }}</div>
          <div class="mission">
            <div>
              <font-awesome-icon :icon="faPersonCircleQuestion" />
            </div>
            <div>
              <h4>Mission</h4>
              <div class="de">{{ item.mission }}</div>
            </div>
          </div>
          <div class="mission">
            <div>
              <font-awesome-icon :icon="faCode" />
            </div>
            <div>
              <h4>Languages</h4>
              <div class="de">{{ item.language }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPersonCircleQuestion, faCode } from '@fortawesome/free-solid-svg-icons'
import AnimationDiv from '@/components/AnimationDiv.js'

const listProjects = ref([
  {
    name: 'Andy',
    des: "Andy is a digital assistant on food safety, it streamlines employees' daily tasks by automating the labeling of products with their expiration dates, it also has a team chat, tasks, audits and records, all configurable in real time with a control panel",
    mission:
      'Take all the designs and turn them into pixel perfect code, create the entire front-end, make it responsive for tablet and mobile devices and integrate it with the back-end',
    language: 'VueJS, JavaScript, CodeIgniter, Cordova, MySQL, PHP and MongoDB',
    images: '/src/assets/andy.png',
    link: 'https://andyapp.io/'
  },
  {
    name: 'GLUP!',
    des: 'GLUP! Is an app created for both Android and iOS, with more than 500 downloads and 22k visits on Tik Tok. It is an online card game based on humor. Use Socket.io for real-time online communication',
    mission:
      'The idea of this project was to start learning React Native, it started for fun and ended up being a FullStack App with which I could have a laugh with my friends and family',
    language: 'React native,TypeScript, Socket.io, Redux, NodeJS, MongoDB',
    images: '/src/assets/glup.png',
    link: 'https://apps.apple.com/mx/app/glup/id6447231979'
  }
])

const openProject = (project) => {
  window.open(project.link, '_blank')
}
const reftab = ref(null)
const refDivs = ref([])

const addToRefs = (el) => {
  if (el && !refDivs.value.includes(el)) {
    refDivs.value.push(el)
  }
}

onMounted(() => {
  AnimationDiv(reftab, refDivs)
})
</script>

<style scoped>
.projects {
  & .title {
    font-size: 5vw;
    text-align: center;
    font-family: 'MuseoModerno', system-ui;
    margin-top: 100px;
    padding-bottom: 10px;
  }
  & .des {
    color: #eee9;
    width: 100%;
    text-wrap: pretty;
    max-width: 500px;
    font-size: large;
    margin: auto;
  }
  & .list {
    margin-top: 50px;

    & .item {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      justify-content: space-between;
      gap: 20px;
      margin-bottom: 20px;
      align-items: center;
      cursor: pointer;

      & .images {
        background-image: linear-gradient(-45deg, #473bb4, #be24a9);
        padding: 40px;
        text-align: center;
        border-radius: 20px;
        overflow: hidden;

        & img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 10px;
          box-shadow: 0 20px 40px #010824;
        }
      }
      & .content {
        & h3 {
          font-size: 3em;
          margin: 0;
        }
        & .des {
          text-align: left;
          width: 100%;
          margin: 0;
        }
        & .mission {
          padding-top: 10px;
          display: grid;
          grid-template-columns: 70px 1fr;
          align-items: center;
          gap: 10px;
          margin-top: 10px;
          & div:nth-child(1) svg {
            background-color: #eee3;
            padding: 20px;
            font-size: 20px;
            border-radius: 15px;
          }

          & h4 {
            margin: 0;
            margin-bottom: 4px;
          }
        }
      }
      &:nth-child(2n) {
        & .images {
          background-image: linear-gradient(-45deg, #be24a9, #473bb4);
          grid-column-start: 2;
          grid-row-start: 1;
        }
        & .content {
          grid-column-start: 1;
          grid-row-start: 1;
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  section {
    padding: 20px;
  }
  .projects {
    & .title {
      padding-bottom: 6px;
      font-size: 3em;
      margin-top: 50px;
      text-align: left;
    }
    .des {
      margin: unset;
    }
    & .list {
      & .item {
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding-bottom: 80px;
        & .images {
          & img {
            height: 245px;
          }
        }
        & .content {
          padding-bottom: 6px;
          & h3 {
            font-size: 2em;
            padding-bottom: 6px;
          }
        }
      }
      & .item:nth-child(2n) {
        padding-bottom: 10px;
      }
    }
  }
}
</style>
