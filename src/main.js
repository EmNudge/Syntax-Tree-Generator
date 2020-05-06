import App from './App.svelte';
import { setFromStorage } from './utils/storage';
setFromStorage();

const app = new App({
	target: document.body
});

export default app;