<template>
    <div class="flex items-center">
      <div
        @mouseenter="showTextDialog"
        @mouseleave="showTextDialog"
        @focus="showTextDialog"
        class="rounded-full bg-black h-4 w-4 flex justify-center items-center relative"
        tabindex="0"
        role="button"
        style="cursor: pointer"
      >
        <p class="text-white font-bold">i</p>
  
        <div
          v-show="isDialogVisible"
          class="w-[200px] textDialog absolute bottom-0 left-1/2 transform -translate-x-1/2 mt-2 p-2 bg-gray-800 text-white rounded transition-opacity duration-300"
          tabindex="0"  
          >
          {{ message }}
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from "vue";
  
  export default defineComponent({
    props: {
      message: {
        type: String,
        required: true,
      },
    },
    setup() {
      const isDialogVisible = ref(false);
  
      const showTextDialog = () => {
        isDialogVisible.value = !isDialogVisible.value;
      };
  
      return {
        isDialogVisible,
        showTextDialog,
      };
    },
  });
  </script>
  
  