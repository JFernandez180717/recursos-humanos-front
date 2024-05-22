<script setup>
</script>

<template>
    <main>
        <div class="container container-main">
            <RouterLink class="link" to="/empleados">
                empleados
            </RouterLink>
            <RouterLink class="link" to="/cargos">
                Cargos
            </RouterLink>
            <RouterLink class="link" to="/areas">
                Areas
            </RouterLink>
            <RouterLink class="link" to="/about">
                Acerca de
            </RouterLink>
        </div>
    </main>
</template>

<style scoped>
.link {
    text-decoration: none;
}

.container-main {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>    