<template>
  <div class="log-reg-wrapper">
    <div class="form-part">
      <q-form
        class="from"
        @submit.prevent="onSubmit"
        ref="form"
      >
        <LogoComponent class="logo" />
        <q-input
          v-model="email"
          class="full-width q-mb-md"
          :label="$t('email')"
          :rules="emailRule"
        >
          <template v-slot:append>
            <q-icon name="o_person" />
          </template>
        </q-input>
        <q-input
          v-model="password"
          class="full-width  q-mb-md"
          :label="$t('password')"
          :rules="passwordRule"
          type="password"
        >
          <template v-slot:append>
            <q-icon
              name="o_lock_open"
            />
          </template>
        </q-input>
        <q-input
          v-model="password1"
          class="full-width  q-mb-md"
          :label="$t('password')"
          :rules="passwordRule"
          type="password"
          v-if="type === 'register'"
        >
          <template v-slot:append>
            <q-icon
              name="o_lock_open"
            />
          </template>
        </q-input>
        <div class="flex justify-between items-center q-my-lg">
          <q-checkbox
            v-model="remember"
            :label="$t('rememberMe')"
            class="checkbox"
          />
          <router-link
            to="/"
            v-if="this.type === 'login'"
          >
            {{ $t("forgotPassword") }}
          </router-link>
        </div>
        <q-btn
          class="button big-button shadow-12"
          type="submit"
          :label="type=== 'login' ? $t('login') : $t('signup')"
          color="primary"
          :ripple="false"
          no-caps
        />
        <p class="help-text q-mt-lg">
          {{ type === "login" ? $t("dontHaveAccount") : $t("alreadyHaveAccount") }}
          <router-link
            to="/register"
            v-if="this.type === 'login'"
          >
            {{ $t("register") }}
          </router-link>
          <router-link
            to="/login"
            v-else
          >
            {{ $t("login") }}
          </router-link>
        </p>
      </q-form>
    </div>
    <div class="bc-block">
      <img
        class="user_entry-img"
        src="~assets/images/UserEntry.svg"
        alt=""
      />
    </div>
  </div>
</template>

<script>
import LogoComponent from "components/Core/Logo/LogoComponent";
import { validationMixin } from "src/js/validation";

export default {
  name: "LogRegWrapper",
  components: {
    LogoComponent
  },
  mixins: [
    validationMixin
  ],
  mounted() {
    this.type = this.$route.path.replace("/", "");
  },
  data() {
    return {
      email: "",
      password: "",
      password1: "",
      remember: false,
      type: null
    };
  },
  methods: {
    onSubmit(){
      this.$router.push("/dashboard");
    }
  },
  watch: {
    $route(to) {
      this.type = to.path.replace("/", "");
      this.$refs.form.resetValidation();
    }
  }
};
</script>

<style lang="scss" scoped>
.log-reg-wrapper {
  width: 100vw;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;

  .form-part {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .from {
      width: 40%;

      .logo {
        align-self: start;
        margin-bottom: 30px;
      }

      .button {
        width: 70%;
        border-radius: 80px;
      }
    }
  }

  .bc-block {
    position: absolute;
    width: 60vw;
    height: 45vw;
    background-color: $primary;
    right: -10vw;
    bottom: -20vw;
    rotate: 15deg;
    border-radius: 80px;
    transform-origin: center center;

    .user_entry-img {
      position: relative;
      width: 40%;
      left: 10%;
      top: 5%;
      rotate: -15deg;
    }
  }
}
</style>
