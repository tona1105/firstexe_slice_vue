import { ref, createApp } from 'vue';

const app = createApp({});
const eventBus = ref(app);

export default eventBus;