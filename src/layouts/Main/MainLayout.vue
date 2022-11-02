<template>
  <q-layout class="main-page lHh Lpr lFf">
    <HeaderComponent/>
    <q-page-container class="content" >
      <router-view />
    </q-page-container>
    <FooterComponent />
  </q-layout>
</template>

<script>
import HeaderComponent from "components/Core/Header/HeaderComponent";
import FooterComponent from "components/Core/Footer/FooterComponent";

export default {
  name: "MainPage",
  components: {
    HeaderComponent,
    FooterComponent
  }

};
</script>

<style lang="scss" scoped>
.content{
  padding-top: $header-height;
}
</style>
