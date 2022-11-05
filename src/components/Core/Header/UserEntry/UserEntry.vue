<template>
  <div class="user-entry">
    <div v-if="!isLoggedIn">
      <q-btn
        no-caps
        flat
        class="button q-mr-md"
        :label="$t('login')"
        :ripple="false"

      />
      <q-btn
        no-caps
        color="primary"
        class="button"
        :label="$t('signUp')"
        :ripple="false"
      />
    </div>
    <div class="wrapper" v-else>
      <UserImage class="user-image-wrapper" />
      <p
        class=""
        :style="{
            fontSize: emailSize,
        }"
      >
        {{ userAccount }}
      </p>
      <q-menu
        fit
        :offset="[0, 8]"
        v-if="menu"
      >
        <q-list>
          <q-item
            v-for="item in menuItems"
            :key="item"
            clickable
            v-close-popup
            style="align-items: center"
            :to="item.to"
          >
            {{ item.title }}
          </q-item>
        </q-list>
      </q-menu>
    </div>

  </div>
</template>

<script>
import UserImage from "src/components/Core/UserImage/UserImage.vue";

export default {
  name: "UserEntry",
  components: {
    UserImage
  },
  props: {
    menu: Boolean,
    emailSize: {
      type: String,
      default: "20px"
    }
  },
  data() {
    return {
      isLoggedIn: true,
      userAccount: this.$user.email,
      menuItems: {
        profile: {
          title: this.$t("pages.profile"),
          to: "/profile"
        },
        dashboard: {
          title: this.$t("pages.dashboard"),
          to: "/dashboard"
        },

        settings: {
          title: this.$t("pages.settings"),
          to: "/settings"
        },
        signOut: {
          title: this.$t("userEntry.menu.signOut"),
          to: "/logout"
        }
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;

  .user-image-wrapper {
    width: 50px;
    height: 50px;
    margin-right: 15px;
  }
}
</style>
