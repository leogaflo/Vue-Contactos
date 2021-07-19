import { createStore } from 'vuex'

export default createStore({
  state: {
    personas: '',
    contactos: [{
      nombre: 'Leonardo',
      numero: '8097754574',
      correo: 'leogaflofa.com'
    }]
  },
  mutations: {
    agregar (state) {
      state.contactos.push(state.personas)
    },
    eliminar (state, index) {
      state.contactos.pop()
    },
    editar (state, index) {
      state.contactos.shift()
    }
  },
  actions: {
    addPerson (context) {
      context.commit('agregar')
    },
    edithPerson (context) {
      context.commit('editar')
    },
    deletePerson (context) {
      context.commit('eliminar')
    }
  },
  modules: {
  }
}
)
