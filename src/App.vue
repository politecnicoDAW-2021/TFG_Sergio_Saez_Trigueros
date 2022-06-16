<template>
  <authenticator class="auth">
    <template class="bodyApp" v-slot="{ user }">
      <nav-bar-vue
        v-if="renderNavbar"
        @open-link-modal="showModal = true"
        :user="user"
        ref="navBar"
      ></nav-bar-vue>
      <account-link-modal-vue
        :user="user"
        @close="closeModal()"
        @save="linked()"
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
import ProfileViewVue from "./views/ProfileView.vue";
import MembersOverview from "./views/MembersOverview.vue";
import { nextTick, ref } from "vue";

const showModal = ref(false);
const navBar = ref(null);
const userLinked = ref(false);
const renderNavbar = ref(true);

const closeModal = () => {
  showModal.value = false;
  document.getElementsByTagName("body")[0].style = "overflow: auto";
};

const forceRerender = () => {
  renderNavbar.value = false;

  nextTick(() => {
    renderNavbar.value = true;
  });
};

const linked = () => {
  forceRerender();
  closeModal();
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
