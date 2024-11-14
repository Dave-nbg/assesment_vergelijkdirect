<template>
  <div>
    <HeroComponent></HeroComponent>
    <form @submit.prevent="sendQueryParams">
      <LicensePlateComponent ref="licensePlateComponent"></LicensePlateComponent>
      <HomeComponent></HomeComponent>
      <KilometrageComponent></KilometrageComponent>
      <div class="flex justify-center">
        <input class="bg-blue-500 hover:bg-blue-600 focus:bg-blue-800 font-bold text-white rounded px-8 py-3" type="submit" value="Submit">
      </div>
    </form>
  </div>
</template>

<script>
import LicensePlateComponent from '@/components/LicensePlateComponent.vue';
import HeroComponent from '@/components/HeroComponent.vue';
import HomeComponent from '@/components/HomeComponent.vue';
import KilometrageComponent from '@/components/KilometrageComponent.vue';

export default {
  components: {
    LicensePlateComponent,
    HeroComponent,
    HomeComponent,
    KilometrageComponent
  },
  methods: {
    sendQueryParams() {
      const licensePlateComponent = this.$refs.licensePlateComponent;
      const brand = licensePlateComponent?.brand;
      const toelating = licensePlateComponent?.toelating;

      if (brand && toelating) {

        const url = new URL(window.location);
        url.searchParams.set('brand', brand);
        url.searchParams.set('toelating', toelating);

        window.history.pushState({}, '', url);

      } else {
        console.error('Brand or Toelating is not defined');
      }
    }
  }
}
</script>
