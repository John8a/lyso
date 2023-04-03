<template>
    <div class="no-sale">
        <h2>There are no sales at the moment</h2>
    </div>
</template>

<script setup>
</script>

<style lang="scss">
    .no-sale {
        width: 100%;
        height: calc(100vh - 121px - 270px);
        background-image: url('https://images.unsplash.com/photo-1524053193727-2d9bfdac4361?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80');
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        display: flex;
        justify-content: center;
        align-items: center;

        h2 {
            font-size: 4.5rem;
            letter-spacing: -3px;
            font-weight: 700;
            text-transform: uppercase;
            margin: 20px auto;
            text-align: center;
            background-color: var(--primary-color);
            width: fit-content;
        }
    }

    .footer {
        margin-top: 30px;
    }
</style>