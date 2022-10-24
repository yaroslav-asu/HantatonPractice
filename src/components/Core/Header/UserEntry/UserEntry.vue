<template>
  <div class="user-entry">
    <q-btn
      no-caps
      flat
      class="button"
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
</template>

<script>
export default {
  name: "UserEntry"
};
</script>

<style lang="scss" scoped>

</style>
