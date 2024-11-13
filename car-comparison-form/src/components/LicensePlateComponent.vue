<template>
    <div class="flex justify-center mb-2">
        <label>Fill in your licenseplate</label>
        <div @mouseenter="showInformation" class="informationWrapper rounded-full bg-black text-white w-5 h-5 ml-3 flex justify-center items-center">
            <p class="font-bold ">i</p>
        </div>
        <div className="hidden w-[200px] textDialog absolute bottom-0 left-1/2 transform -translate-x-1/2 mt-2 p-2 text-sm bg-gray-800 text-white rounded-md transition-opacity duration-300">
            Het wachtwoord moet minimaal 1 cijfer en 1 speciaal karakter bevatten
        </div>
    </div>
    <div class="flex justify-center">
        <img src="../assets/kenteken-blauw-nl.svg">
        <input class="pl-2 border-black rounded-r-2xl bg-yellow-400">
    </div>
</template>

<script setup>
    const showInformation = () =>{
        console.log("test")
    }
</script>