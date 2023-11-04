<template>
  <q-layout class="app">
    <div class="limiter">
      <nav
        class="app-navigation"
        :class="{
        'app-navigation--dense': isNavigationDense
      }">
        <div class="navigation-wrapper">
          <button class="dense-navigation_button" @click="isNavigationDense = !isNavigationDense">
            <q-icon name="fa-solid fa-chevron-right" color="primary"/>
          </button>
          <router-link to="/">
            <LogoComponent class="q-mb-lg" :dense="defferedDense"/>
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
                  <p class="tab-content__text" v-if="!defferedDense">
                    {{ links[blockTitle][routeTabTitle].title }}
                  </p>
                </q-route-tab>
              </div>
            </div>
          </q-tabs>
          <UserEntry
            class="user-entry"
            email-size="14px"
            dense
          />
        </div>
      </nav>
      <q-page-container class="content">
        <router-view/>
      </q-page-container>
    </div>
  </q-layout>
</template>

<script>
import UserEntry from "components/Core/Header/UserEntry/UserEntry.vue";
import LogoComponent from "components/Core/Logo/LogoComponent.vue";

export default {
  name: "ProfilePage",
  components: {
    LogoComponent,
    UserEntry
  },
  data() {
    return {
      currentTab: this.$route.path.slice(1),
      isNavigationDense: true,
      defferedDense: true
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
  },
  watch: {
    isNavigationDense(value) {
      setTimeout(() => {
        this.defferedDense = value
      }, 150)
    }
  }
};
</script>

<style lang="scss" scoped>
$transition: all 0.3s linear;
.app {
  width: 100vw;
  height: 100vh;

  .limiter {
    height: 100%;
    display: flex;
    gap: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
    position: relative;

    .app-navigation {
      width: 210px;
      display: flex;
      flex-direction: column;
      transition: $transition;

      .navigation-wrapper {
        background-color: #6f6af8;
        color: white;
        height: 100%;
        display: flex;
        flex-direction: column;
        padding: 20px 0;
        border-radius: 20px;
        box-sizing: content-box;
        position: relative;
        transition: $transition;

        .dense-navigation_button {
          border-radius: 50%;
          background-color: white;
          width: 15px;
          height: 15px;
          position: absolute;
          border: none;
          padding: 5px;
          display: flex;
          right: 0;
          top: 90px;
          transform: translateX(50%) rotate(180deg);
          box-shadow: 1px 52px 130px -29px rgba(0, 0, 0, 1);
          z-index: 2;
          cursor: pointer;
          transition: $transition;
        }

        .logo {
          padding-left: 20px;
          transition: $transition;
        }
      }

      .user-entry {
        padding-left: 20px;
        color: white !important;
        transition: $transition;
      }

      &--dense {
        width: 70px !important;
        box-sizing: content-box;

        .dense-navigation_button {
          transform: translateX(50%) rotate(0deg) !important;
        }

        .navigation-wrapper {

          .logo {
            display: flex;
            justify-content: center;
            padding: 0 !important;
          }
        }

        .user-entry {
          border: none !important;
          padding-left: 0 !important;
        }
      }

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
      flex-grow: 1;
    }
  }
}

@media (max-width: 1300px) {
  .app-navigation {
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    padding: inherit;
    padding-right: 0;
    z-index: 2;
  }
  .content {
    padding-left: 90px;
  }
}
</style>
<style lang="scss">
.app {
  .app-navigation {
    .logo-text {
      color: white;
    }

    .tab-content__text {
      color: white !important;
    }

    .user-email {
      color: white !important;
    }
  }
}

.tab-content {
  flex-wrap: nowrap;
}

.app-navigation--dense {
  .wrapper {
    display: flex;
    justify-content: center;
  }

  .tab-content {
    display: flex;
    justify-content: center;
    align-items: center;

    .q-icon {
      margin-right: 0 !important;
    }
  }
}
</style>
