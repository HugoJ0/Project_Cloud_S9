import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store, key } from './store'
import { FontAwesomeIcon  } from './lib/fontAwesome'

const app = createApp(App)
app.use(router)
    .use(store, key)
    .component('FontAwesomeIcon', FontAwesomeIcon)
    .mount('#app')
    
