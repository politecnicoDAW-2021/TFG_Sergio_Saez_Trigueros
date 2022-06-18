<template>
  <div class="table-responsive p-5">
    <table class="table table-info table-hover table-striped">
      <thead>
        <tr>
          <th scope="col">First name</th>
          <th scope="col">Last name</th>
          <th scope="col">Birthdate</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">City</th>
          <th scope="col">Address</th>
          <th scope="col">Gender</th>
          <th scope="col">Club</th>
          <th scope="col">
            <button class="btn btn-success" @click="goToCreateMember()">
              Insert
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="member in members" class="table-row">
          <td>{{ member.first_name }}</td>
          <td>{{ member.last_name }}</td>
          <td>{{ member.birth_date }}</td>
          <td>{{ member.email }}</td>
          <td>{{ member.phone }}</td>
          <td>{{ member.city }}</td>
          <td>{{ member.address }}</td>
          <td>{{ member.gender }}</td>
          <td>{{ member.clubID }}</td>
          <td>
            <button class="btn btn-warning" @click="goToEdit(member.id)">
              Edit
            </button>
            <button
              class="btn btn-danger mx-2"
              @click="openModal(member.id, member.first_name)"
            >
              Delete
            </button>
            <button class="btn btn-secondary">View events</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { clubService } from "@/services/club.service";
import { memberService } from "@/services/member.service";
import { onBeforeMount, ref } from "vue";
import { useRouter } from "vue-router";

const members = ref(null);
const router = useRouter();
const emit = defineEmits(["openDelete"]);

const goToEdit = (memberId) => {
  router.push({
    name: "member",
    params: { id: memberId },
  });
};

const openModal = (id, name) => {
  emit("openDelete", { memberId: id, name: name });
};

const goToCreateMember = (id = "") => {
  router.push({
    name: "member",
    params: { id: id },
  });
};

const getClubNameById = async (id) => {
  const clubData = await clubService.getClub(id);
  return clubData.data.getClubs.name;
};

onBeforeMount(async () => {
  const membersData = await memberService.getMembers();
  members.value = membersData.data.listAssociatedMembers.items;
  members.value.map(async (member) => {
    const clubName = await getClubNameById(member.clubID);
    member.clubID = clubName;
    return member;
  });
});
</script>

<style>
.table-row {
  vertical-align: middle;
}
</style>
