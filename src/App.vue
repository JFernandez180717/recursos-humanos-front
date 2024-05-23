<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <header>

        <nav class="navbar bg-primary">
            <div class="navbar__container">
                <div class="container-fluid">
                    <RouterLink to="/">
                        <i class="fa-solid fa-building-user logo"></i> 
                    </RouterLink>
                    <RouterLink class="navbar__texto" to="/">
                        <span>Recursos Humanos APP</span>
                    </RouterLink>
                </div>
            </div>
        </nav>

    </header>

    <RouterView />

    <footer class="fixed-bottom">
        Todos los derechos reservados NyC &copy;
    </footer>
</template>

<style scoped>
header {
    width: 100%;
}

.navbar__container {
    display: flex;
    justify-content: space-between;
}

.container-fluid {
    justify-content: flex-start;
}

.navbar__texto {
    font-weight: bold;
    text-decoration: none;
    color: white;
    font-size: 1.2rem;
}

.navbar__texto > span {
    padding-left: 1rem;
}

.navbar__about {
    color: white;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.2rem;
    border: 1px solid white;
}

.logo {
    font-size: 2rem;
    color: white;
}

footer {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4rem;
    background-color: #f0f0f0;
}
</style>
