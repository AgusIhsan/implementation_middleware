<template>
<div>
    <main class="flex flex-col w-full bg-white overflow-x-hidden overflow-y-auto">
        <div class="flex w-full mx-auto px-6 py-8">
          <div class="flex flex-col w-full h-full text-gray-900 text-xl border-4 border-gray-900 border-dashed">
            <button @click="getAllProduct">hit me</button>
            <button @click="tambah">next</button>
            <button @click="kurang">prev</button>
            <div v-for="item in dataBarang" :key="item.id">
              <h1>{{ item.namaBarang }}</h1>
            </div>
            <div class="flex w-full max-w-xl h-60 items-center justify-center mx-auto bg-green-400 border-b border-gray-600">Post</div>
            <div class="flex w-full max-w-xl h-60 items-center justify-center mx-auto bg-green-400 border-b border-gray-600">Post</div>
            <div class="flex w-full max-w-xl h-60 items-center justify-center mx-auto bg-green-400 border-b border-gray-600">Post</div>
            <div class="flex w-full max-w-xl h-60 items-center justify-center mx-auto bg-green-400 border-b border-gray-600">Post</div>
          </div>
        </div>
      </main>
</div>
</template>

<script>

export default {
    name : 'konten',
    layout : 'dashboard',
    middleware :'Auth',
    data(){
      return{
        dataBarang :[],
        limit  : 5,
        offset : 0
      }
    },
    methods :{
      async getAllProduct(){
        const response = await this.$axios.get(`http://159.223.57.121:8090/barang/find-all?limit=${this.limit}&offset=${this.offset}`)
        this.dataBarang = response.data.data
      },
      async tambah (){
        this.offset = this.offset +=1
        await this.getAllProduct()
      },
      async kurang(){
      if(this.offset === 0){
        return this.offset = 0
      }
        this.offset = this.offset -=1
        await this.getAllProduct()
      },
    }, 
    mounted(){
      this.getAllProduct()
    } 
}

</script>