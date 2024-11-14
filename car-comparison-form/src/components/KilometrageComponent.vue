<template>
    <div class="grid justify-center mb-4">
        <label for="kilometrage">Select your Kilometrage:</label>
        <select id="kilometrage" class="border border-black rounded p-2">
            <option value="0-7500">0 t/m 7500 KM</option>
            <option value="7501-10000" selected>7501 t/m 10000 KM</option>
            <option value="10001-12000">10001 t/m 12000 KM</option>
            <option value="12001-15000">12001 t/m 15000 KM</option>
            <option value="15001-20000">15001 t/m 20000 KM</option>
            <option value="20001-25000">20001 t/m 25000 KM</option>
            <option value="25001-30000">25001 t/m 30000 KM</option>
            <option value="30001-90000">30001 t/m 90000 KM</option>
        </select>
      </div>
</template>