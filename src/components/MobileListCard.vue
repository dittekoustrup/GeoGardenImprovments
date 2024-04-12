<script setup>

import getImageUrl from '@/helpers/getImageSize';

</script>

<template>
    <section class="list-card">
        <img :src="getImageUrl('Geo_Have_05.webp')" alt="premiums image'">

        <div class="list-card__content">
            <h2>
                Medlemskabets fordele inkluderer
            </h2>
            <ul>
                <li>
                    15% på drikkevarer, varme som kolde i vores café
                </li>
                <li>
                    Fordelagtige rabatter på kommende events
                </li>
                <li>
                    Foran i køen på alle kommende events
                </li>
                <li>
                    Første kaffe i hver årstid er gratis
                </li>
                <li>
                    Gratis frøpose til din have hvert forår
                </li>
            </ul>

        </div>
    </section>
</template>

<style lang="scss" scoped>
@import '@/assets/style/MobileListCard.scss';
</style>
