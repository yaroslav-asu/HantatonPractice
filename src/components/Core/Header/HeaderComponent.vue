<template>
  <header class="header q-py-sm">
    <div class="limiter">
        <LogoComponent />
      <div class="flex items-center">
        <HeaderNavigation
          :pages="pages"
        />
        <UserEntry class="header__user-entry"></UserEntry>
      </div>
    </div>
  </header>
</template>

<script>
import LogoComponent from "components/Core/Logo/LogoComponent";
import HeaderNavigation from "components/Core/Header/Naviagation/HeaderNavigation";
import UserEntry from "components/Core/Header/UserEntry/UserEntry";

export default {
  name: "HeaderComponent",
  components: {
    LogoComponent,
    HeaderNavigation,
    UserEntry
  },
  data() {
    return {
      pages: {
        home: {
          title: "home",
          link: "/"
        },
        portfolio: {
          title: "portfolio",
          link: "/portfolio"
        },
        howItWorks: {
          title: "howItWorks",
          link: "/how-it-works"
        },
        team: {
          title: "team",
          link: "/team"
        }
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  position: fixed;
  background-color: white;
  z-index: 100;
}

.limiter {
  display: flex;
  justify-content: space-between;
  align-items: center;
}


.header__user-entry {
  margin-left: 100px;
}
</style>
