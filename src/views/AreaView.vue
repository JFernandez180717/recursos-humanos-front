<script setup>
import { ref, onMounted, toRef } from 'vue';

let areas = ref();

fetch('http://localhost:8080/api/area/all')
.then((response) => response.json())
.then((json) => {
    areas.value = json;
});
</script>

<template>
    <div class="container mt-5">
        <table class="table">
            <thead class="table__head">
                <tr>
                    <th class="ps-4" scope="col">Id</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Editar</th>
                    <th scope="col">Eliminar</th>
                </tr>
            </thead>
            <tbody class="table-group-divider">
                <tr v-for="area in areas" :key="area.idArea">
                    <th class="tbody__td ps-4" scope="row">{{ area.idArea }}</th>
                    <td class="tbody__td">{{ area.descripcion }}</td>
                    <td class="tbody__td">{{ area.estado ? 'Activo' : 'Inactivo' }}</td>
                    <td class="tbody__td tbody-editar">
                        <RouterLink class="btn-editar" :to="`/areas/editar/${area.idArea}`">
                            <i class="edit fa-solid fa-pen"></i>
                        </RouterLink>
                    </td>
                    <td class="tbody__td">
                        <RouterLink class="btn-editar" :to="`/areas/editar/${area.idArea}`">
                            <i class="trash fa-solid fa-trash-can"> </i>
                        </RouterLink>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
.table {
    box-shadow: 2px 2px 2px 2px rgb(231, 231, 231);
}

.table__head > tr > th{
    background-color: var(--bs-primary);
    color: white;
}

.tbody__td {
    color: var(--bs-primary);
    font-weight: 600;
}

.table-group-divider {
    color: white;
}

.edit {
    font-size: 1.3rem;
    padding-top: 0.7rem;
    text-align: center;
    color: white;
    border-radius: 0.4rem;
    width: 2.5rem;
    height: 2.5rem;
    background-color: var(--bs-warning);
}

.trash {
    font-size: 1.3rem;
    padding-top: 0.7rem;
    text-align: center;
    color: white;
    border-radius: 0.4rem;
    width: 2.5rem;
    height: 2.5rem;
    background-color: var(--bs-danger);
}
</style>