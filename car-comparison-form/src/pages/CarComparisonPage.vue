<template>
  <div>
    <HeroComponent></HeroComponent>
    <form @submit.prevent="sendQueryParams">
      <LicensePlateComponent ref="licensePlateComponent"></LicensePlateComponent>
      <HomeComponent ref="homeComponent"></HomeComponent>
      <KilometrageComponent ref="kilometrageComponent"></KilometrageComponent>
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
      const kilometrageComponent = this.$refs.kilometrageComponent;
      const homeComponent = this.$refs.homeComponent;

      const brand = licensePlateComponent?.brand;
      const toelating = licensePlateComponent?.toelating;
      const zipcode = homeComponent?.zipcode;
      const houseNumber = homeComponent?.houseNumber;
      const houseAddition = homeComponent?.houseAddition;
      const kilometrage = kilometrageComponent?.selectedOption;

      if (brand && toelating && kilometrage && zipcode && houseNumber) {
        const url = new URL(window.location);
        url.searchParams.set('brand', brand);
        url.searchParams.set('toelating', toelating);
        url.searchParams.set('zipcode', zipcode);  
        url.searchParams.set('houseNumber', houseNumber);  
        if (houseAddition) {
          url.searchParams.set('houseAddition', houseAddition);  
        }
        url.searchParams.set('kilometrage', kilometrage);  

        window.history.pushState({}, '', url);
      } else {
        console.error('Brand, Toelating, Zipcode, House Number, or Kilometrage is not defined');
      }
    }
  }
}
</script>
