<template>
  <q-layout class="app">
    <div class="limiter">
      <nav class="app-navigation">
        <router-link to="/">
          <LogoComponent class="q-mb-lg"/>
        </router-link>
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
                  :name="`fa-solid fa-${links[blockTitle][routeTabTitle].icon}`"
                  class="tab-content__icon q-mr-sm"
                />
                <p class="tab-content__text">
                  {{ links[blockTitle][routeTabTitle].title }}
                </p>
              </q-route-tab>
            </div>
          </div>
        </q-tabs>
        <UserEntry
          class="user-entry navigation-el--bordered"
          email-size="14px"
        />
      </nav>
      <q-page-container class="content">
        <router-view/>
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
      currentTab: this.$route.path.slice(1)
    };
  },
  computed: {
    links() {
      return {
        "tabs-top": {
          home: {
            icon: "house",
            title: this.$t("pages.home"),
            to: "/"
          },
          dashboard: {
            icon: "chart-line",
            title: this.$t("pages.dashboard"),
            to: "/dashboard"
          },
          profile: {
            icon: "circle-user",
            title: this.$t("pages.profile"),
            to: "/profile"
          },
          settings: {
            icon: "gear",
            title: this.$t("pages.settings"),
            to: "/settings"
          },
        },
        "tabs-bottom": {
          logout: {
            icon: "arrow-right-from-bracket",
            title: this.$t("pages.logout"),
            to: "/"
          }
        }
      };
    }
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
        padding: 20px 0;

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

            .tab {
              margin: 4px 0 4px 0;
            }
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
    }
  }
}
</style>
