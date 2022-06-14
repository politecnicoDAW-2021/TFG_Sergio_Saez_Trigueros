<template>
  <authenticator class="auth">
    <template class="bodyApp" v-slot="{ user }">
      <nav-bar-vue
        @open-link-modal="showModal = true"
        :user="user"
      ></nav-bar-vue>
      <account-link-modal-vue
        @close="closeModal()"
        v-if="showModal"
      ></account-link-modal-vue>
      <RouterView class="body" />
    </template>
    <template v-slot:sign-in-header>
      <h3 class="amplify-heading">Sign in to your account</h3>
    </template>
    <template v-slot:sign-up-header>
      <h3 class="amplify-heading">Create a new account</h3>
    </template>
  </authenticator>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import { Authenticator } from "@aws-amplify/ui-vue";
import "@aws-amplify/ui-vue/styles.css";
import HomeViewVue from "./views/HomeView.vue";
import ClubFormVue from "./components/ClubForm.vue";
import ClubFormView from "./views/ClubFormView.vue";
import NavBarVue from "./components/NavBar.vue";
import ClubCardVue from "./components/ClubCard.vue";
import AccountLinkModalVue from "./components/AccountLinkModal.vue";
import { ref } from "vue";

const showModal = ref(false);

const closeModal = () => {
  showModal.value = false;
  document.getElementsByTagName("body")[0].style = "overflow: auto";
};
</script>

<style>
.amplify-heading {
  padding-left: 2.5rem;
  padding-top: 1rem;
  font-size: 2rem;
  font-weight: bold;
}

.auth {
  margin-top: 3rem;
}

.body {
  height: 100vh;
}
</style>
