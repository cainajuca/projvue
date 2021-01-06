<template>
  <div id="app">
    <h1>Guia Clientes</h1>
    <Cliente/>
    <Produto/>
    <Cliente/>
    <Produto/>
    <Cliente/>
    <Produto/>
  </div>
</template>

<script>
  import Cliente from './components/Cliente'
  import Produto from './components/Produto'
export default {
  name: 'App',
  components: {
    Cliente,
    Produto
  }
}
</script>

<style>
  h1 {
    height: 30px;
    color: crimson;
  }
</style>
