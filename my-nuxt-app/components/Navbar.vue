<template>
  <div class="navigation">
    <nav>
      <div v-if="!mobileMode" class="navigation--container">
        <div>
          <div class="scrabble" v-if="largeDesktop">
            <div class="img img-b"></div>
            <div class="img img-g"></div>
          </div>
          <NuxtLink to="/" v-if="largeDesktop">
            <div class="img img-container"></div
          ></NuxtLink>
          <div class="navigation__elements">
            <li><NuxtLink to="/">Accueil</NuxtLink></li>
            <li><NuxtLink to="/infos">Infos</NuxtLink></li>
            <li><NuxtLink to="/moving">Se déplacer</NuxtLink></li>
            <li><NuxtLink to="/accomodations">Se loger</NuxtLink></li>
            <li><NuxtLink to="/photos">Photos</NuxtLink></li>
            <li><NuxtLink to="/gift">Cadeaux</NuxtLink></li>
          </div>
        </div>
        <div class="countdown">
          <span> J - {{ daysUntilDate }} </span>
        </div>
      </div>
      <div v-else class="navigation--mobile">
        <div class="burger-menu" @click="toggleMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <!-- <NuxtLink to="/"> <div class="img img-container"></div></NuxtLink> -->
      </div>
      <div v-if="openMenu" class="fullscreen-menu">
        <ul>
          <li><NuxtLink to="/" @click="closeMenu">Accueil</NuxtLink></li>
          <li><NuxtLink to="/infos" @click="closeMenu">Infos</NuxtLink></li>
          <li>
            <NuxtLink to="/moving" @click="closeMenu">Se déplacer</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/accomodations" @click="closeMenu">Se loger</NuxtLink>
          </li>
          <li><NuxtLink to="/photos" @click="closeMenu">Photos</NuxtLink></li>
          <li><NuxtLink to="/gift" @click="closeMenu">Cadeaux</NuxtLink></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      targetDate: new Date("2025-07-19"),
      windowWidth: null,
      openMenu: false,
    };
  },
  computed: {
    daysUntilDate() {
      const today = new Date();
      const timeDifference = this.targetDate - today;
      const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
      return daysDifference;
    },
    largeDesktop() {
      return this.windowWidth > 1200;
    },
    mediumDesktop() {
      return !this.largeDesktop && this.windowWidth > 800;
    },
    mobileMode() {
      return this.windowWidth <= 800;
    },
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth;
      if (this.mobileMode) {
        this.closeMenu();
      }
    },
    toggleMenu() {
      this.openMenu = !this.openMenu;
    },
    closeMenu() {
      this.openMenu = false;
    },
  },
};
</script>

<style scoped lang="scss">
.navigation {
  background-color: #fff;
  color: #1b1b1b;
  padding: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
}
.img-container {
  background-image: url("../assets/images/logo.png"); /* Path to your image */
  width: 200px;
  height: 65px;
  margin: 0 80px;
}
.img {
  background-size: cover; /* Cover the entire area */
  background-position: center; /* Center the image */
  display: flex; /* Flexbox for centering content */
  flex-direction: column; /* Stack content vertically */
  justify-content: center; /* Center vertically */
  align-items: center; /* Center horizontally */
  color: white; /* Text color */
  text-align: center; /* Center text */
}
.scrabble {
  position: absolute;
  display: flex;
  flex-direction: row;
}
.img-g {
  background-image: url("../assets/images/G.png"); /* Path to your image */
  width: 40px;
  height: 40px;
}
.img-b {
  background-image: url("../assets/images/B.png"); /* Path to your image */
  width: 40px;
  height: 40px;
}
.navigation {
  &--container {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    gap: 64px;
    height: 80px;
    font-family: "Great Vibes", sans-serif;
    font-size: 24px;
    justify-content: space-between;

    overflow: hidden;
    & > div {
      display: flex;
      flex-direction: row;
    }
  }

  &__elements {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 48px;
    text-decoration: none;
    a {
      padding: 12px;
      border-radius: 6px;
      color: #1b1b1b;
      text-decoration: none;
      font-weight: 600;
      white-space: nowrap;
      &:hover {
        text-decoration: none;
        background-color: #f5f7f9;
      }
    }
  }
  &--mobile {
    height: 33px;
    display: flex;
    flex-direction: row;

    .burger-menu {
      display: flex;
      flex-direction: column;
      gap: 6px;
      border: none;
      background: none;
      cursor: pointer;
      padding: 10px;
      z-index: 1100;
      span {
        width: 30px;
        height: 2px;
        background-color: #1b1b1b;
        border-radius: 2px;
      }
    }
  }
}

.fullscreen-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #d6a784;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 1000;
}
.fullscreen-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: center;
}
.fullscreen-menu li {
  margin: 20px 0;
}
.fullscreen-menu a {
  color: white;
  font-size: 24px;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s;
}
.fullscreen-menu a:hover {
  color: #d6a78422;
}

.navigation__container li {
  display: inline;
}

.countdown {
  display: flex;
  align-items: center;
  font-weight: 600;
  font-family: "Montserrat";
  margin-right: 128px;
  & > span {
    white-space: nowrap;

    display: flex;
    background-color: #d6a784;
    border-radius: 6px;
    padding: 16px;
    align-items: center;
  }
  color: white;
}

.navigation__container li a:hover {
  text-decoration: underline;
}
</style>
