<template>
  <div class="container">
    <h2>Agenda de Contactos</h2>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">No.</th>
      <th scope="col">Nombre</th>
      <th scope="col">Numero</th>
      <th scope="col">Correo</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr  v-for="(item, index) in contactos"
        v-bind:key="index">
      <td scope="row">{{index}}</td>
      <td>{{item.nombre}}</td>
      <td>{{item.numero}}</td>
      <td>{{item.correo}}</td>
      <td>
         <button class="btn btn-warning"  @click="editar">Editar</button>
         <button class="btn btn-danger mx-3" @click="eliminar">Eliminar</button>
      </td>
    </tr>
  </tbody>
</table>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapState(['contactos'])
  }
}
</script>
