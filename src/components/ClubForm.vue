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
        <div v-if="v$.name.$error" class="error">
          {{ v$.name.$errors[0].$message }}
        </div>
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
        <div v-if="v$.owner.$error" class="error">
          {{ v$.owner.$errors[0].$message }}
        </div>
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
        <div v-if="v$.email.$error" class="error">
          {{ v$.email.$errors[0].$message }}
        </div>
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
        <div v-if="v$.website.$error" class="error">
          {{ v$.website.$errors[0].$message }}
        </div>
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
        <div v-if="v$.city.$error" class="error">
          {{ v$.city.$errors[0].$message }}
        </div>
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
        <div v-if="v$.phone.$error" class="error">
          {{ v$.phone.$errors[0].$message }}
        </div>
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
        <div v-if="v$.address.$error" class="error">
          {{ v$.address.$errors[0].$message }}
        </div>
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
import { computed } from "@vue/reactivity";
import { reactive, ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import useVuelidate from "@vuelidate/core";
import {
  required,
  minLength,
  maxLength,
  url,
  helpers,
  email,
} from "@vuelidate/validators";

const props = defineProps({
  clubId: String,
});

const clubData = reactive({
  name: null,
  address: null,
  city: null,
  owner: null,
  phone: null,
  website: null,
  userId: null,
  email: null,
});

const phoneRegex = helpers.regex(
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{2}[-\s\.]?[0-9]{4,6}$/
);

const phoneValidator = helpers.withMessage("Phone not valid", phoneRegex);

const rules = computed(() => ({
  name: {
    required,
    minLength: minLength(3),
    maxLength: maxLength(40),
  },
  address: {
    required,
    minLength: minLength(10),
    maxLength: maxLength(100),
  },
  city: {
    required,
    minLength: minLength(3),
    maxLength: maxLength(30),
  },
  owner: {
    required,
    minLength: minLength(3),
    maxLength: maxLength(50),
  },
  phone: {
    required,
    phoneValidator,
  },
  website: {
    url,
  },
  email: {
    email,
  },
}));

const v$ = useVuelidate(rules, clubData);

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
  v$.value.$touch();
  console.log(v$.value);
  if (v$.value.$invalid) return;
  if (isEdit) {
    try {
      console.log("edit payload:", { ...clubData, id: props.clubId });
      clubService.updateClub({ ...clubData, id: props.clubId });
      return;
    } catch (error) {}
  }

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
.error {
  color: red;
}
</style>
