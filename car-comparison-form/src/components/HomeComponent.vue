<template>
    <div class="grid justify-center mb-4">
      <div class="grid justify-center mb-4">
        <div class="flex items-center">
          <InfoMessage class="mr-2" message="Zipcode needs to be in this format: 4 digits followed by 2 uppercase letters (1234AB)" />
          <label for="zipcode-input">Zipcode:</label>
        </div>
        <input 
          id="zipcode-input"
          v-model="zipcode"
          pattern="^\d{4}[A-Z]{2}$" 
          maxlength="6"
          required
          class="border border-black rounded p-2"
          placeholder="1234AB"
        />
      </div>
      <div class="grid justify-center">
        <label for="house-number">House number:</label>
        <input
          id="house-number"
          v-model="houseNumber"
          type="number"
          required
          class="border border-black rounded p-2"
        />
      </div>
      <div class="grid justify-center">
        <label for="house-addition">House number addition:</label>
        <input
          id="house-addition"
          v-model="houseAddition"
          pattern="[A-Za-z0-9]*" 
          class="border border-black rounded p-2"
        />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, defineExpose } from 'vue';
  import InfoMessage from './InfoMessage.vue';
  
  const zipcode = ref('');
  const houseNumber = ref('');
  const houseAddition = ref('');
  
  defineExpose({
    zipcode,
    houseNumber,
    houseAddition
  });
  </script>
  