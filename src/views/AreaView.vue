<script setup>

</script>

<template>
    <div class="container mt-5">
        <table class="table">
            <thead class="table__head">
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Descripción</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Editar</th>
                    <th scope="col">Eliminar</th>
                </tr>
            </thead>
            <tbody class="table-group-divider">
                <tr>
                    <th class="tbody__td" scope="row">1</th>
                    <td class="tbody__td">Mark</td>
                    <td class="tbody__td">Otto</td>
                    <td class="tbody__td tbody-editar">
                        <RouterLink class="btn-editar" to="/editar">
                            <i class="edit fa-solid fa-pen"></i>
                        </RouterLink>
                    </td>
                    <td class="tbody__td">
                        <RouterLink class="btn-editar" to="/editar">
                            <i class="trash fa-solid fa-trash-can"></i>
                        </RouterLink>
                    </td>
                </tr>
                <tr>
                    <th class="tbody__td" scope="row">2</th>
                    <td class="tbody__td">Jacob</td>
                    <td class="tbody__td">Thornton</td>
                    <td class="tbody__td tbody-editar">
                        <RouterLink class="btn-editar" to="/editar">
                            <i class="edit fa-solid fa-pen"></i>
                        </RouterLink>
                    </td>
                    <td class="tbody__td">
                        <RouterLink class="btn-editar" to="/editar">
                            <i class="trash fa-solid fa-trash-can"></i>
                        </RouterLink>
                    </td>
                </tr>
                <tr>
                    <th class="tbody__td" scope="row">3</th>
                    <td class="tbody__td">Larry the Bird</td>
                    <td class="tbody__td">Activo</td>
                    <td class="tbody__td">
                        <RouterLink class="btn-editar" to="/editar">
                            <i class="edit fa-solid fa-pen"></i>
                        </RouterLink>
                    </td>
                    <td class="tbody__td">
                        <RouterLink class="btn-editar" to="/editar">
                            <i class="trash fa-solid fa-trash-can"></i>
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