<template>
  <header class="header q-py-sm">
    <div class="limiter">
      <router-link to="/">
        <LogoComponent/>
      </router-link>
      <div class="content flex">
        <HeaderNavigation
          :pages="pages"
        />
        <UserEntry
          class="header__user-entry"
          menu
        />
      </div>
      <BurgerMenu
        class="burger-menu"
        :pages="pages"
      />
    </div>
  </header>
</template>

<script>
import LogoComponent from "components/Core/Logo/LogoComponent";
import HeaderNavigation from "components/Core/Header/Naviagation/HeaderNavigation";
import UserEntry from "components/Core/Header/UserEntry/UserEntry";
import BurgerMenu from "components/Core/Header/BurgerMenu/Menu/BurgerMenu";

export default {
  name: "HeaderComponent",
  components: {
    BurgerMenu,
    LogoComponent,
    HeaderNavigation,
    UserEntry
  },
  data() {
    return {
      pages: {
        home: {
          title: "home",
          link: "#greeting"
        },
        about: {
          title: "about",
          link: '#about'
        },
        functionality: {
          title: "functionality",
          link: "#functionality"
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

  .limiter {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .content {
      .header__user-entry {
        margin-left: 100px;
      }
    }

    .burger-menu {
      display: none;
    }
  }
}

@media (max-width: 1400px) {
  .header__user-entry {
    margin-left: 0;
  }
  .content {
    flex-grow: 1;
  }
  .header-navigation {
    flex-grow: 1;
    justify-content: center;
  }
}

@media (max-width: 900px) {
  .content {
    display: none;
  }
  .burger-menu {
    display: block !important;
  }

}

</style>
