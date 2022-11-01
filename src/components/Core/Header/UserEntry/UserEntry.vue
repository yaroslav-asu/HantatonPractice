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
      <q-skeleton
        type="circle"
        class="user-image"
      />
      <div class="account-name">
        {{ userAccount }}
      </div>
      <q-menu
        fit
        :offset="[0, 8]"
      >
        <q-list>
          <q-item
            clickable
            v-close-popup
            style="align-items: center"
            to="/profile"
          >
            {{ $t("userEntry.menu.profile") }}
          </q-item>
          <q-item
            clickable
            v-close-popup
            style="align-items: center"
            to="/logout"
          >
            {{ $t("userEntry.menu.signOut") }}
          </q-item>
        </q-list>
      </q-menu>
    </div>

  </div>
</template>

<script>
export default {
  name: "UserEntry",
  props: {
    menu: Boolean
  },
  data() {
    return {
      isLoggedIn: true,
      userAccount: "asdf"
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

  .user-image {
    width: 50px;
    height: 50px;
    margin-right: 15px;
  }

  .account-name {
    font-size: 20px;
  }


}
</style>
