<template>
  <q-layout class="app">
    <div class="limiter">
      <nav class="app-navigation">
        <LogoComponent class="q-mb-lg" />
        <q-tabs
          class="tabs beautiful-active-tab"
          vertical
          no-caps
          content-class="app-navigation__tabs-content column"
          v-model="currentTab"
        >
          <div class="q-tabs__wrapper">
            <div
              v-for="blockTitle in Object.keys(links)"
              :key="blockTitle"
              :class="blockTitle"
            >
              <q-route-tab

                class="tab tab-text_start"
                content-class="tab-content tab-content-flex"
                :ripple="false"
                v-for="routeTabTitle in Object.keys(links[blockTitle])"
                :key="routeTabTitle"
                :name="routeTabTitle"
                :to="links[blockTitle][routeTabTitle].to"
              >
                <q-icon
                  :name="links[blockTitle][routeTabTitle].icon"
                  class="tab-content__icon q-mr-sm"
                />
                <p class="tab-content__text">
                  {{ links[blockTitle][routeTabTitle].title }}
                </p>
              </q-route-tab>
            </div>
          </div>
        </q-tabs>
        <div class="navigation-info navigation-el--bordered q-my-lg">

        </div>
        <UserEntry
          class="user-entry navigation-el--bordered"
        />
      </nav>
      <q-page-container class="content">
        <router-view />
      </q-page-container>
    </div>

  </q-layout>
</template>

<script>
import UserEntry from "components/Core/Header/UserEntry/UserEntry";
import LogoComponent from "components/Core/Logo/LogoComponent";

export default {
  name: "ProfilePage",
  components: {
    LogoComponent,
    UserEntry
  },
  data() {
    return {
      currentTab: this.$route.path.slice(1),
      links: {
        "tabs-top": {
          home: {
            icon: "o_home",
            title: this.$t("pages.home"),
            to: "/"
          }
        },
        "tabs-bottom": {
          settings: {
            icon: "o_settings",
            title: this.$t("pages.settings"),
            to: "/settings"
          }
        }
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.app {
  width: 100vw;
  height: 100vh;

  .limiter {
    display: flex;
    height: 100%;

    .app-navigation {
      width: 20%;
      display: flex;
      flex-direction: column;
      padding: 20px;

      .tabs {
        flex-grow: 1;

        .app-navigation__tabs-content {
          .q-tab {
            .tab-content__icon {
              font-size: 20px;
            }

            .tab-content__text {
              font-size: 16px;
              font-weight: 600;
              color: rgba(black, 0.8);
            }
          }

          .q-tabs__wrapper {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }

          display: flex;
          flex-direction: column;
        }
      }

      .navigation-el--bordered {
        box-sizing: border-box;
        border: 2.5px solid $grey;
        padding: 10px 15px;
        border-radius: 10px 6px;
      }

      .navigation-info {
        height: 400px;
      }
    }

    .content {
      width: 80%;
      //padding: 20px;
    }
  }
}
</style>
