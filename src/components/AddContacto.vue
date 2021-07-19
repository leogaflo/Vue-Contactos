<template>
     <form class="border rounded shadow mt-5 p-4" >
        <div class="text-center">
        <h3>Nuevo contacto</h3>
        </div>
        <div class="form-group">
        <label for="nombre" class="form-label fw-bold mt-2">Nombre</label>
        <input type="text" id="nombre" v-model="persona.nombre" class="form-control" placeholder="Ej: Juana">
        </div>
        <div class="form-group">
        <label for="numero" class="form-label fw-bold mt-3">Numero </label>
        <input type="text" id="numero" v-model="persona.numero" class="form-control" placeholder="Ej: (809)-3763-094">
        </div>
        <div class="form-group">
        <label for="correo" class="form-label fw-bold mt-3">Correo</label>
        <input type="text" id="correo" v-model="persona.correo" class="form-control" placeholder="Ej: you@mail.com">
        </div>
        <button class="btn btn-danger mt-3" @click.self="agregarPersona" type="button">Añadir</button>
    </form>
</template>
<script>
export default {
  name: 'AddContactos',
  data () {
    return {
      persona: {
        nombre: '',
        numero: '',
        correo: ''
      }
    }
  },
  computed: {
  },
  methods: {
    agregarPersona () {
      this.$store.state.personas = this.persona
      this.$store.dispatch('addPerson')
    },
    editarPersona () {
      this.$store.state.personas = this.persona
      this.$store.dispatch('edithPerson')
    }

  }

}
</script>
