<script setup>
// Dependencies
import { useRouter } from "vue-router";

// Components
import Hero from "@/components/Hero.vue";
import IntroSubscription from '@/components/IntroSubscription.vue'
import Card from '@/components/Card.vue'

const router = useRouter();
const routes = router.getRoutes();
</script>

<template>
  <main>
    <menu>
      <li v-for="r in routes" :key="r.path">
        <RouterLink :to="r.path">{{ r.meta.title }}</RouterLink>
      </li>
      <p>Test</p>
    </menu>

    <section>
      <Hero imageName="Geo_Have_06.webp" />
    </section>

    <IntroSubscription title="Velkommen til haven"
      body="Geografisk Have Kolding er en 14 hektar stor, botanisk have, hvor det geografiske relaterer sig til, at træer, buske og urter er plantet sammen efter oprindelsesland. Grundlæggeren Aksel Olsen købte jorden og startede stedet som planteskole i 1918. Han havde en stor interesse for planter fra hele verden og især fra Østasien..."
      buttonText="Læs mere" buttonLink="dynamic button events here, ex. link to other page, or show toaster"
      buttonColor="light" imageURL="../assets/gfx/logo/Logo_icon_no_text.svg" />

    <Card title="tilbud og rabatter" category="Eksklusive"
      body="Modtag særlige tilbud og rabatter på alt fra billetter og årskort til cafévarer og merchandise i vores butik. Modtag særlige tilbud og rabatter på alt fra billetter og årskort til cafévarer og merchandise i vores butik."
      imageName="Geo_Have_05.webp" buttonText="Læs mere" :imageFirst=true />

    <Card title="begivenheder" category="Kommende"
      body="I Geografisk Have holder vi mange spændende events og aktiviteter hele året rundt. Herunder Grøn Have Festival, Plantemarked, Bæredygtigt Julemarked, Sankt Hans og mange flere..."
      imageName="Geo_Have_03.webp" buttonText="Læs mere" :imageFirst=false />

    <Card title="havens dyr" category="Besøg"
      body="I Geografisk Have har vi forskellige dyr, du kan komme helt tæt på. Kom og hils på havens klappegeder, høns, klippeegern, ponyer og kaniner. Læs mere om hvilke spændende dyr, du kan opleve i dyrefolden..."
      imageName="Geo_Have_01.webp" buttonText="Læs mere" :imageFirst=true />

    <Card title="festen i haven" category="Hold"
      body="Lad Geografisk Have danne en stemningsfuld og eventyrlig ramme for dit næste arrangement. Haven er et helt unikt sted at holde bryllup, konfirmation, barnedåb og fødselsdag i inspirerende og skønne..."
      imageName="Geo_Have_04.webp" buttonText="Læs mere" :imageFirst=false />

    <IntroSubscription title="Bliv en del af klubben"
      body="Som medlem af vores kundeklub får du adgang til en verden af eksklusive fordele og særlige oplevelser i vores smukke have. Vores kundeklub er designet til at give vores trofaste gæster en ekstraordinær oplevelse, hvor I kan nyde alt det, haven har at byde på, samt få adgang til særlige rabatter og arrangementer."
      buttonText="Bliv medlem" buttonLink="dynamic button events here, ex. link to other page, or show toaster" imageURL="../assets/images/mobile/Kundeklub_kort.webp" />

  </main>
</template>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

</style>