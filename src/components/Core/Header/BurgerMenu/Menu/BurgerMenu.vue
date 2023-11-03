<template>
  <div class="burger-menu_wrapper">
    <BurgerMenuButton
      @click="isOpen = !isOpen"
    />
    <nav
      class="burger-menu"
      :style="{
        transform: `translateX(${isOpen ? 0 : '100%'})`
      }"
    >
      <h2 class="title">
        {{ $t("menu") }}
      </h2>
      <router-link
        v-for="page in pages ? pages : {}"
        :key="page.title"
        class="burger-menu_link"
        :to="page.link"
        @click="isOpen = false"
      >
        {{ $t(`pages.${page.title}`) }}
      </router-link>
      <LanguageSwitcher/>
      <router-link to="dashboard" class="user-entry__link">
        <UserEntry class="user-entry"/>
      </router-link>
    </nav>
  </div>
</template>

<script>
import BurgerMenuButton from "components/Core/Header/BurgerMenu/Button/BurgerMenuButton";
import UserEntry from "components/Core/Header/UserEntry/UserEntry";
import LanguageSwitcher from "components/Core/Header/LanguageSwitcher.vue";

export default {
  name: "BurgerMenu",
  components: {
    LanguageSwitcher,
    BurgerMenuButton,
    UserEntry
  },
  props: {
    pages: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isOpen: false
    };
  }
};
</script>

<style lang="scss" scoped>

.burger-menu_wrapper {
  z-index: 1;

  .logo {
    margin-bottom: 30px;
  }

  .burger-menu {
    width: 100vw;
    height: 100vh;
    background-color: $light;
    position: absolute;
    z-index: 1;
    float: right;
    left: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease;

    .title {
      margin-bottom: 60px;
    }

    .burger-menu_link {
      font-size: 26px;
      margin: 10px 0;
    }

    .user-entry__link {
      margin-top: 60px;
    }
  }
}
</style>
