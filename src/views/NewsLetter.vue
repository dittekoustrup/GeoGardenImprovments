<script setup>
import CardComponent from '@/components/CardComponent.vue';
import MobileListCard from '@/components/MobileListCard.vue';
import HeroBanner from '@/components/HeroBanner.vue';
import IntroSubscription from '@/components/IntroSubscription.vue';
import Form from "../components/SignUpForm.vue";

import isMobile from '@/helpers/isMobile';
</script>

<template>
  <head>
    <meta name="description" content="Discover exclusive offers, upcoming events, and exciting news from Geografisk Have. Join our newsletter to unlock a world of benefits and experiences in our beautiful garden!" />
  </head>
  <div>
    <HeroBanner :height=524 imageName="Geo_Have_06.webp" />
    
    <IntroSubscription title="Bliv en del af klubben"
      body="Som medlem af vores kundeklub får du adgang til en verden af eksklusive fordele og særlige oplevelser i vores smukke have. Vores kundeklub er designet til at give vores trofaste gæster en ekstraordinær oplevelse, hvor I kan nyde alt det, haven har at byde på, samt få adgang til særlige rabatter og arrangementer."
      buttonText="Bliv medlem" imageName="Kundeklub_kort.webp" :buttonAlt=true />

    <CardComponent v-if="!isMobile()" title="tilbud og rabatter" category="Eksklusive"
      body="Modtag særlige tilbud og rabatter på alt fra billetter og årskort til cafévarer og merchandise i vores butik. Modtag særlige tilbud og rabatter på alt fra billetter og årskort til cafévarer og merchandise i vores butik."
      imageName="Geo_Have_05.webp" buttonText="Læs mere" :imageFirst=true />
      
    <MobileListCard />
      
    <CardComponent title="begivenheder" category="Kommende"
      body="I Geografisk Have holder vi mange spændende events og aktiviteter hele året rundt. Herunder Grøn Have Festival, Plantemarked, Bæredygtigt Julemarked, Sankt Hans og mange flere..."
      imageName="Geo_Have_03.webp" buttonText="Læs mere" :imageFirst=false />
      
     <Form />

    <HeroBanner :height=300 imageName="gdpr_bottom_image.webp" />

  </div>
</template>

<style lang="scss" scoped>

</style>