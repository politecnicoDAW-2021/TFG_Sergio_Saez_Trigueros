<template>
  <div class="modal-wrapper">
    <div class="modal-component">
      <div class="modal-header">
        <h3>Link your account</h3>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group mb-3">
            <div class="custom-control custom-radio">
              <input
                type="radio"
                name="custom-radio"
                id="club"
                value="club"
                v-model="formData.type"
                checked
                class="custom-control-input"
              />
              <label class="custom-control-label" for="club">Club</label>
            </div>
            <div class="custom-control custom-radio">
              <input
                type="radio"
                id="member"
                name="custom-radio"
                value="member"
                v-model="formData.type"
                class="custom-control-input"
              />
              <label class="custom-control-label" for="member"
                >Associated Member</label
              >
            </div>
          </div>
          <div class="form-group">
            <label for="id">Enter your id</label>
            <input
              type="text"
              class="form-control"
              id="id"
              v-model="formData.id"
              placeholder="Member/Club Id"
            />
            <div v-if="v$.id.$error" class="error">
              {{ v$.id.$errors[0].$message }}
            </div>
            <div v-if="idError" class="error">
              {{ idError }}
            </div>
          </div>
          <div class="modal-buttons mt-3">
            <button class="btn btn-dark" @click="closeModal()">Close</button>
            <button class="btn btn-info" @click.prevent="confirm()">
              Accept
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { clubService } from "@/services/club.service";
import { computed } from "@vue/reactivity";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { reactive, ref } from "vue";
import { CognitoUser } from "@aws-amplify/auth";
import { memberService } from "@/services/member.service";

const emits = defineEmits(["close", "save"]);
const props = defineProps({
  user: CognitoUser,
});
const idError = ref(null);

const formData = reactive({
  id: "",
  type: "club",
});

const rules = computed(() => ({
  id: {
    required,
  },
}));

const v$ = useVuelidate(rules, formData);

const closeModal = () => {
  emits("close");
};

const confirm = async () => {
  v$.value.$touch();
  const userId = props.user.getUsername();
  if (v$.value.$invalid) return;
  if (formData.type === "club") {
    await clubService.linkClubWithAccount(formData.id, userId);
  }

  if (formData.type === "member") {
    await memberService.linkMemberWithAccount(formData.id, userId);
  }
  emits("save");
};
</script>

<style></style>
