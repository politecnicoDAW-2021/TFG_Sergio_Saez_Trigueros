<template>
  <h1 class="header mt-4">{{ title }} Club</h1>
  <form
    class="col-6 p-3 clubForm"
    style="background-color: var(--amplify-colors-brand-primary-20)"
    @submit.prevent="submit()"
  >
    <div class="form-row row d-flex justify-content-around">
      <div class="form-group col-6">
        <label for="name">Club name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          placeholder="Name"
          v-model="clubData.name"
        />
      </div>
      <div class="form-group col-6">
        <label for="owner">Owner</label>
        <input
          type="text"
          class="form-control"
          id="owner"
          placeholder="Owner name"
          v-model="clubData.owner"
        />
      </div>
    </div>
    <div class="form-row row d-flex justify-content-around">
      <div class="form-group col-6">
        <label for="email">Email</label>
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="Email address"
          v-model="clubData.email"
        />
      </div>
      <div class="form-group col-6">
        <label for="website">Website</label>
        <input
          type="text"
          class="form-control"
          id="website"
          placeholder="Website"
          v-model="clubData.website"
        />
      </div>
    </div>
    <div class="form-row row d-flex justify-content-around">
      <div class="form-group col-6">
        <label for="city">City</label>
        <input
          type="text"
          class="form-control"
          placeholder="City"
          id="city"
          v-model="clubData.city"
        />
      </div>
      <div class="form-group col-6">
        <label for="phone">Phone</label>
        <input
          type="text"
          class="form-control"
          placeholder="Phone number"
          id="phone"
          v-model="clubData.phone"
        />
      </div>
    </div>
    <div class="form-row d-flex justify-content-center">
      <div class="form-group col-12">
        <label for="address">Address</label>
        <input
          type="text"
          class="form-control"
          id="address"
          placeholder="1234 Main St"
          v-model="clubData.address"
        />
      </div>
    </div>
    <div class="form-row d-flex justify-content-center align-items-end">
      <div class="form-group col-6">
        <label for="userId">User Id</label>
        <input
          class="form-control"
          id="userId"
          placeholder="User Id"
          v-model="clubData.userId"
        />
      </div>
      <div class="form-group col-6">
        <button class="btn btn-light mx-3">Assign user</button>
      </div>
    </div>

    <button type="submit" class="btn btn-info mt-3 mx-1">
      {{ title }}
    </button>
    <button class="btn btn-dark mt-3 mx-1" @click="backToPrevious()">
      Back
    </button>
  </form>
</template>

<script setup>
import { clubService } from "@/services/club.service";
import { reactive, ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const props = defineProps({
  clubId: String,
});

const clubData = reactive({
  name: "",
  address: "",
  city: "",
  owner: "",
  phone: "",
  website: "",
  userId: "",
  email: "",
});

const title = ref(null);
const router = useRouter();
let isEdit = false;

const backToPrevious = (msgData = "") => {
  router.push({
    name: "clubs",
    params: { msg: msgData },
  });
};

const submit = () => {
  if (isEdit) {
    return;
  }

  console.log("payload:", clubData);

  try {
    clubService.createClub(clubData);
    backToPrevious(`Club ${clubData.name} created`);
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  title.value = !props.clubId ? "Create" : "Edit";
  if (props.clubId) {
    isEdit = true;
    clubService.getClub(props.clubId).then((data) => {
      let clubDataFromApi = data.data.getClubs;
      clubData.name = clubDataFromApi.name;
      clubData.owner = clubDataFromApi.owner;
      clubData.email = clubDataFromApi.email;
      clubData.city = clubDataFromApi.city;
      clubData.phone = clubDataFromApi.phone;
      clubData.address = clubDataFromApi.address;
      clubData.userId = clubDataFromApi.userId;
    });
  }
});
</script>

<style>
.clubForm {
  margin-left: 25%;
}
</style>
