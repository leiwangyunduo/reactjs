<template>
  <div id="app">
    <m-header></m-header>
    <router-view/>
    <foo></foo>
  </div>
</template>

<script type="text/ecmascript-6">
import MHeader  from './components/m-header/m-header'
import Footer  from './components/footer/foo'
export default {
  name: 'App',
  components:{
    Footer,
    MHeader
  }
}
</script>


<style>

</style>
