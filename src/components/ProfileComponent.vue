<template>
  <h2 class="header">Profile</h2>
  <div class="profile_body">
    <div class="column">
      <div>
        <label>Name:</label>
        <p>{{ profileData.name }}</p>
      </div>
      <div>
        <label>Nickname:</label>
        <p>{{ userNick }}</p>
      </div>
      <div>
        <label>Email:</label>
        <p>{{ profileData.email }}</p>
      </div>
      <div>
        <label>Address:</label>
        <p>{{ profileData.address }}</p>
      </div>
    </div>
    <div class="column">
      <div>
        <label>City:</label>
        <p>{{ profileData.city }}</p>
      </div>
      <div>
        <label>Phone:</label>
        <p>{{ profileData.phone }}</p>
      </div>
      <div v-if="!isClub">
        <label>Gender:</label>
        <p>{{ profileData.gender }}</p>
      </div>
      <div v-if="!isClub">
        <label>Birthdate:</label>
        <p>{{ profileData.birthdate }}</p>
      </div>
      <div v-if="isClub">
        <label>Owner:</label>
        <p>{{ profileData.owner }}</p>
      </div>
      <div v-if="isClub">
        <label>Website:</label>
        <p>{{ profileData.website }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { authService } from "@/services/auth.service";
import { ref, reactive, onMounted, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import { clubService } from "@/services/club.service";

const profileData = reactive({
  name: "",
  email: "",
  address: "",
  city: "",
  phone: "",
  gender: "",
  birthdate: "",
  owner: "",
  website: "",
});

const userNick = ref("");

const isClub = ref(true);
const route = useRoute();

const setClubValues = (club) => {
  profileData.email = club.email;
  profileData.address = club.address;
  profileData.city = club.city;
  profileData.phone = club.phone;
  profileData.name = club.name;
  profileData.owner = club.owner;
  profileData.website = club.website;
};
const setMemberValues = (member) => {
  profileData.email = member.email;
  profileData.address = member.address;
  profileData.city = member.city;
  profileData.phone = member.phone;
  profileData.name = `${member.firstName} ${member.lastName}`;
  profileData.birthdate = member.birthdate;
  profileData.gender = member.gender;
};

onBeforeMount(async () => {
  const user = await authService.getCurrentUser();
  userNick.value = user.attributes.nickname;
  const id = route.params.id;
  isClub.value = await authService.isUserLinkedToClub(id);
  if (isClub.value) {
    const clubData = await clubService.findClubByLinkedUser(id);
    const club = clubData.data.listClubs.items[0];
    setClubValues(club);
  }
});
</script>

<style>
.profile_body {
  display: flex;
  justify-content: center;
  gap: 2.5rem;
}

.column {
  margin-top: 2rem;
}
</style>
