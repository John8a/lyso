<template>
    <div class="error">
        <h2>404 - Page not found</h2>
        <p>Sorry, the page you are looking for does not exist.</p>
        <router-link to="/">Go back home!</router-link>
    </div>
</template>

<style lang="scss">
    .error {
        width: 100%;
        height: calc(100vh - 121px - 270px);
        background-image: url('https://images.unsplash.com/photo-1526415302530-ad8c7d818689?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80');
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        display: flex;
        flex-direction: column;
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

        p {
            font-size: 1.5rem;
            letter-spacing: -1px;
            font-weight: 400;
            text-transform: uppercase;
            margin: 20px auto;
            text-align: center;
            width: fit-content;
            color: var(--primary-color);
        }

        a {
            font-size: 1.5rem;
            letter-spacing: -1px;
            font-weight: 400;
            text-transform: uppercase;
            margin: 20px auto;
            text-align: center;
            width: fit-content;
            color: var(--primary-color);
            text-decoration: none;
            border-bottom: 1px solid var(--primary-color);
        }
    }

    .footer {
        margin-top: 30px;
    }
</style>