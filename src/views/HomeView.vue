<template>
  <div class="hero">
    <h1>FEEL SCANDINAVIA, FEEL LYSØ</h1>
    <p>Transform your home into the perfect place to relax, unwind and recharge</p>
    <button>SOLD OUT!</button>
  </div>

  <div class="new-in">
    <h2>New In</h2>
    <div class="products">
      <div class="row">
        <ProductCard :productUrl="'/lysolamp'" productImage="https://i.pinimg.com/originals/d6/7c/8a/d67c8af477d5441574144c3e506ee350.png" alt="Lamp white" title="Lysø Lamp" description="Bright Lamps designed by Michael Scott" price="$700 USD"/>
        <ProductCard :productUrl="'/lysolamp'" productImage="https://i.pinimg.com/originals/d6/7c/8a/d67c8af477d5441574144c3e506ee350.png" alt="Lamp white" title="Lysø Lamp" description="Bright Lamps designed by Michael Scott" price="$700 USD"/>
        <ProductCard :productUrl="'/lysolamp'" productImage="https://i.pinimg.com/originals/d6/7c/8a/d67c8af477d5441574144c3e506ee350.png" alt="Lamp white" title="Lysø Lamp" description="Bright Lamps designed by Michael Scott" price="$700 USD"/>
        <ProductCard :productUrl="'/lysolamp'" productImage="https://i.pinimg.com/originals/d6/7c/8a/d67c8af477d5441574144c3e506ee350.png" alt="Lamp white" title="Lysø Lamp" description="Bright Lamps designed by Michael Scott" price="$700 USD"/>
      </div>  
      <div class="left-image-right-products">
        <div class="new-image">
          <h2>New In</h2>
        </div>
        <div class="quadrett">
          <ProductCard :productUrl="'/lysolamp'" productImage="https://i.pinimg.com/originals/d6/7c/8a/d67c8af477d5441574144c3e506ee350.png" alt="Lamp white" title="Lysø Lamp" description="Bright Lamps designed by Michael Scott" price="$700 USD"/>
          <ProductCard :productUrl="'/lysolamp'" productImage="https://i.pinimg.com/originals/d6/7c/8a/d67c8af477d5441574144c3e506ee350.png" alt="Lamp white" title="Lysø Lamp" description="Bright Lamps designed by Michael Scott" price="$700 USD"/>
          <ProductCard :productUrl="'/lysolamp'" productImage="https://i.pinimg.com/originals/d6/7c/8a/d67c8af477d5441574144c3e506ee350.png" alt="Lamp white" title="Lysø Lamp" description="Bright Lamps designed by Michael Scott" price="$700 USD"/>
          <ProductCard :productUrl="'/lysolamp'" productImage="https://i.pinimg.com/originals/d6/7c/8a/d67c8af477d5441574144c3e506ee350.png" alt="Lamp white" title="Lysø Lamp" description="Bright Lamps designed by Michael Scott" price="$700 USD"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import ProductCard from '../components/ProductCard.vue'
</script>

<style lang="scss">
  .new-in {
    h2 {
      font-size: 40px;
      letter-spacing: -3px;
      font-weight: 700;
      text-transform: uppercase;
      margin: 20px 0;
      text-align: center;
    }

    .products {
      max-width: 1200px;
      margin: 0 auto;

      .row {
        display: flex;
        justify-content: center;

        .product-card:not(:last-child) {
          border-right: 1px solid var(--primary-color);
        }
      }

      .left-image-right-products {
        display: flex;

        .product-card {
          border-left: 1px solid #000;
          border-right: 1px solid var(--primary-color);
          border-top: 0;

          &:nth-child(2n - 1) {
            border-left: 1px solid #000;
          }

          &:nth-child(2n) {
            border-right: 1px solid #000;
          }
        }

        .new-image {
          padding: 15px;
          border: 35px solid var(--primary-color);
          background-image: url('https://images.unsplash.com/photo-1512418408532-5445158b1445?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80');
          background-position: center;
          background-size: 80% 80%;
          background-color: var(--primary-color);
          background-repeat: no-repeat;
          width: 50%;
          color: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid #000;
          border-width: 0px 0px 1px 1px;
        }

        .quadrett {
          display: flex;
          flex-wrap: wrap;
          width: 50%;
        }
      }
    }
  }

  .hero {
    background-color: rgba(0, 0, 0, 0.25);
    background-image: url('https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80');
    background-size: cover;
    background-position: center;
    background-blend-mode: multiply;
    background-size: cover;

    height: 80vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--primary-color);
    text-transform: uppercase;
    letter-spacing: 2px;
    line-height: 1.5;
    padding: 0 20px;

    h1 {
      font-size: 80px;
      font-weight: 700;
      margin-bottom: 10px;
    }

    button {
      background-color: var(--secondary-color);
      color: var(--primary-color);
      border: none;
      border-radius: 5px;
      padding: 10px 20px;
      font-size: 16px;
      font-weight: 700;
      margin-top: 20px;
      cursor: pointer;
      transition: all 0.3s ease-in-out;

      &:hover {
        color: #fff;
        background-color: #000;
      }
    }
  }
</style>