<template>
  <!-- component -->
  <div class="flex h-screen">
    <div class="flex-1 flex flex-col overflow-hidden">
      <header class="flex justify-between items-center bg-blue-300 p-4">
        <div class="flex">Wellcome to selamat datang</div>
        <div class="flex">                  <nuxt-link :to="{ name: 'index' }">
                    <button @click="removeToken" class="bg-red-500 text-white rounded-md px-4 py-1">
                      Logout
                    </button>
                  </nuxt-link></div>
      </header>
      <div class="flex h-full">
        <nav class="flex w-72 h-full bg-pink-500">
          <div class="w-full flex mx-auto px-6 py-8">
            <div
              class="w-full h-full flex items-center justify-center text-gray-900 text-xl border-4 border-gray-900 border-dashed"
            >
              Sidebar
            </div>
          </div>
        </nav>
        <div
          class="flex flex-col w-full bg-white overflow-x-hidden overflow-y-auto mb-14"
        >
          <div class="flex w-full mx-auto px-6 py-8">
            <div
              class="flex flex-col w-full h-full text-gray-900 text-xl border-gray-900"
            >
              <nuxt />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const removeToken = () => { // export function from module 
  localStorage.removeItem("token");
}
</script>