<script setup>
import CardComponent from '@/components/CardComponent.vue';
import HeroBanner from '@/components/HeroBanner.vue';
import IntroSubscription from '@/components/IntroSubscription.vue';

</script>
<template>
  <div>
    <IntroSubscription title="Bliv en del af klubben"
      body="Som medlem af vores kundeklub får du adgang til en verden af eksklusive fordele og særlige oplevelser i vores smukke have. Vores kundeklub er designet til at give vores trofaste gæster en ekstraordinær oplevelse, hvor I kan nyde alt det, haven har at byde på, samt få adgang til særlige rabatter og arrangementer."
      buttonText="Bliv medlem" imageName="Kundeklub_kort.webp" :buttonAlt=true />

      <!-- TODO: Only show this component on desktop, render listview component if mobile -->
    <CardComponent title="tilbud og rabatter" category="Eksklusive"
      body="Modtag særlige tilbud og rabatter på alt fra billetter og årskort til cafévarer og merchandise i vores butik. Modtag særlige tilbud og rabatter på alt fra billetter og årskort til cafévarer og merchandise i vores butik."
      imageName="Geo_Have_05.webp" buttonText="Læs mere" :imageFirst=true />

    <CardComponent title="begivenheder" category="Kommende"
      body="I Geografisk Have holder vi mange spændende events og aktiviteter hele året rundt. Herunder Grøn Have Festival, Plantemarked, Bæredygtigt Julemarked, Sankt Hans og mange flere..."
      imageName="Geo_Have_03.webp" buttonText="Læs mere" :imageFirst=false />

    <div class="deleteme">
      form here
    </div>

    <HeroBanner :height=300 imageName="gdpr_bottom_image.webp" />

  </div>
</template>

<style lang="scss" scoped>
.deleteme {
  margin-top: 200px;
  margin-bottom: 200px;
}
</style>