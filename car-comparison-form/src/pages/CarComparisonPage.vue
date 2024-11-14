<template>
  <div>
    <HeroComponent></HeroComponent>
    <form @submit.prevent="sendQueryParams">
      <LicensePlateComponent ref="licensePlateComponent"></LicensePlateComponent>
      <input type="submit" value="Submit">
    </form>
  </div>
</template>

<script>
import LicensePlateComponent from '@/components/LicensePlateComponent.vue';
import HeroComponent from '@/components/HeroComponent.vue';

export default {
  components: {
    LicensePlateComponent,
    HeroComponent
  },
  methods: {
    sendQueryParams() {
      const licensePlateComponent = this.$refs.licensePlateComponent;
      const brand = licensePlateComponent?.brand;
      const toelating = licensePlateComponent?.toelating;
      
      if (brand && toelating) {
        console.log('Brand:', brand);
        console.log('First Registration Date:', toelating);
        // You can now push these values into the route query
        // this.$router.push({ query: { brand, toelating } });
      } else {
        console.error('Brand or Toelating is not defined');
      }
    }
  }
}
</script>
