<template>
  <club-link-modal-vue
    v-if="showModal"
    @save="setClub($event)"
  ></club-link-modal-vue>
  <h1 class="header mt-4">{{ title }} member</h1>
  <form
    class="col-6 p-3 clubForm"
    style="background-color: var(--amplify-colors-brand-primary-20)"
    @submit.prevent="submit()"
  >
    <div class="form-row row d-flex justify-content-around">
      <div class="form-group col-6">
        <label for="firstName">First name</label>
        <input
          type="text"
          class="form-control"
          id="firstName"
          placeholder="First name"
          v-model="memberData.first_name"
        />
        <div v-if="v$.first_name.$error" class="error">
          {{ v$.first_name.$errors[0].$message }}
        </div>
      </div>
      <div class="form-group col-6">
        <label for="lastName">Last name</label>
        <input
          type="text"
          class="form-control"
          id="lastName"
          placeholder="Last name"
          v-model="memberData.last_name"
        />
        <div v-if="v$.last_name.$error" class="error">
          {{ v$.last_name.$errors[0].$message }}
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
          v-model="memberData.email"
        />
        <div v-if="v$.email.$error" class="error">
          {{ v$.email.$errors[0].$message }}
        </div>
      </div>
      <div class="form-group col-6">
        <label for="birthdate">Birthdate</label>
        <input
          type="date"
          class="form-control"
          id="birthdate"
          placeholder="birthdate"
          v-model="memberData.birth_date"
        />
        <div v-if="v$.birth_date.$error" class="error">
          {{ v$.birth_date.$errors[0].$message }}
        </div>
      </div>
      <div class="form-group col-6">
        <label for="gender">Gender</label>
        <select id="gender" class="form-select" v-model="memberData.gender">
          <option selected>MALE</option>
          <option>FEMALE</option>
          <option>OTHER</option>
        </select>
      </div>
      <div class="form-group col-6">
        <label for="phone">Phone</label>
        <input
          type="text"
          class="form-control"
          placeholder="Phone number"
          id="phone"
          v-model="memberData.phone"
        />
        <div v-if="v$.phone.$error" class="error">
          {{ v$.phone.$errors[0].$message }}
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
          v-model="memberData.city"
        />
        <div v-if="v$.city.$error" class="error">
          {{ v$.city.$errors[0].$message }}
        </div>
      </div>
      <div class="form-group col-6">
        <label for="address">Address</label>
        <input
          type="text"
          class="form-control"
          id="address"
          placeholder="1234 Main St"
          v-model="memberData.address"
        />
        <div v-if="v$.address.$error" class="error">
          {{ v$.address.$errors[0].$message }}
        </div>
      </div>
    </div>
    <div class="form-row row d-flex justify-content-around">
      <div class="form-group col-6">
        <label for="userId">User Id</label>
        <input
          disabled
          class="form-control"
          id="userId"
          placeholder="No linked user"
          v-model="memberData.userId"
        />
      </div>
      <div class="form-group col-6">
        <label for="club">Club</label>
        <input
          disabled
          class="form-control"
          id="club"
          placeholder="Select a club"
          v-model="memberData.clubID"
        />
        <div v-if="v$.clubID.$error" class="error align-self-end">
          {{ v$.clubID.$errors[0].$message }}
        </div>
      </div>
    </div>

    <button type="submit" class="btn btn-info mt-3 mx-1">
      {{ title }}
    </button>
    <button class="btn btn-dark mt-3 mx-1" @click="backToPrevious()">
      Back
    </button>
    <button class="btn btn-light mt-3 mx-1" @click.prevent="showModal = true">
      Select club
    </button>
  </form>
</template>

<script setup>
import ClubLinkModalVue from "./ClubLinkModal.vue";
import { computed } from "@vue/reactivity";
import { reactive, ref, onBeforeMount } from "vue";
import { useRouter } from "vue-router";
import useVuelidate from "@vuelidate/core";
import {
  required,
  minLength,
  maxLength,
  helpers,
  email,
} from "@vuelidate/validators";
import { memberService } from "@/services/member.service";

const props = defineProps({
  memberId: String,
});

const memberData = reactive({
  first_name: null,
  last_name: null,
  birth_date: null,
  gender: "MALE",
  clubID: null,
  address: null,
  city: null,
  phone: null,
  userId: null,
  email: null,
});

const phoneRegex = helpers.regex(
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{2}[-\s\.]?[0-9]{4,6}$/
);

const phoneValidator = helpers.withMessage("Phone not valid", phoneRegex);

const rules = computed(() => ({
  first_name: {
    required,
    minLength: minLength(3),
    maxLength: maxLength(40),
  },
  last_name: {
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
  gender: {
    required,
  },
  phone: {
    required,
    phoneValidator,
  },
  clubID: {
    required,
  },
  birth_date: {
    required,
  },
  email: {
    email,
  },
}));

const v$ = useVuelidate(rules, memberData);
const title = ref(null);
const router = useRouter();
const isEdit = ref(false);
const showModal = ref(false);

const setClub = ($event) => {
  memberData.clubID = $event.clubId;
  showModal.value = false;
};

const backToPrevious = (msgData = "") => {
  router.push({
    name: "members",
    params: { msg: msgData },
  });
};

const submit = () => {
  v$.value.$touch();
  if (v$.value.$invalid) return;
  if (isEdit.value) {
    try {
      memberService.updateMember({ ...memberData, id: props.memberId });
      backToPrevious(`Member ${memberData.first_name} updated successfully`);
      return;
    } catch (error) {
      console.error(error);
    }
  }

  try {
    memberService.createMember(memberData);
    backToPrevious(`Member ${memberData.first_name} created`);
  } catch (error) {
    console.log(error);
  }
};

onBeforeMount(() => {
  title.value = !props.memberId ? "Create" : "Edit";
  memberData.clubID = props.clubId;
  if (props.memberId) {
    isEdit.value = true;
    memberService.getMember(props.memberId).then((data) => {
      let memberDataFromApi = data.data.getAssociatedMembers;
      memberData.first_name = memberDataFromApi.first_name;
      memberData.last_name = memberDataFromApi.last_name;
      memberData.email = memberDataFromApi.email;
      memberData.city = memberDataFromApi.city;
      memberData.phone = memberDataFromApi.phone;
      memberData.address = memberDataFromApi.address;
      memberData.userId = memberDataFromApi.userId;
      memberData.gender = memberDataFromApi.gender;
      memberData.clubID = memberDataFromApi.clubID;
      memberData.birth_date = memberDataFromApi.birth_date;
    });
  }
});
</script>

<style>
.clubForm {
  margin-left: 25%;
}
</style>
