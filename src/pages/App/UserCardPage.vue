<template>
  <AppPagesWrapper>
    <q-img
      src="https://images.unsplash.com/photo-1503756234508-e32369269deb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2VhfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
      class="card-image"
    >

    </q-img>
    <p class="title">
      Title
    </p>
  </AppPagesWrapper>
</template>

<script>
import AppPagesWrapper from "components/Pages/App/AppPagesWrapper";

export default {
  name: "UserCardPage",
  components: {
    AppPagesWrapper
  }
};
</script>

<style lang="scss" scoped>
.card-image {
  width: 100%;
  height: 218px;
  border-radius: 20px 20px 0 0;

}
.title{
  font-size: 40px;
  font-weight: 600;
  margin: 0;
  padding: 10px;
}
</style>
