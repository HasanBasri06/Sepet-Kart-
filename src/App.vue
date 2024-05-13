<script>
import { ref } from 'vue';

  export default {
    setup() {
      const basketCount = ref(1)
      const productPrice = ref(275)
      const totalPrice = ref(productPrice.value)

      const decrementBasketCount = () => {
        basketCount.value--
      }

      const incrementBasketCount = () => {
        if (basketCount.value < 10) {
          basketCount.value++
        }
      }

      const deleteBasketProduct = () => {
        basketCount.value = 0
        totalPrice.value = productPrice.value
      }

      return {
        basketCount,
        decrementBasketCount,
        incrementBasketCount,
        productPrice,
        deleteBasketProduct,
        totalPrice
      }
    },

    watch: {
      basketCount(newCount) {
        if (newCount === 0) {
          alert('ürün silindi')
        }

        if (newCount >= 1) {
          this.totalPrice = this.productPrice * newCount
        }
      }
    }
  }
</script>

<template>
  <div class="basketCard" 
    :class="{
      'opacity-50': basketCount === 0,
      'shadow-md': basketCount !== 0
    }">
    <div class="w-full h-full flex gap-3 items-center">
      <div class="productImage">
        <img src="/src/assets/product1.jpg" class="w-full h-full object-cover rounded-md" />
      </div>
      <div class="productOwner">
        <div>
          <h2 class="text-lg font-semibold leading-tight text-gray-800">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque repellat placeat eius.</h2>
          <div class="mt-3 font-semibold items-center flex gap-3">
            <div class="flex gap-3 items-center">
              <div class="text-xl text-green-500">{{ totalPrice }} ₺</div>
              <div class="text-md text-red-500"><s>{{ totalPrice + 100 }} ₺</s></div>
            </div>
          </div>
        </div>
        <div>
          <div class="flex items-stretch gap-4 mt-5">
            <div class="w-14 h-14 bg-red-400 rounded-full">
              <img src="/src/assets/profile-photo.webp" class="w-full h-full rounded-full object-cover" />
            </div>
            <div class="flex flex-col gap-2">
              <h3 class="text-lg font-semibold">John Doe</h3>
              <div class="flex gap-2">
                <span class="pi pi-star-fill text-yellow-500"></span>
                <span class="pi pi-star-fill text-yellow-500"></span>
                <span class="pi pi-star-fill text-yellow-500"></span>
                <span class="pi pi-star-fill text-yellow-500"></span>
                <span class="pi pi-star text-yellow-500"></span>
              </div>
            </div>
          </div>
          <p class="text-sm text-gray-400 mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A iste sed facere...
          </p>
        </div>
      </div>
    </div>
    <div>
      <div class="productCount">
        <div class="flex flex-col gap-5 justify-center items-center">
          <button @click="incrementBasketCount" class="w-12 h-12 border-gray-300 hover:bg-gray-300 duration-300 text-gray-800 rounded-full font-semibold" :class="{'invisible': basketCount === 10}">
            <span class="pi pi-plus text-md font-semibold"></span>
          </button>
          <div class="text-lg font-semibold text-gray-700">{{ basketCount }}</div>
          <div v-if="basketCount > 1">
            <button @click="decrementBasketCount" class="w-12 h-12 border border-gray-300 hover:bg-gray-300 duration-300 text-gray-800 rounded-full font-semibold">
              <span class="pi pi-minus text-md font-semibold"></span>
            </button>
          </div>
          <div v-else>
            <div @click="deleteBasketProduct" class="hover:bg-red-100 cursor-pointer flex justify-center items-center h-12 w-12 rounded-full" :class="{'invisible': basketCount === 0}">
              <span class="pi pi-trash text-red-500"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>