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
            <!-- <li><NuxtLink to="/photos">Photos</NuxtLink></li> -->
            <li><NuxtLink to="/gift">Liste de Mariage</NuxtLink></li>
          </div>
        </div>
        <div class="countdown" v-if="daysUntilDate > 0">
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
      <div class="overlay" @click="closeMenu" v-if="openMenu"></div>

      <div v-if="openMenu" class="mobile-menu">
        <div class="scrabble scrabble--mobile">
          <div class="img img-b"></div>
          <div class="img img-g"></div>
        </div>
        <ul>
          <li><NuxtLink to="/" @click="closeMenu">Accueil</NuxtLink></li>
          <li><NuxtLink to="/infos" @click="closeMenu">Infos</NuxtLink></li>
          <li>
            <NuxtLink to="/moving" @click="closeMenu">Se déplacer</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/accomodations" @click="closeMenu">Se loger</NuxtLink>
          </li>
          <!-- <li><NuxtLink to="/photos" @click="closeMenu">Photos</NuxtLink></li> -->
          <li>
            <NuxtLink to="/gift" @click="closeMenu">Liste de Mariage</NuxtLink>
          </li>
          <div class="mobile-countdown" v-if="daysUntilDate > 0">
            <span> J - {{ daysUntilDate }} </span>
          </div>
        </ul>
        <NuxtLink to="/"> <div class="mobile-img img img-container"></div></NuxtLink>
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
      return this.windowWidth > 1380;
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
  z-index: 1;
}
.img-container {
  background-image: url("../assets/images/logo.png"); /* Path to your image */
  width: 200px;
  height: 65px;
  margin: 0 80px;
}
.mobile-img {
  margin: 0;
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
  &--mobile {
    right: 12px;
    top: 12px;
  }
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
    font-family: "Dancing Script", cursive;
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

.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 66vw;
  height: calc(100vh - 50px);
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  z-index: 1000;
  padding-top: 50px;
}
.mobile-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
}
.mobile-menu li {
  margin: 12px 0;
}
.mobile-menu a {
  color: black;
  font-size: 16px;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
  padding: 12px 0 12px 24px;
  display: block;
  width: calc(100% - 24px);
}
.mobile-menu li:hover {
  background-color: #d6a78422;
}

.navigation__container li {
  display: inline;
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: block;
}
.mobile-countdown {
  margin-left: 24px;
  margin-top: 24px;
}
.mobile-countdown,
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
