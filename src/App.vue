<template>
  <IntroAdvantage />
  <!-- Feature -->
  <OurFeature class="view" />
  <!-- Project -->
  <OurProject class="view" />
  <!-- Client Comment -->
  <ClientComment class="view" />
  <!-- Logo -->
  <LogoBrand class="view" />
  <!-- Blog -->
  <OurBlog class="view" />
  <!-- Footer -->
  <FooterProject class="view" />
</template>

<script>
import IntroAdvantage from './components/IntroAdvantage.vue';
import OurFeature from './components/OurFeature.vue';
import OurProject from './components/OurProject.vue';
import ClientComment from './components/ClientComment.vue';
import LogoBrand from './components/LogoBrand.vue';
import OurBlog from './components/OurBlog.vue';
import FooterProject from './components/FooterProject.vue';
export default {
  name: 'App',
  components: {
    IntroAdvantage,
    OurFeature,
    OurProject,
    ClientComment,
    LogoBrand,
    OurBlog,
    FooterProject,
  },
  methods: {

  }
}


</script>

<style>
.v-lazy-component.v-lazy-component--loading {
  filter: blur(20px);
}

.v-lazy-component.v-lazy-component--loaded {
  filter: blur(0);
  transition: filter 2s;
}
</style>
