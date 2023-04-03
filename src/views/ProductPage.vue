<template>
  <div class="product">
    <div class="product-image">
      <img v-bind:src="productImage" class="main-photo" :alt="alt" />
      <div class="alternative-product-images">
        <div class="images" v-for="(img,  index) in images" :key="index">
          <img @click="changeImage(index)" :src="img" alt="">
        </div>
      </div>
    </div>
    <div class="product-info">
      <h4>Designed by Michael Scott</h4>
      <h1>{{ title }}</h1>
      <p class="price">{{ price }}</p>
      <p class="description">{{ description_long }}</p>
      <p class="details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, nulla cupiditate? Nihil, optio mollitia! Ipsum quaerat ab amet odio qui, vel earum voluptate modi. Voluptatem, nobis rerum quae, exercitationem dolore tempora numquam ullam soluta asperiores repudiandae cum aut quasi quidem?</p>
      <div class="color">
        <h4>Color</h4>
        <select>
          <option value="teal">Teal</option>
          <option value="darkblue">Dark Blue</option>
          <option value="green">Green</option>
        </select>
      </div>
      <div class="quantity">
        <h4>Quantity</h4>
        <div>
          <button @click="changeQuantity(-1)">-</button>
          <input @change="changeQuantity(0)" ref="quantity" type="text" disabled value="1" />
          <button @click="changeQuantity(1)">+</button>
        </div>
      </div>
      <div class="add">
        <button class="add-to-cart" disabled>Currently sold out!</button>
        <p class="add-info">Receive it in 2-5 working days! Promised!</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

useRouter()
let productImage = ref('https://i.pinimg.com/originals/d6/7c/8a/d67c8af477d5441574144c3e506ee350.png')
const alt = 'Lamp white'
const title = 'Lysø Lamp'
const description_long = 'Bright Lamps designed by Michael Scott in 2018 as his daughter Josephine was born. Lorem ipsum dolor sit!'
const price = '$700 USD'
const quantity = ref('')

const images = ['https://i.pinimg.com/originals/d6/7c/8a/d67c8af477d5441574144c3e506ee350.png', 'https://images.unsplash.com/photo-1475783006851-1d68dd683eff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80', 'https://images.unsplash.com/photo-1551380701-5dd33d5b5d06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGxhbXB8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1517991104123-1d56a6e81ed9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', 'https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80']
let currentImage = 0

const changeQuantity = (num) => {
  try {
    parseInt(quantity.value.value)
  } catch (error) {
    quantity.value.value = 1
  }

  if (quantity.value.value <= 1 && num <= 0) {
    quantity.value.value = 1
  } else {
    quantity.value.value = parseInt(quantity.value.value) + num
  }
}

const changeImage = (index) => {
  if (index != currentImage) {
    currentImage = index
    productImage.value = images[currentImage]
  }
}

</script>

<style lang="scss">
  input[type=number]::-webkit-inner-spin-button, 
  input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    margin: 0; 
  }

  .product {
    display: flex;
    border: 1px solid #000;
    max-width: 1500px;
    height: calc(80vh - 121px);
    margin: 0 auto;

    div:not(.color, .quantity, .images, .alternative-product-images) {
      flex-basis: 50%;
      padding: 20px 50px;
    }

    .product-image {
      padding-top: 0;
      border-right: 1px solid #000;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;

      img.main-photo {
        position: absolute;
        top: 10%;
        width: 60%;
        height: 60%;
        object-fit: cover;
      }

      .alternative-product-images {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        bottom: 0;
        left: 0;

        .images {
          width: 150px;
          height: 150px;
          border-top: 1px solid #000;
          border-right: 1px solid #000;
          cursor: pointer;

          &:last-child {
            border-right: 1px solid var(--primary-color);
          }

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }
    }

    .product-info {
      position: relative;

      .color {
        margin-bottom: 20px;

        p {
          margin-right: 10px;
        }

        select {
          padding: 10px;
          border: 1px solid teal;
          background-color: teal;
          color: #fff;
          font-size: 16px;
          cursor: pointer;
        }
      }

      .price {
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 20px;
      }

      .description {
        font-size: 16px;
        margin-bottom: 20px;
      }

      .details {
        font-size: 14px;
        margin-bottom: 20px;
      }

      .quantity {
        
        div {
          padding: 8px 20px;
          width: fit-content;
          background-color: var(--secondary-color);
        }

        button {
          background-color: transparent;
          border: 0;
          padding: 0;
          color: #fff;
          font-size: 20px;
        }

        input {
          width: 40px;
          text-align: center;
          border: 0;
          background-color: transparent;
          color: #fff;
          font-size: 16px;
        }
      }

      .add {
        position: absolute;
        bottom: 0;
        left: 0;

        .add-info {
          font-size: 14px;
          margin-top: 10px;
          margin-bottom: 20px;
          color: #000;
        }
      }

      .add-to-cart {
        background-color: var(--secondary-color);
        filter: grayscale(1);
        color: #fff;
        border: 0;
        padding: 10px 20px;
        font-size: 16px;
        font-weight: 700;
        margin-top: 20px;
        cursor: pointer;
        transition: all 0.2s ease-in-out;

        &:hover {
          background-color: var(--secondary-color);
        }
      }
    }
  }
</style>