<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-info">
    <router-link class="navbar-brand p-2 b" to="/">SportEvents</router-link>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/clubs">Clubs</router-link>
        </li>
        <li class="nav-item active">
          <router-link class="nav-link" to="/events">My events</router-link>
        </li>

        <li v-if="isAdmin" class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Admin Tools
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Events</a></li>
            <li><a class="dropdown-item" href="#">Clubs</a></li>
            <li>
              <a class="dropdown-item" href="#">Associated members</a>
            </li>
          </ul>
        </li>
      </ul>
      <div class="ms-auto">
        <span class="navbar-text mx-3">{{ user.attributes.nickname }}</span>
        <button
          v-if="!isLinked"
          @click="openLinkModal()"
          class="btn btn-danger"
        >
          + Link your account
        </button>
        <button class="btn btn-outline-light mx-3" @click="signOut()">
          Sign Out
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { authService } from "@/services/auth.service";
import { onBeforeMount, ref } from "vue";
import { CognitoUser } from "@aws-amplify/auth";

const props = defineProps({
  user: CognitoUser,
});

const emits = defineEmits(["openLinkModal"]);

const isAdmin = ref(false);
const isLinked = ref(true);

const signOut = () => {
  authService.signOut();
};

const openLinkModal = () => {
  emits("openLinkModal");
};

onBeforeMount(async () => {
  isAdmin.value = await authService.isAdmin();
  const currentUserId = props.user.getUsername();
  const isUserClub = await authService.isUserLinkedToClub(currentUserId);
  isLinked.value = isUserClub;
});
</script>

<style>
nav {
  height: 80px;
}

a {
  font-size: 19px;
}
span {
  font-size: 18px;
  font-weight: bold;
}
</style>
