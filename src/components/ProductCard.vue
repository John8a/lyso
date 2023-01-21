<template>
    <div class="product-card" @click="openProductPage(productUrl)">
        <div class="add-to-card">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
        </div>
        <img :src="productImage" :alt="alt">
        <div class="description">
            <h2>{{ title }}</h2>
            <p>{{ description }}</p>
            <div class="price">
                <h3>{{ price }}</h3>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.product-card {
    min-width: 300px;
    height: 400px;
    position: relative;
    border: 1px solid #000;

    .add-to-card {
        position: absolute;
        top: 10px;
        right: 10px;
        padding: 5px;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        border-radius: 50%;
        height: 30px;
        width: 30px;

        svg {
            height: 100%;
            width: auto;
        }

        &:hover {
            background-color: var(--secondary-color);
            color: var(--primary-color);
        }
    }

    img {
        width: 100%;
        height: 280px;
        object-fit: cover;
        border-radius: 10px 10px 0 0;
    }

    .description {
        padding: 10px;

        h2 {
            font-size: 20px;
            font-weight: 700;
            margin-bottom: 5px;
            text-align: left;
        }

        p {
            font-size: 14px;
            margin-bottom: 5px;
        }

        .price {
            display: flex;
            justify-content: space-between;
            align-items: center;

            h3 {
                font-size: 16px;
                font-weight: 700;
            }
        }
    }
}
</style>

<script>
export default {
    props: {
        productImage: {
            type: String,
            required: true
        },
        alt: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        categorie: {
            type: String,
            default: 'All'
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: String,
            required: true
        },
        productUrl: {
            type: String,
            required: true
        }
    },
    methods: {
        openProductPage(productUrl) {
            this.$router.push(productUrl);
        }
    }
} 
</script>