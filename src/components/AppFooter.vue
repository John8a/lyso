<template>
    <footer class="footer">
        <div class="info">
            <h2>
                <img src="../assets/logo.png" alt="logo" width="35" height="35">
                <span>
                    Lysø Inc.
                </span>
            </h2>
            <p>Company Address</p>
            <p>Company Phone</p>
            <p>Company Email</p>
            <p>© All rights reserved</p>
        </div>
        <div class="footer-right">
            <div class="enter-email">
                <h2>Get Notified!</h2>
                <div class="input-field">
                    <button @click="store_email()">Sub</button>
                    <input id="email" v-model="subemail" type="email">
                </div>
            </div>
            
            <div class="socials">
                <a v-for="social in socials" :key="social.name" :href="social.link" target="_blank">
                    {{ social.name }}
                </a>
            </div>
        </div>
    </footer>
</template>

<script setup>
    import { ref } from 'vue'

    const socials = [
        {
            name: 'facebook',
            link: 'https://www.facebook.com/YourFace'
        },
        {
            name: 'instagram',
            link: 'https://www.instagram.com/YourFace/'
        },
        {
            name: 'linkedin',
            link: 'https://www.linkedin.com/in/'
        },
        {
            name: 'etsy',
            link: 'https://www.etsy.com/shop/YourFaceOnCanvas'
        }
    ]

    const subemail = ref('')

    // TODO: Store email in database
    // TODO: Add email validation
    // TODO: Fetch IP address
    const store_email = () => {
        if (subemail.value.includes('@') && subemail.value.includes('.') && subemail.value.length > 5 && subemail.value.length < 50 && subemail.value.trim().includes(' ') == false && subemail.value.endsWith('@') == false && subemail.value.endsWith('.') == false) {
            alert('store email')
        } else {
            alert('Please enter an email')
        }
    }

</script>

<style lang="scss">

@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css";

footer {
    margin-top: 50px;
    background-color: var(--secondary-color);
    padding: 30px 50px;
    display: flex;
    justify-content: space-between;

    .info {
        h2 {
            display: flex;
            align-items: center;
            font-size: 30px;
            font-weight: 700;
            color: var(--primary-color);
            margin-bottom: 20px;

            span {
                margin-left: 10px;
            }
        }

        p {
            font-size: 14px;
            color: var(--primary-color);
            margin-bottom: 10px;
        }
    }

    .footer-right {
        position: relative;
        width: 400px;

        .enter-email {
            position: absolute;
            right: 0;
            top: 0;

            .input-field {
                direction: rtl;
            }

            input {
                width: 80%;
                height: 50px;
                border: none;
                border-radius: 5px 0 0 5px;
                padding: 0 20px;
                font-size: 15px;
                font-weight: 700;
                text-transform: uppercase;
                color: var(--primary-color);
                background-color: var(--secondary-color);
                border: 1px solid var(--primary-color);
                outline: 0;
                transition: all 0.3s ease-in-out;
                direction: ltr;
            }

            button {
                width: 20%;
                height: 50px;
                border: none;
                border-radius: 0 5px 5px 0;
                background-color: var(--primary-color);
                color: var(--secondary-color);
                font-size: 15px;
                font-weight: 700;
                text-transform: uppercase;
                cursor: pointer;
                transition: all 0.3s ease-in-out;

                &:hover {
                    background-color: #000;
                    color: #fff;
                }

                &:hover ~ input {
                    border: 1px solid #000;
                }
            }

            h2 {
                font-size: 40px;
                font-weight: 700;
                color: var(--primary-color);
                text-transform: uppercase;
            }
        }
    }

    .socials {
        position: absolute;
        bottom: 0;
        right: 0;

        a {
            margin-right: 20px;
            color: var(--primary-color);
            font-size: 15px;
            transition: all 0.3s ease-in-out;
            text-decoration: none;
            text-transform: uppercase;
            font-weight: 700;


            &:hover {
                color: var(--primary-color-hover);
            }
        }
    }
}

</style>