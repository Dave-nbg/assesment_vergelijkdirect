<template>
    <div class="grid justify-center mb-4">
      <label>Birthday:</label>
      <input 
        type="date" 
        class="border border-black rounded p-2"
        @change="handleDateChange"
      >
      <p v-if="errorMessage" class="text-red-500">{{ errorMessage }}</p>
  
      <div v-if="freeYearsOptions.length > 0" class="grid justify-center mt-4">
        <label>Claim Free Years:</label>
        <select v-model="selectedYears" class="border border-black rounded p-2">
          <option 
            v-for="year in freeYearsOptions" 
            :key="year" 
            :value="year"
          >
            {{ year }}
          </option>
        </select>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const errorMessage = ref<string | null>(null);
  const freeYearsOptions = ref<number[]>([]);
  const selectedYears = ref<number>(0);
  
  const handleDateChange = (event: Event) => {
    const currDate: Date = new Date();
    const birthday: Date = new Date((event.target as HTMLInputElement).value);
  
    const minDate = new Date();
    minDate.setFullYear(currDate.getFullYear() - 18);
  
    const maxDate = new Date();
    maxDate.setFullYear(currDate.getFullYear() - 100);
  
    if (birthday >= minDate || birthday <= maxDate) {
      (event.target as HTMLInputElement).value = "";
      errorMessage.value = "Date must be between 18 and 100 years old.";
      freeYearsOptions.value = [];
      return;
    } else {
      errorMessage.value = null;
    }
  
    const birthYear = birthday.getFullYear();
    const maxFreeYears = (currDate.getFullYear() - birthYear) - 18;
  
    freeYearsOptions.value = Array.from({ length: maxFreeYears + 1 }, (_, i) => i - 5);
  
    if (freeYearsOptions.value.includes(0)) {
      selectedYears.value = 0;
    }
  };
  </script>
  

  