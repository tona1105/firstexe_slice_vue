
import './assets/css/main.css';
import './assets/css/responsive.css';
import { createApp } from 'vue';
import App from './App.vue';
import LazyComponent from 'v-lazy-component'



const app = createApp(App);


app.use(LazyComponent)
app.mount('#app');
const view = document.querySelectorAll('.view');
let isScrolling = false;

function handleScroll() {
    if (!isScrolling) {
        window.requestAnimationFrame(function () {
            for (let i = 0; i < view.length; i++) {
                if (isTopPartInViewport(view[i])) {
                    view[i].classList.add('fadeTop');
                }
            }
            isScrolling = false;
        });

        isScrolling = true;
    }
}

function isTopPartInViewport(el) {
    var rect = el.getBoundingClientRect();
    // Adjust the threshold to 20% from the top
    return (
        rect.top >= 0 &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 &&
        rect.left >= 0 &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

document.addEventListener('scroll', handleScroll);