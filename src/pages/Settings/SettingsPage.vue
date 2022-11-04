<template>
  <q-page class="settings-page ">
    <div class="wrapper">
      <div class="top-image" />
      <div class="content">
        <div class="top-part">
          <q-avatar class="user-image-wrapper">
            <q-img
              class="user-image"
              src="https://sun1-26.userapi.com/s/v1/ig2/LV10_OFN1o0g-pjzVrAIZlg9iPwNxsaSzE2IZTkjvdVNNWcinl88L_zDIWwaGizbTFj4XX24c90UgHwg-9zwxZEN.jpg?size=200x200&quality=95&crop=102,0,581,581&ava=1"
            />
          </q-avatar>

          <div class="text">
            <h3 class="title">
              {{ $t("pages.settings") }}
            </h3>
            <p class="email">
              asdf
            </p>
          </div>
        </div>
        <div class="middle-part">
          <q-tabs
            align="left"
            no-caps
            v-model="activeTab"
          >
            <q-tab
              class="tab"
              :ripple="false"
              v-for="tab in tabs"
              :key="tab"
              :name="tab.name"
              :label="tab.label"
            />
            <q-separator class="separator" />
          </q-tabs>
          <q-tab-panels
            v-model="activeTab"
            swipeable
            vertical
            class="tab-panels"
          >
            <q-tab-panel
              name="password"
              class="tab-panel"
            >
              <PasswordSettingsTab />
            </q-tab-panel>
            <q-tab-panel
              name="profile"
              class="tab-panel"
            >
              <ProfileSettingsTab />
            </q-tab-panel>
            <q-tab-panel
              name="language"
              class="tab-panel"
            >
              <LanguageSettingsTab />
            </q-tab-panel>
          </q-tab-panels>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import PasswordSettingsTab from "pages/Settings/Tabs/Password/PasswordSettingsTab";
import ProfileSettingsTab from "pages/Settings/Tabs/Profile/ProfileSettingsTab";
import LanguageSettingsTab from "pages/Settings/Tabs/Language/LanguageSettingsTab";

export default {
  name: "SettingsPage",
  components: {
    ProfileSettingsTab,
    PasswordSettingsTab,
    LanguageSettingsTab
  },
  data() {
    return {
      activeTab: "profile"
    };
  },
  computed: {
    tabs() {
      return {
        profile: {
          name: "profile",
          label: this.$t("settings.profile.title")
        },
        password: {
          name: "password",
          label: this.$t("settings.password.title")
        },
        language: {
          name: "language",
          label: this.$t("settings.language.title")
        }
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.settings-page {
  height: 100vh;
  padding: 20px;

  .wrapper {
    border-radius: 20px;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    box-shadow: $lite-shadow-1;


    .top-image {
      height: 25%;
      width: 100%;
      background: rgb(206, 75, 245);
      background: linear-gradient(30deg, rgba(206, 75, 245, 1) 0%, rgba(254, 245, 155, 1) 44%, rgba(245, 72, 112, 1) 100%);
      border-radius: 20px 20px 0 0;
      overflow: hidden;
    }

    .content {
      height: 75%;
      justify-self: end;
      padding: 0 40px 30px;
      display: flex;
      flex-direction: column;

      .top-part {
        display: flex;
        align-items: center;
        height: 120px;
        position: relative;
        margin-bottom: 20px;

        .user-image-wrapper {
          box-sizing: content-box;
          position: relative;
          align-self: end;
          width: 150px;
          height: 150px;
          border-radius: 50%;
          background-color: $grey;
          border: 3px solid $light;
          margin-right: 20px;
          box-shadow: $lite-shadow-2;

          .user-image {
            height: 100%;
          }
        }

        .text {
          .title {
            font-size: 35px;
            font-weight: 600;
            color: $dark;
            opacity: 1;

          }
        }
      }

      .middle-part {
        display: flex;
        flex-direction: column;
        overflow: auto;

        .separator {
          height: 2px;
          background-color: $grey;
          position: absolute;
          bottom: 0;
          width: 100%;
        }

        .tab-panels {
          overflow-y: auto;
        }
      }
    }
  }

}


</style>
