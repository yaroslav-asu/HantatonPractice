<template>
  <div class="user-entry">
    <div v-if="!isLoggedIn">
      <q-btn
        no-caps
        flat
        class="button q-mr-md"
        :label="$t('header.userEntry.login')"
        :ripple="false"

      />
      <q-btn
        no-caps
        color="primary"
        class="button"
        :label="$t('header.userEntry.signUp')"
        :ripple="false"
      />
    </div>
    <div class="account-name" v-else>
      {{userAccount}}
    </div>

  </div>
</template>

<script>
export default {
  name: "UserEntry",
  data() {
    return {
      isLoggedIn: true,
      userAccount: "asdf"
    };
  }
};
</script>

<style lang="scss" scoped>
.account-name{
  font-size: 20px;
}
</style>
