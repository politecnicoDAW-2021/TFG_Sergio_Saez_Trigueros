<template>
  <nav
    class="navbar navbar-expand-lg navbar-light"
    style="background-color: var(--amplify-colors-brand-primary-20)"
  >
    <router-link class="navbar-brand p-2" to="/">SportEvents</router-link>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link class="nav-link" to="/">Home</router-link>
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
        <span class="navbar-text">{{ user }}</span>
        <button class="btn btn-outline-info mx-3" @click="signOut()">
          Sign Out
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { authService } from "@/services/auth.service";
import { computed } from "@vue/reactivity";
import { onBeforeMount, ref } from "vue";

defineProps({
  user: String,
});

const isAdmin = ref(false);

const signOut = () => {
  authService.signOut();
};

onBeforeMount(async () => {
  isAdmin.value = await authService.isAdmin();
});
</script>
