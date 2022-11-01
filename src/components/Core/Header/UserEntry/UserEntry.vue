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
.wrapper{
  display: flex;
  align-items: center;
  .user-image{
    width: 50px;
    height: 50px;
    margin-right: 15px;
  }
  .account-name {
    font-size: 20px;
  }
}


</style>
