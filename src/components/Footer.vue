<script setup>
import { openNewTab } from '../helpers/OpenInNewTab.js'
</script>

<template>
    <footer>
        <div class="footer-content">
            <span class="footer-content__logo" />

            <div class="footer-content__socials">
                <h2>Social Media</h2>
                <div class="footer-content__icons">
                    <img src="../assets/icons/Facebook.svg" alt="Facebook logo"
                        @click="openNewTab('https://www.facebook.com/geografiskhave/')">
                    <img src="../assets/icons/Instagram.svg" alt="Instagram logo"
                        @click="openNewTab('https://www.instagram.com/geografisk_have/')">
                </div>
            </div>

            <div class="footer-content__about-us">
                <h2>Om os</h2>
                <a href="">Bestyrelsen</a>
                <a href="">Medarbejdere</a>
                <a href="">Udviklingsplan for haven</a>
                <a href="">Årsberetninger</a>
                <a href="">Samarbejdspartnere</a>
                <a href="">Pressebilleder</a>
                <a href="">Pressearkiv</a>
            </div>

            <div class="footer-content__extra-and-socials">
                <h2 class="footer-content__extra-and-socials--extras-header">Diverse</h2>
                <a href="">Persondatapolitik</a>
                <a href="">Cookiepolitik</a>
                <a href="">Smiley kontrolrapport</a>

                <h2 class="footer-content__extra-and-socials--socials-header">Social Media</h2>
                <div class="footer-content__extra-and-socials--logos">
                    <span class="footer-content__facebook-logo"
                        @click="openNewTab('https://www.facebook.com/geografiskhave/')" />
                    <span class="footer-content__instagram-logo"
                        @click="openNewTab('https://www.instagram.com/geografisk_have/')" />
                </div>
            </div>

            <div class="footer-content__contact">
                <h2>Kontakt</h2>
                <address>
                    <p>Geografisk Have</p>
                    <p>Christian 4 vej 23</p>
                    <p>6000 Kolding</p>
                </address>

                <ul>
                    <li>79 79 70 00</li>
                    <li>info@geografiskhave.dk</li>
                </ul>

                <dl>
                    <dt>CVR-NR.: 36675802</dt>
                    <dt>EAN-NR.: 5798005311607</dt>
                </dl>
            </div>

            <div class="footer-content__links">
                <a href="">Persondatapolitik</a> /
                <a href="">Cookiepolitik</a> /
                <a href="">Kontrolrapport</a> /
                <a href="">Bestyrelsen</a> /
                <a href="">Medarbejdere</a> /
                <a href="">Udviklingsplan for haven</a> /
                <a href="">Årsberetninger</a> /
                <a href="">Samarbejdspartnere</a>
            </div>
        </div>

        <p class="footer-content__rights">2023 - Geografisk Have - Alle rettigheder forbeholdes</p>
    </footer>
</template>

<style>@import "../assets/style/Footer.scss";</style>../helpers/OpenInNewTab.js