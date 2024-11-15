<template>
  <header>
    <nav>
      <ul>
        <div>
          <div class="scrabble">
            <div class="img img-b"></div>
            <div class="img img-g"></div>
          </div>
          <NuxtLink to="/"> <div class="img img-container"></div></NuxtLink>
          <div class="navigation">
            <li><NuxtLink to="/">Accueil</NuxtLink></li>
            <li><NuxtLink to="/services">Infos</NuxtLink></li>
            <li><NuxtLink to="/services">Se déplacer</NuxtLink></li>
            <li><NuxtLink to="/accomodations">Se loger</NuxtLink></li>
            <li><NuxtLink to="/about">Photos</NuxtLink></li>
            <li><NuxtLink to="/contact">Cadeaux</NuxtLink></li>
          </div>
        </div>
        <div class="countdown">
          <span> J - {{ daysUntilDate }} </span>
        </div>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      targetDate: new Date("2025-07-19"),
    };
  },
  computed: {
    daysUntilDate() {
      const today = new Date();
      const timeDifference = this.targetDate - today;
      const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
      return daysDifference;
    },
  },
};
</script>

<style scoped>
header {
  display: none;
  background-color: #fff;
  color: #1b1b1b;
  padding: 8px;
  border-bottom: 1px solid #1b1b1b;
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
nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  gap: 64px;
  height: 80px;
  font-family: "Montserrat";
  justify-content: space-between;
  & > div {
    display: flex;
    flex-direction: row;
  }
  .navigation {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 48px;
    text-decoration: none;
    a {
      padding: 16px;
      border-radius: 6px;
      color: #1b1b1b;
      text-decoration: none;
      font-weight: 600;
      &:hover {
        text-decoration: none;
        background-color: #f5f7f9;
      }
    }
  }
}

nav ul li {
  display: inline;
}

.countdown {
  display: flex;
  align-items: center;
  font-weight: 600;
  font-family: "Montserrat";
  margin-right: 128px;
  & > span {
    display: flex;
    background-color: #d6a784;
    border-radius: 6px;
    padding: 16px;
    align-items: center;
  }
  color: white;
}

nav ul li a:hover {
  text-decoration: underline;
}
</style>
