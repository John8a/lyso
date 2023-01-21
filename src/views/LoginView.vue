<template>
    <div class="login-view">
        <div class="login">
            <h2>Login</h2>
            <form @submit.prevent="login">
                <p v-if="errMsg > 0" class="err-msg">{{ errMsg }}</p>
                <div class="form-control">
                    <input type="email" id="email" v-model="email"  @change="labelSettings()" />
                    <label for="email">Email</label>
                </div>
                <div class="form-control">
                    <input id="password" @change="labelSettings()" type="password" v-model="password" />
                    <label for="password">Password</label>
                </div>
                <!-- register button -->
                <div class="form-control">
                    <a href="/register">Don't have an account yet? Register!</a>
                </div>
                <div class="form-control">
                    <button type="submit">Login</button>
                </div>
                <!-- forgot password -->
                <div class="form-control">
                    <a href="/reset">Forgot password?</a>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { onMounted } from 'vue';

let email = ref('')
let password = ref('')
let errMsg = ref('')

onMounted(() => {
    // get window size
    const width = window.innerWidth
    if (width < 1500) {
        document.querySelector('.login-view').style.backgroundSize = 'cover'
    } else {
        document.querySelector('.login-view').style.backgroundSize = 'contain'
        document.querySelector('.login-view').style.backgroundRepeat = 'repeat'
    }
})

// on submit firebase login
const login = async () => {
    try {
        // const res = await firebase.auth().signInWithEmailAndPassword(email.value, password.value)
        const res = "test"
        console.log(res)
    } catch (err) {
        errMsg.value = err.message
    }
}

const labelSettings = () => {
    if (email.value.length > 0) {
            document.querySelector('#email + label').classList.add('active')
        } else {
            document.querySelector('#email + label').classList.remove('active')
        }
        if (password.value.length > 0) {
            document.querySelector('#password + label').classList.add('active')
        } else {
            document.querySelector('#password + label').classList.remove('active')
    }
}

</script>

<style lang="scss">

.login-view {
    background-image: url('../assets/login_background.jpg');
    background-color: var(--primary-color);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: calc(100vh - 80px);
    width: 100%;
    overflow: hidden;
}

.err-msg {
    background-color: #f8d7da;
    color: #721c24;
    width: 100%;
    padding: 10px;
    text-align: center;
    margin-bottom: 0.5rem;
    border-radius: 5px;
}

.login {
    background-color: #fff;
    width: 400px;
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    h2 {
        margin-bottom: 1rem;
        text-transform: uppercase;    
    }

    form {
        width: 100%;
        max-width: 400px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .form-control {
            width: 100%;
            margin-bottom: 0.5rem;
            position: relative;
            padding: 16px 0 10px;

            a {
                display: block;
                text-align: center;
                color: var(--secondary-color);
                font-size: 14px;
                font-weight: bold;
                transition: all 0.2s ease-in-out;

                &:hover {
                    color: #000;
                }
            }

            label {
                display: block;
                padding: 0 10px;
                position: absolute;
                top: 0;
                transform-origin: top left;
                transform: translate(2px, 29px) scale(1);
                transition: all 0.2s ease-in-out;
                color: #5f5f5f;
                font-size: 16px;

                &.active {
                    transform: translate(2px, 16px) scale(0.8);
                }
            }

            input {
                width: 100%;
                border: 1px solid #ccc;
                padding: 16px 10px 10px;
                border-radius: 5px;
                outline: none;
                background-color: #fff;
                font-size: 16px;

                &:focus {
                    border-color: var(--secondary-color);

                    & ~ label {
                        transform: translate(2px, 16px) scale(0.8);
                        color: var(--secondary-color);
                    }
                }
            }
        }

        .form-control button {
            width: 100%;
            padding: 16px;
            border: none;
            font-size: 16px;
            border-radius: 5px;
            background-color: var(--secondary-color);
            color: #fff;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.2s ease-in-out;

            &:hover {
                background-color: #000;
            }
        }
    }
}
</style>