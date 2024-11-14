<template>
  <div class="flex flex-col items-center mb-4">
    
    <label class="mb-2">Fill in your license plate</label>
    
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

    <p v-if="loading" class="text-blue-500 mt-2">Loading...</p>

    <div v-if="vehicleInfo && !loading" class="mt-4 text-gray-800">
      <p><strong>Brand:</strong> {{ vehicleInfo.merk }}</p>
      <p><strong>Year:</strong> {{ vehicleInfo.datum_eerste_toelating }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';

const licensePlate = ref('');
const errorMessage = ref('');
const vehicleInfo = ref<{ merk: string; datum_eerste_toelating: string } | null>(null);
const loading = ref(false);

const handleInput = async () => {
  licensePlate.value = licensePlate.value.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();

  if (licensePlate.value.length === 6) {
    validateInput();
    await fetchVehicleInfo();
  } else {
    errorMessage.value = '';
    vehicleInfo.value = null;
  }
};

const validateInput = () => {
  if (/^[A-Z0-9]{6}$/.test(licensePlate.value)) {
    errorMessage.value = '';
  } else {
    errorMessage.value = 'Invalid license plate format. Use 6 letters/numbers.';
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
      vehicleInfo.value = {
        merk: data.merk,
        datum_eerste_toelating: data.datum_eerste_toelating
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

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.textDialog {
  opacity: 1;
}
</style>
