<script >
import Card from './components/Card.vue';
export default {
    components: {
        Card
    }
}
</script>
<template>
    <div class="flex justify-center items-center min-h-screen px-4 py-8 fondo"  style="font-family: 'Times New Roman', Times, serif;">
    <div class="w-full max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl mx-auto transition-all duration-500 ease-in-out">
      <Card />
    </div>
  </div>
</template>
<style scoped>
.fondo {
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('fondoBitcoin2.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
