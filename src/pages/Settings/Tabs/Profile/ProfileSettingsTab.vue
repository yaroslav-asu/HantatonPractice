<template>
  <SettingsTab
    :title="$t('settings.profile.title')"
    :description="$t('settings.profile.description')"
    :saveButtonTitle="$t('buttons.save')"
    :submitFunc="() => {}"
  >
    <SettingsInputSection
      :title="$t('firstName')"
      v-model="firstName"
    />
    <SettingsInputSection
      :title="$t('lastName')"
      v-model="lastName"
    />
    <SettingsInputSection
      :title="$t('email')"
      v-model="email"
    />
  </SettingsTab>
</template>

<script>
import SettingsTab from "/src/pages/Settings/Tabs/SettingsTab.vue";
import SettingsInputSection from "pages/Settings/Tabs/Section/SettingsInputSection";

export default {
  name: "ProfileSettingsTab",
  components: {
    SettingsTab,
    SettingsInputSection
  }

};
</script>

<style lang="scss" scoped>

</style>
