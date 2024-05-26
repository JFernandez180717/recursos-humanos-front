<script setup>
</script>

<template>
    <main>
        <div class="container container-main">
            <RouterLink class="p-5 me-3 link border border-primary-subtle rounded-3" to="/empleados">
                empleados
            </RouterLink>
            <RouterLink class="p-5 me-3 link border border-primary-subtle rounded-3" to="/cargos">
                Cargos
            </RouterLink>
            <RouterLink class="p-5 me-3 link border border-primary-subtle rounded-3" to="/areas">
                Áreas
            </RouterLink>
            <RouterLink class="p-5 me-3 link border border-primary-subtle rounded-3" to="/about">
                Acerca de
            </RouterLink>
        </div>
    </main>
</template>

<style scoped>
.link {
    width: 20rem;
    text-decoration: none;
    background-color: var(--bs-primary);
    font-weight: bold;
    color: white;
    transition: all 300ms linear;
    text-align: center;
}

.link:hover {
    background-color: white;
    color: var(--bs-primary);
}

.container-main {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 400px;
}
</style>    