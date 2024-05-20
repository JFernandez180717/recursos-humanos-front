<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="header">
    <!--img alt="Vue logo" class="header__logo" src="@/assets/logo.svg" width="125" height="125" /-->
    <div class="header__logo">
        <i class="fa-solid fa-building-user"></i>
    </div>

    <div class="header__wrapper">

      <nav class="header__nav">
        <RouterLink to="/">Inicio</RouterLink>
        <RouterLink to="/about">Acerca de</RouterLink>
      </nav>

    </div>
  </header>

  <RouterView />
</template>

<style scoped>
.header{
    width: 100%;
    height: 3rem;
    border: 1px solid black;
    display: flex;
    justify-content: flex-start;
}

.header__logo {
    display: flex;
    align-items: end;
    justify-content: center;
    width: 3rem;
    height: 3rem;
}

.header__logo > .fa-solid {
    font-size: 2rem;
    padding-bottom: 0.3rem;
}

.header__wrapper{
    width: 100%;
    height: 100%;
}

.header__nav{
    display: flex;
    height: 100%;
    align-items: end;
    border: 1px solid red;
    padding-left: 1rem;
    gap: 1.5rem;
    font-size: 1rem;
    font-weight: bold;
}

/*header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 1.2rem;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}*/

/*@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}*/
</style>
