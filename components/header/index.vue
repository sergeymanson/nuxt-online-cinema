<template>
    <header role="banner">
        <div class="container flex">
            <div class="left inline-flex">
                <link-custom link="/" id="logo">
                    <image-custom
                            width="94"
                            height="27"
                            :src="logoSrc"
                            alt=""
                    />
                </link-custom>
            </div>

        </div>
    </header>
</template>

<script>
    import logo from '~/assets/themes/hd2be/images/logo.png'
    export default {
        name: 'header-component',
        data () {
            return {
                logoSrc: logo
            }
        }
    }
</script>