<template>
  <div class="flex flex-col items-center mb-4">
    
    <div class="flex">
      <div class="max-h-[24px] flex items-center">
        <InfoMessage class="mr-2" message="The license plate doesn't have to contain dashes(-)." />
      </div>
      <label class="mb-2">Fill in your license plate</label>
    </div>
    
    <div class="flex items-center">
      <img height="52" width="32" alt="license-plate-begin" src="../assets/kenteken-blauw-nl.svg"/>
      <input
        v-model="licensePlate"
        @input="handleInput"
        maxlength="6"
        class="pl-2 font-bold text-xl max-w-[200px] min-h-[52px] border-black rounded-r-2xl bg-yellow-400 uppercase"
        placeholder="XXXXXX"
      />
    </div>

    <p v-if="errorMessage" class="text-red-500 mt-2">{{ errorMessage }}</p>

    <p v-if="loading" class=" mt-2">Loading...</p>

    <div v-if="vehicleInfo && !loading" class="mt-4 text-gray-800">
      <p><strong>Brand:</strong> {{ vehicleInfo.merk }}</p>
      <p><strong>Year:</strong> {{ vehicleInfo.datum_eerste_toelating }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import InfoMessage from './InfoMessage.vue';

const licensePlate = ref('');
const errorMessage = ref('');
const vehicleInfo = ref<{ merk: string; datum_eerste_toelating: string } | null>(null);
const loading = ref(false);

const handleInput = async () => {
  licensePlate.value = licensePlate.value.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();

  if (licensePlate.value.length === 6) {
    await fetchVehicleInfo();
  } else {
    errorMessage.value = '';
    vehicleInfo.value = null;
  }
};

const fetchVehicleInfo = async () => {
  if (errorMessage.value) return;

  loading.value = true;
  const url = `https://opendata.rdw.nl/resource/m9d7-ebf2.json?kenteken=${licensePlate.value}`;
  
  try {
    const response = await axios.get(url);

    if (response.data.length > 0) {
      const data = response.data[0];
      const toelatingsDatum = new Date(data.datum_eerste_toelating_dt)
      const formattedToelatingsDatum = new Intl.DateTimeFormat('en-GB').format(toelatingsDatum);
      vehicleInfo.value = {
        merk: data.merk,
        datum_eerste_toelating: formattedToelatingsDatum
      };
      errorMessage.value = '';
    } else {
      errorMessage.value = 'No vehicle found for this license plate.';
      vehicleInfo.value = null;
    }
  } catch (error) {
    console.error(error);
    errorMessage.value = 'Error fetching vehicle data. Please try again.';
    vehicleInfo.value = null;
  } finally {
    loading.value = false;
  }
};
</script>

