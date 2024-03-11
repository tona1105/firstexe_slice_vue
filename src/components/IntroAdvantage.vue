<template>
    <!-- Header + Intro -->
    <section class="bg--black ">
        <nav>
            <div class="container">
                <div class="nav">
                    <div class="nav__title">
                        <a href="#">AGENCY</a>
                    </div>
                    <div class="nav__menu">
                        <span>About</span>
                        <a href="#portfolio"><span>Portfolio</span></a>
                        <a href="#contact"> <span>Contact</span></a>
                    </div>
                    <div class="nav__menu--mobile">
                        <span class="menu__icon" @click="openNavBar">
                            <img src="@/assets/img/menu.png" alt="">
                        </span>
                        <div class="menu__list" :class="{ 'show': toggleNavBar }">
                            <img id="close-menu" src="@/assets/img/x.png" alt="" style="padding: 0px 35px;"
                                @click="closeNavBar">
                            <span>About</span>
                            <a href="#portfolio"><span>Portfolio</span></a>
                            <a href="#contact"> <span>Contact</span></a>
                        </div>

                    </div>
                </div>
            </div>
        </nav>
        <carousel ref="carouselHeader" class="intro container" v-bind="settings" :transition="1000">
            <slide class="introduce item carousel__item">
                <div class="introduce__content">
                    <h1 class="introduce__title">WE CREATE AMAZING SITES WITH EASE</h1>
                    <div class="introduce__imgdes">
                        <div class="introduce__logo">
                            <img src="@/assets/img/Object.png" alt="">
                        </div>
                        <span class="introduce__description">A PEEP AT SOME DISTANT ORB HAS POWER TO RAISE AND
                            PURIFY</span>
                    </div>
                </div>
                <div class="introduce__img">
                    <div class="introduce__img--main">
                        <img src="@/assets/img/Bitmap.png" alt="">
                    </div>
                    <div class="introduce__img--doc">
                        <img src="@/assets/img/combined-shape.png" alt="">
                    </div>
                </div>

            </slide>
            <slide class="introduce item carousel__item"
                style="position: relative !important; width: 1170px; background-color: #111111;">
                <div class="introduce__content">
                    <h1 class="introduce__title">WE CREATE AMAZING SITES WITH EASE</h1>
                    <div class="introduce__imgdes">
                        <div class="introduce__logo">
                            <img src="@/assets/img/Object.png" alt="">
                        </div>
                        <span class="introduce__description">A PEEP AT SOME DISTANT ORB HAS POWER TO RAISE AND
                            PURIFY</span>
                    </div>
                </div>
                <div class="introduce__img">
                    <div class="introduce__img--main main2">
                        <img src="@/assets/img/open-doodles-meditating-min.png" alt="">
                    </div>
                    <div class="introduce__img--doc">
                        <img src="@/assets/img/combined-shape.png" alt="">
                    </div>
                </div>
            </slide>
        </carousel>
    </section>
    <!-- Advantage -->
    <section class="bg--white">
        <div class="container">
            <div class="page-direction1">
                <div class="img-direction" :class="{ 'disabled': isButtonDisabled }" @click="prevSlide">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="48" height="48" rx="24" fill="#FF564F" />
                    </svg>
                    <div class="arrow-left"></div>
                </div>
                <div class="img-direction" :class="{ 'disabled': isButtonDisabled }" @click="nextSlide">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="48" height="48" rx="24" fill="#FF564F" />
                    </svg>
                    <div class="arrow-right"></div>
                </div>
                <div class="page"><span class="current-page">{{ currentSlide }}</span> / <span class="total-page">{{
                            totalSlide }}</span></div>
            </div>
            <div class="line--black"></div>
            <div class="advantage ">
                <div class="advantage__img">
                    <div class="advantage__img--girl" @click="openYoutube"
                        :style="{ display: clickOpenYoutube ? 'none' : 'block' }">
                        <img src="@/assets/img/girl.png" alt="">
                        <div class="play--img">
                            <img src="@/assets/img/play.png" alt="">
                        </div>
                    </div>
                    <div class="advantage__youtube" v-html="htmlContent"
                        :style="{ display: clickOpenYoutube ? 'block' : 'none' }">

                    </div>
                </div>
                <div class="advantage__content">
                    <div class="advantage__title">
                        <h1>LETS TAKE ADVANTAGE</h1>
                    </div>
                    <div class="advantage__slogan">
                        SABLE CLOUD BENEATH WAS DISHED
                    </div>
                    <div class="advantage__description">
                        Best for active freelancers and designers who need more
                        projects and premium features code and unlock more.
                    </div>
                    <div class="advantage__button">
                        <div class="advantage__button--pink">
                            LEARN MORE
                        </div>
                        <div class="advantage__button--default">
                            Explore services
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script>

import { Carousel, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'
import { ref } from 'vue'

export default {
    setup() {

        let clickOpenYoutube = ref(false)
        let htmlContent = ref('')
        const openYoutube = () => {
            console.log("Hello");
            clickOpenYoutube.value = true
            addLinkYoutobe()
        }
        const addLinkYoutobe = () => {
            htmlContent.value = '<iframe width="92%" height="100%" src="https://www.youtube.com/embed/mzqvF_rIOx8?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
        }
        let toggleNavBar = ref(false)
        const openNavBar = () => {
            toggleNavBar.value = true
        }
        const closeNavBar = () => {
            toggleNavBar.value = false
            console.log(toggleNavBar.value);
        }
        return { clickOpenYoutube, htmlContent, openYoutube, addLinkYoutobe, toggleNavBar, openNavBar, closeNavBar }
    },
    components: {
        Carousel,
        Slide
    },
    data: () => ({
        settings: {
            itemToShow: 1,
            snapAlign: 'center',
            wrapAround: true

        },
        currentSlide: 1,
        totalSlide: 2,
        isButtonDisabled: false

    }),
    methods: {
        nextSlide() {
            this.isButtonDisabled = true;
            setTimeout(() => {
                this.isButtonDisabled = false;
            }, 1000)
            this.$refs.carouselHeader.next()
            if (this.currentSlide !== this.totalSlide) {
                this.currentSlide++
            }
            else {
                this.currentSlide = 1
            }


        },
        prevSlide() {
            this.$refs.carouselHeader.prev()
            if (this.currentSlide !== 1) {
                this.currentSlide--
            }
            else this.currentSlide = this.totalSlide
            // Disable the button
            this.isButtonDisabled = true;

            // Enable the button after 1000 milliseconds (1 second)
            setTimeout(() => {
                this.isButtonDisabled = false;
            }, 1000)
        }

    }

};
</script>

<style>
.carousel__item {
    opacity: 0;
}

.carousel__item.carousel__slide--active {
    opacity: 1;
}

.intro>.carousel__viewport {
    width: 1170px;
    overflow: unset !important;
}

.intro>.carousel__viewport>.carousel__track>.carousel__slide {
    width: 100% !important;
}

.disabled {
    opacity: 1;
    pointer-events: none;
}
</style>