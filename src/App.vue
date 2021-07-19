<template>
  <div class="container-fluid">
  <div class="row mx-4">
  <div class="col-md-4 col-sm-3"><AddContacto></AddContacto></div>
  <div class="col-md-8"><Home></Home></div>
  </div>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import AddContacto from './components/AddContacto.vue'

export default {
  name: 'App',
  components: {
    Home,
    AddContacto

  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
