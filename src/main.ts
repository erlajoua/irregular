import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { createPinia } from 'pinia';
import App from './App.vue'
import router from './router'

import en from './i18n/en.json'
import fr from './i18n/fr.json'

import './assets/main.css'

const i18n = createI18n({
	locale: 'en',
	fallbackLocale: 'en',
	legacy: false,
	messages: {
	  en,
	  fr
	}
});

const app = createApp(App);
const pinia = createPinia();

app.use(router)
app.use(i18n)
app.use(pinia)

app.mount('#app');