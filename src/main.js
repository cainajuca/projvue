import Vue from 'vue'
import App from './App.vue'
import "../node_modules/bulma/css/bulma.css"

Vue.config.productionTip = false

/*
Abaixo se cria uma instancia de Vue baseada na App.vue.
App recebe o import de App.vue e é renderizada onde indica o mount
dentro de mount, com o #, informa-se o id da div onde o App sera 
exibido no index.html.
*/
new Vue({
  render: h => h(App),
}).$mount('#app')
