<template>
<el-container direction="vertical">
  <!-- Header -->
  <wear-header />

  <!-- Page's main content -->
  <el-main>
    <!-- Carousel -->
    <wear-carousel :items="carouselData"/>
    <!-- Other images -->
    <el-container direction="vertical" style="height:unset; padding: 0 5% 0 5% !important">
      <h1 class="homepage-header">Most Popular</h1>
      <wear-list :items="popularItems" />
    </el-container>
  </el-main>

  <!-- Footer -->
  <wear-footer />
</el-container>
</template>

<script>
import WearHeader from '../../components/Header'
import WearFooter from '../../components/Footer'
import WearList from '../../components/List'
import WearCarousel from '../../components/Carousel'

export default {
  name: 'app',
  data () {
    return {
      carouselData: getCarouselData()['data'], // Defined in public/js/model.js
      popularItems: getPopularItems()['data'], // Defined in public/js/model.js
    }
  },
  components: {
    'wear-header': WearHeader,
    'wear-footer': WearFooter,
    'wear-list': WearList,
    'wear-carousel': WearCarousel
  }
}
</script>

<style>
.el-header {
  box-sizing: content-box;
  padding: 0px;
}

.el-main {
  height: auto;
  overflow: initial;
  padding: 0 !important
}

.el-footer {
  box-sizing: content-box;
  padding: 0px;
}

.homepage-header {
  width: 100%;
  text-align: left;
}
</style>
