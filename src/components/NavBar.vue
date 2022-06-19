<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-info">
    <div class="container-fluid bg-info">
      <router-link class="navbar-brand p-2 b" to="/">SportEvents</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarScroll"
        aria-controls="navbarScroll"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul
          class="navbar-nav me-auto mr-auto navbar-nav-scroll"
          style="--bs-scroll-height: 100px"
        >
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
              <li>
                <a class="dropdown-item" href="#" @click="goToClubs()">Clubs</a>
              </li>
              <li>
                <a class="dropdown-item" href="#" @click="goToMembersOverview()"
                  >Associated members</a
                >
              </li>
            </ul>
          </li>
        </ul>
        <div class="ms-auto">
          <span class="navbar-text mx-3 profile-icon" @click="goToProfile()"
            ><span @click="goToProfile()" class="icon">👤</span>
            {{ user.attributes.nickname }}</span
          >
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
    </div>
  </nav>
</template>

<script setup>
import { authService } from "@/services/auth.service";
import { onBeforeMount, ref } from "vue";
import { CognitoUser } from "@aws-amplify/auth";
import { useRouter } from "vue-router";

const props = defineProps({
  user: CognitoUser,
});

const emits = defineEmits(["openLinkModal"]);

const isAdmin = ref(false);
const isLinked = ref(true);
const router = useRouter();

const signOut = () => {
  authService.signOut();
  router.push({
    name: "home",
  });
};

const openLinkModal = () => {
  emits("openLinkModal");
};

const goToProfile = () => {
  const userId = props.user.getUsername();
  router.push({
    name: "profile",
    params: { id: userId },
  });
};

const goToClubs = () => {
  router.push({
    name: "clubs",
  });
};

const goToMembersOverview = () => {
  router.push({
    name: "members",
  });
};

onBeforeMount(async () => {
  isAdmin.value = await authService.isAdmin();
  const currentUserId = props.user.getUsername();
  const isUserClub = await authService.isUserLinkedToClub(currentUserId);
  const isUserMember = await authService.isUserLinkedToMember(currentUserId);
  if (isUserClub) {
    isLinked.value = isUserClub;
  }
  if (isUserMember) {
    isLinked.value = isUserMember;
  }
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
.profile-icon {
  cursor: pointer;
}
.icon {
  color: initial;
}
</style>
