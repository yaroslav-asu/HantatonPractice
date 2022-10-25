<template>
  <header class="header q-py-sm">
    <div class="limiter">
      <div class="logo flex items-center">
        <LogoImage />
        <p class="logo-text">
          & Exp
        </p>
      </div>
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
import LogoImage from "components/Core/Logo/LogoImage";
import HeaderNavigation from "components/Core/Header/Naviagation/HeaderNavigation";
import UserEntry from "components/Core/Header/UserEntry/UserEntry";

export default {
  name: "HeaderComponent",
  components: {
    LogoImage,
    HeaderNavigation,
    UserEntry
  },
  data(){
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
    }
  }
};
</script>

<style lang="scss" scoped>
.header{
  width: 100%;
  position: fixed;
  background-color: white;
  z-index: 100;
}
.limiter{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo-text{
  font-size: 1.5rem;
  margin-left: 10px !important;
}
.header__user-entry{
  margin-left: 100px;
}
</style>
