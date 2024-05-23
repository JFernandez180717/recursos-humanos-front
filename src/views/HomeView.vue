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
                Areas
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
    background-color: white;
    font-weight: bold;
    color: var(--bs-primary);
    transition: all 300ms linear;
    text-align: center;
}

.link:hover {
    background-color: var(--bs-primary);
    color: white;
}

.container-main {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 400px;
}
</style>    