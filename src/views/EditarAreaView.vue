<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const idAreaParam = route.params.idArea;

let area = ref();
const idArea = ref();
buscarArea();
async function buscarArea() {
    await fetch(`http://localhost:8080/api/area/idarea/${idAreaParam}`)
    .then((response) => response.json())
    .then((json) => {
        console.log(json.idArea);
        idArea.value = json.idArea;
        area.value = json
    });
}

console.log(area)
console.log(area.value)
console.log(area.descripcion)
console.log(idArea.value);
</script>
<template>
    <div class="container">
        <div class="container title">
            <h2>Editar área</h2>
        </div>
        <form method="post" action="localhost:8080/api/area/editar">
            <div class="row mb-3">
                <div class="col-3">
                    <label for="idArea" class="form-label">Id Área:</label>
                    <input type="number" class="form-control" id="idArea" name="idArea" disabled v-model="area.idArea">
                </div>
                <div class="col-9">
                    <label for="descripcion" class="form-label">Descripción:</label>
                    <input type="text" class="form-control" id="descripcion" name="descripcion" v-model="area.descripcion">
                </div>
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="estado" name="estado" v-model="area.estado">
                <label class="form-check-label" for="estado">Activo</label>
            </div>
            <div class="btn-container">
                <button type="submit" class="btn btn-primary btn-save">Guardar <i class="fa-solid fa-floppy-disk"></i></button>
                <RouterLink class="btn-cancel" to="/areas">Cancelar <i class="fa-solid fa-circle-arrow-left"></i></RouterLink>
            </div>
        </form>
    </div>
</template>

<style scoped>
.title {
    width: 100%;
    margin-top: 2.0rem;
    margin-bottom: 2.0rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--bs-primary);
}

.btn-container {
    width: 100%;
    margin-top: 2.0rem;
    margin-bottom: 2.0rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
}

.btn-container > button {
    width: 200px;
    height: 40px;
    padding-bottom: 2.2rem;
    font-weight: 600;
    font-size: 1.2rem;
}

h2 {
    font-weight: bold;
}

.btn-save {
    transition: all 300ms linear;
}

.btn-save:hover {
    background-color: white;
    color: var(--bs-primary);
    border: 1px solid var(--bs-primary);
}

.btn-cancel {
    text-decoration: none;
    background-color: var(--bs-danger);
    color: white;
    height: 100%;
    padding: 0.4rem 3rem 0.5rem 3rem;
    border-radius: 8px;
    font-weight: 600;
    font-size: 1.2rem;
    transition: all 300ms linear;
}

.btn-cancel:hover {    
    background-color: white;
    color: var(--bs-danger);
    border: 1px solid var(--bs-danger);
    padding: 0.3rem 3rem 0.4rem 2.9rem;
}
</style>