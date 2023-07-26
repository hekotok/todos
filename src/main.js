import { createApp } from 'vue'

import router from '@/router/router'
import store from '@/store'
import components from "@/components/ReusableComponents"

import App from "@/App"

const app = createApp(App)

components.forEach(component => app.component(component.name, component))
app.use(router).use(store).mount('#app')