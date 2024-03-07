<template>
    <section class="hidden">
        <div class="bg--black">
            <div class="client container">
                <div class="client__header">
                    <div class="client__title">
                        <h1>WHAT OUR CLIENTS SAY</h1>
                    </div>
                    <div class="client__description">
                        TESTIMONIALS
                    </div>
                </div>
            </div>
        </div>
        <div class="bg--white client2" style="height: 200px;">
            <div class="container">
                <div class="page-direction2">
                    <div class="img-direction" @click="prevSlide">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="48" height="48" rx="24" fill="#FF564F" />
                        </svg>
                        <div class="arrow-left"></div>
                    </div>
                    <div class="img-direction" @click="nextSlide">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="48" height="48" rx="24" fill="#FF564F" />
                        </svg>
                        <div class="arrow-right"></div>
                    </div>

                </div>
                <div class="client__content">
                    <swiper ref="carouselClient" style="width: 100%" v-bind="settings" :slider-per-view="1"
                        :space-between="30" :slidesPerGroupSkip="1" :modules="modules" @swiper="onSwiper" :speed="500"
                        :loop="true">
                        <swiper-slide class="client__block item">
                            <div class="client__ava">
                                <img src="@/assets/img/client1.png" alt="">
                            </div>
                            <div class="client__info">
                                <div class="client__name">HELENA BRAUER</div>
                                <div class="client__workat">Apple Inc.</div>
                            </div>
                            <p class="client__comment">
                                What looked like a small patch of purple grass, above five feet square,
                                was moving across the sand in their direction. When it came near enough he
                                perceived that it was not grass; there were no blades, but only purple roots.
                                The roots were revolving, for each small plant in the whole patch, like the spokes
                                of a rimless wheel.
                            </p>
                        </swiper-slide>
                        <swiper-slide class="client__block item purplebg">
                            <div class="client__ava">
                                <img src="@/assets/img/client2.png" alt="">
                            </div>
                            <div class="client__info">
                                <div class="client__name">KAY TOTLEBEN</div>
                                <div class="client__workat">Microsoft</div>
                            </div>
                            <p class="client__comment">
                                What looked like a small patch of purple grass, above five feet square,
                                was moving across the sand in their direction. When it came near enough he
                                perceived that it was not grass; there were no blades, but only purple roots.
                                The roots were revolving, for each small plant in the whole patch, like the spokes
                                of a rimless wheel.
                            </p>
                        </swiper-slide>
                        <swiper-slide class="client__block item">
                            <div class="client__ava">
                                <img src="@/assets/img/client1.png" alt="">
                            </div>
                            <div class="client__info">
                                <div class="client__name">321HELENA BRAUER</div>
                                <div class="client__workat">Apple Inc.</div>
                            </div>
                            <p class="client__comment">
                                What looked like a small patch of purple grass, above five feet square,
                                was moving across the sand in their direction. When it came near enough he
                                perceived that it was not grass; there were no blades, but only purple roots.
                                The roots were revolving, for each small plant in the whole patch, like the spokes
                                of a rimless wheel.
                            </p>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>

        <div class="line--black3"></div>
    </section>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';



// Import Swiper styles
import 'swiper/css';

export default {
    setup() {
        return {
            modules: [Autoplay],
        };
    },
    components: {
        Swiper,
        SwiperSlide,

    },
    data: () => ({
        swiper: null
    }),
    mounted() {
        // Đoạn mã JavaScript để thêm CSS khi trang web đã xuất hiện
    },
    methods: {
        onSwiper(swiper) {
            this.swiper = swiper;
        },
        nextSlide() {
            this.swiper.slideNext()
        },
        prevSlide() {
            this.swiper.slidePrev()


        }
    }
}
</script>

<style>
.client__block {
    max-width: unset;
    margin-left: unset !important;
}

.swiper-slide {
    display: grid;
}
</style>