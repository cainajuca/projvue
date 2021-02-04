// para botar o servidor online: yarn run serve
// video-aulas em
// Curso de Vue JS
// Victor Lima - Guia do Programador
// Cainã da Costa Jucá

<template>
  <div id="app">

    <h3>Cadastro:</h3>

    <small id="nomeErro" v-show="erroValidacao">O nome é inválido. Tente novamente.</small> <br>

    <input type="text" placeholder="nome" v-model="nomeField"> <br>
    <input type="email" placeholder="email" v-model="emailField"> <br>
    <input type="number" placeholder="idade" v-model="idadeField">

    <button @click="cadastrarUsuario">Cadastrar</button>

    <hr>

    <div v-for="(cliente, index) in orderClientes" :key="cliente.id">

      <h4>cliente {{index+1}}</h4>
      <Cliente :cliente="cliente" @meDelete="deletarUsuario($event)"/>
      <hr>

    </div>

  </div>
</template>

<script>
  import _ from 'lodash'; // para usar orderBy
  import Cliente from './components/Cliente'
  
export default {
  name: 'App',

  data() {
    return {

      erroValidacao: false,

      nomeField: "",
      emailField: "",
      idadeField: "",

      clientes: [
        {
          id: 1,
          nome: "Cainã 1",
          email: "c1costa@gmail.com",
          idade: 23,
          showAge: false
        },
        {
          id: 2,
          nome: "Cainã 2",
          email: "c2costa@gmail.com",
          idade: 32,
          showAge: true
        }
      ]
    }
  },

  components: {
    Cliente
  },

  methods: {
    cadastrarUsuario: function() {

      if(this.nomeField == "" || this.nomeField.length < 3) {
        this.erroValidacao = true;
      } else {
        this.erroValidacao = false;
        this.clientes.push({nome: this.nomeField, email: this.emailField, idade: this.idadeField, id: Date.now()})  
      }
      
      this.nomeField = "";
      this.emailField = "";
      this.idadeField = "";
    },
    
    isBigEnough: function(value) {
      return value >= 10;
    },


    deletarUsuario: function($event) {
      var id = $event.idCliente;

      // remover elemento do arrray pelo id
      this.clientes = this.clientes.filter(cliente => cliente.id != id);
    }
  },

  computed: {
    orderClientes: function() {
      return _.orderBy(this.clientes,['nome'],['asc']);
    }
  }
}
</script>

<style>
  h1 {
    height: 30px;
    color: crimson;
  }

  #nomeErro {
    color: red;
  }
</style>
