<template>
  <section class="home" ref="refTab">
    <div class="content">
      <div class="name">
        <span>Aaron</span>
        <br />
        Front-end Developer
      </div>
      <div class="des">
        Passionated about technology 💻, padel lover 🎾, hikker ⛰️ and always learning new things
        🤓.
      </div>
      <a href="/src/assets/cv.pdf" target="_blank" rel="noopener noreferrer"> Download CV </a>
    </div>
    <div class="avatar">
      <div class="card">
        <img src="../assets/avatar.jpg" alt="Aaron Sarmiento" class="background" />
        <img src="../assets/avatar.jpg" alt="Aaron Sarmiento" class="img" />
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
section {
  width: min(1300px, 100%);
  margin: auto;
  padding: 50px;
  box-sizing: border-box;

  &.home {
    padding-top: 150px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 50px;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 120px;

    & .content {
      & .name {
        font-size: 7em;
        font-weight: bold;
        line-height: 1em;

        & span {
          background-image: linear-gradient(
            to right,
            var(--green-color),
            var(--pink-color),
            #7f40ac,
            var(--green-color)
          );
          background-size: 200% auto;
          animation: gradientAnimation 5s linear infinite;
          -webkit-text-fill-color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
        }
      }

      & .des {
        color: #eee9;
        margin: 30px 0;
        border-left: 0.35em solid var(--pink-color);
        padding-left: 2em;
        font-size: large;
      }

      & a {
        color: #eee;
        text-decoration: none;
        font-size: large;
        font-weight: bold;
        border: 1px solid #eee;
        padding: 20px 30px;
        border-radius: 40px;
        margin-top: 30px;
        display: block;
        cursor: pointer;
        width: max-content;
        position: relative;
      }

      a::before {
        content: '';
        position: absolute;
        top: 0;
        left: 50%; /* Alinear desde el centro */
        width: 0;
        height: 100%;
        background-color: #fff; /* Color del fondo */
        transform: translateX(-50%);
        transition:
          width 0.3s ease,
          background-color 0.3s ease,
          z-index 0.1s ease,
          border-radius 0.3s ease,
          color 0.3s ease;
        z-index: -1; /* Asegura que esté detrás del texto */
        border-radius: 40px;
        color: #000;
      }

      /* Estilo al hacer hover en el enlace */
      a:hover::before {
        width: 100%;
      }

      a:hover {
        color: #010824;
        cursor: pointer;
      }
    }

    & .avatar {
      text-align: right;
      height: min(700px, 50vh);

      & .card {
        display: inline-flex;
        flex-direction: column;
        width: min(100%, 400px);
        height: min(100%, 400px);
        /* box-shadow: 0 150px 150px #e945e333; */
        transition: 0.5s;
        position: relative;

        & .img {
          width: 100%;
          height: min(700px, 50vh);
          object-fit: cover;
          clip-path: polygon(
            76% 0,
            88% 13%,
            100% 26%,
            100% 69%,
            100% 100%,
            75% 100%,
            19% 100%,
            0 100%,
            0% 35%,
            0 0
          );
          aspect-ratio: 2/1;
          object-position: -144px -29px;
        }
        & .background {
          position: absolute;
          filter: blur(140px);
          width: 100%;
          height: 100%;
          inset: 0;
          object-fit: cover;
        }

        & .info {
          background-color: #eee;
          padding: 20px;
          color: #010824;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          text-align: center;
          gap: 20px;
          font-size: 1.2em;
          & div:nth-child(-n + 3) {
            font-weight: bold;
          }
        }
      }
    }
  }
}
@keyframes gradientAnimation {
  to {
    background-position: 200% center;
  }
}
@media screen and (min-width: 770px) {
  .home {
    & .content {
      & .name {
        font-size: 5em;
      }
      & a {
        margin: auto;
        font-size: medium;
      }
    }

    & .avatar {
      & .card {
        & img {
          object-position: -30px 0px;
        }
      }
    }
  }
}
@media screen and (min-width: 309px) and (max-width: 768px) {
  .home {
    gap: 0px;
    & .content {
      & .name {
        font-size: 5em;
      }
      & a {
        margin: auto;
        font-size: medium;
      }
    }

    & .avatar {
      & .card {
        & img {
          object-position: -110px 0px !important;
        }
      }
    }
  }
}

@media screen and (max-width: 930px) {
  section {
    padding: 20px;
    &.home {
      grid-template-columns: 1fr;
      padding-top: 70px;
      gap: 0px;
      & .content {
        & .name {
          font-size: 3em;
        }
        & a {
          margin: auto;
          font-size: medium;
        }
      }
      & .avatar {
        grid-row-start: 1;
        text-align: left;

        & .card {
          & img {
            object-position: -144px -29px;
          }
        }
      }
    }
  }
}
</style>
