<template>
  <table class="table table-hover">
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">City</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="club in clubs"
        style="cursor: pointer"
        @click="selectClub(club.id)"
      >
        <th scope="row">{{ club.name }}</th>
        <td>{{ club.city }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { clubService } from "@/services/club.service";
import { onBeforeMount, ref } from "vue";

const clubs = ref(null);
const emit = defineEmits(["selected"]);

const loadClubs = () => {
  clubService
    .getClubs()
    .then((clubsData) => (clubs.value = clubsData.data.listClubs.items));
};

const selectClub = (clubId) => {
  emit("selected", { clubId: clubId });
  console.log(clubId);
};

onBeforeMount(() => {
  loadClubs();
});
</script>
