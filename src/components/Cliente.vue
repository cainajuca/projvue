html
<template>
    <!-- classes condicionais aula 13 -->
    <div :class="{'cliente': !isPremium, 'cliente-premium': isPremium}">

        <h4>Nome: {{cliente.nome}}</h4>
        <hr>

        <!-- filtro processarEmail muda somente a exibição da variavel, nao seu conteudo -->
        <p>Email: {{cliente.email | processarEmail}}</p>

        <p v-if="cliente.showAge">Idade: {{cliente.idade}}</p>
        <p v-else>O usuário escondeu a idade.</p>

        <button @click="mudarCor()">Tornar Premium!</button>
        <button @click="emitirEventoDelete">Deletar</button>

        <h4>Id especial: {{idEspecial}}</h4>
    </div>
</template>

javascript
<script>
export default {
    data() {
        return {
            isPremium: false
        }
    },

    props: {
        cliente: Object
    },

    methods: {
        mudarCor: function() {
            this.isPremium = !this.isPremium;
        },

        emitirEventoDelete: function() {
            this.$emit("meDelete", {idCliente: this.cliente.id, component: this});
        },

        testar: function() {
            console.log("É só um teste, boy.");
            alert("Isso é um alert!");
        }
    },

    filters: {
        processarEmail: function(value) {
            return value.toUpperCase();
        }
    },

    computed: {
        idEspecial: function() {
            return (this.cliente.email + this.cliente.nome + this.cliente.id).toUpperCase();
        }
    }

}
</script>

css
<style scoped>
    h2 {
        color: brown;
    }

    h4 {
        margin-top: 2%;
    }
    
    .cliente {
        padding: 2%;
        background-color: #ECE5E3;
        color: blue;
    }

    .cliente-premium {
        padding: 2%;
        background-color: #faf74d;
        color: rgb(1, 1, 7);
    }

</style>
