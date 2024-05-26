<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const idAreaParam = route.params.idArea;

let area = ref();
fetch(`http://localhost:8080/api/area/idarea/${idAreaParam}`)
.then((response) => response.json())
.then((json) => area.value = json);

console.log(area)
</script>
<template>
    hola editar {{ idAreaParam }} descripcion: {{ area.descripcion }}  estado: {{ area.estado }}
</template>