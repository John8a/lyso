<template>
    <div class="nav-container" :class="{'ease-out' : $route.name != 'home', 'ease-in': $route.name === 'home' }">
        <div class="banner">
            We are currently sold out! <a href="/#footer" @click="focusSubs()">Get notified when we're back!</a>
        </div>
        <nav class="upper-navbar">
            <div class="search-bar">
                <svg xmlns="http://www.w3.org/2000/svg" ref="search" fill="none" @click="showSearch()" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                <div>
                    <div class="before" ref="before"></div>
                    <input type="text" placeholder="Lysø Lamp, Vie scan, ...">
                </div>
            </div>
            <h2 class="brand">
                <router-link to="/">Lysø</router-link>
            </h2>
            <div class="user-links">
                <router-link v-if="!isLoggedIn" to="/login">Login</router-link>
                <router-link v-if="isLoggedIn" to="/" @click="signOut()">Logout</router-link>
                <router-link to="/basket">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                </router-link>
            </div>
        </nav>
        <nav class="menu">
            <router-link to="/">New In</router-link>
            <router-link to="/kitchen">Kitchen</router-link>
            <router-link to="/living">Living</router-link>
            <router-link to="/bedroom">Bedroom</router-link>
            <router-link to="/sale" class="sale">Sale</router-link>
        </nav>
    </div>
    <div class="pseudo-nav">

    </div>
</template>

<script setup>
import { ref } from 'vue'
import { getAuth } from 'firebase/auth'
import { useRoute } from 'vue-router'

const router = useRoute()
const before = ref(null)
const search = ref(null)
const username = ref(null)
const isLoggedIn = ref(false)
let searchInput = false

// const focusSubs = () => {
//     if (subemail.value) {
//         console.log('focus')
//         this.$refs.subemail.$el.focus()
//     }
//     console.log('no focus ' + subemail.value)
// }

getAuth().onAuthStateChanged(function(user) {      
    if (user) {        
        isLoggedIn.value = true // if we have a user      
        username.value = user.email // set the username to the email
    } else {        
        isLoggedIn.value = false // if we do not      
    }  
})  

const signOut = () => {    
    getAuth().signOut()
    router.push('/')  
}


const showSearch = () => {
    if (!searchInput) {
        searchInput = true
    }

    before.value.style.animation = 'ease-out-left 0.2s ease-out forwards'
    // remove before element
    setTimeout(() => {
        before.value.parentNode.removeChild(before.value)
    }, 200)
}

</script>

<style lang="scss">
    @keyframes ease-out-left {
        0% {
            transform: translateX(calc(-50% + 10px)) translateY(2px);
        }
        100% {
            transform: translateX(calc(-50% + 200px)) translateY(2px);
        }
    }

    @keyframes ease-out {
        0% {
            transform: translateY(0%);
        }
        100% {
            transform: translateY(-40px);
        }
    }

    .ease-out {
        animation: ease-out 0.5s ease-out forwards;
    }

    @keyframes ease-in {
        0% {
            transform: translateY(-40px);
        }
        100% {
            transform: translateY(0%);
        }
    }

    .pseudo-nav {
        height: 121px;
        background-color: var(--primary-color);
    }

    .ease-in {
        animation: ease-in 0.5s ease-in forwards;
    }

    .banner {
        background-color: var(--secondary-color);
        height: 40px;
        width: 100%;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        
        a {
            color: #000;
            margin-left: 5px;
        }
    }

    .nav-container {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        z-index: 100;
        background-color: var(--primary-color);
    }

    nav {
        &.upper-navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 5px 20px;
            font-size: 18px;
            width: 1500px;
            margin: 0 auto;

            .search-bar {
                width: 200px;
                height: 25px;
                position: relative;
                cursor: pointer;
                display: flex;
                align-items: center;

                div {
                    width: 100%;
                    height: 100%;

                    .before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 50%;
                        width: 100%;
                        height: 100%;
                        background-color: var(--primary-color);
                        z-index: 1;
                        transform: translateX(calc(-50% + 10px)) translateY(2px);
                    }
                }

                input {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    border: none;
                    border-bottom: 1px solid #000;
                    padding: 0 10px;
                    margin-left: 10px;  
                    background-color: transparent;
                    font-size: 14px;
                    outline: 0;
                }

                svg { 
                    height: 100%;
                    width: auto;
                    z-index: 2;
                }
            }

            h2.brand {
                font-size: 40px;
                font-weight: 700;
                text-transform: uppercase;
                
                a {
                    text-decoration: none;
                    color: #000;
                }
            }

            .user-links {
                display: flex;
                align-items: center;
                justify-content: right;
                width: 200px;

                a {
                    color: #000;
                    font-weight: 700;
                    text-decoration: none;
                }

                svg {
                    margin-left: 10px;
                    width: 25px;
                    height: 25px;
                }
            }
        }

        &.menu {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 7px 20px;
            font-size: 16px;
            border: 1px solid rgb(39, 39, 39);
            border-width: 1px 0 1px 0;
            margin-bottom: 20px;

            a {
                color: #000;
                text-decoration: none;
                margin: 0 10px;
                text-transform: uppercase;
                font-weight: 700;

                &.sale {
                    color: red;
                }
            }
        }
    }
</style>