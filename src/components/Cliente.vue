parece que oq fica fora dos escopos nao interefe em nada - vira comentario

html
<template>
    <!-- um componente so pode ter uma tag raiz -->
    <div id="cliente">
        <h2>Cliente aqui!</h2>
        <h3>Descrição do cliente: bla bla bla</h3>
        <hr>
    </div>
</template>

javascript
<script>
export default {
    
}
</script>

css
<style scoped>
    h2 {
        color: brown;
    }
    
    #cliente {
        color: blue;
    }
</style>