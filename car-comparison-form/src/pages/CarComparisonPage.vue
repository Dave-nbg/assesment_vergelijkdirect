<template>
  <div>
    <HeroComponent></HeroComponent>
    <LicensePlateComponent></LicensePlateComponent>
  </div>
</template>

<script>
import LicensePlateComponent from '@/components/LicensePlateComponent.vue';
import HeroComponent from '@/components/HeroComponent.vue';

export default {
  components: {
    LicensePlateComponent,
    HeroComponent
  }
}
</script>

