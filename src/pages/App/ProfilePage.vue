<template>
  <AppPageTemplate
    :title="$t('pages.profile')"
  >
    <q-infinite-scroll>
      <div class="content">
        <UserCardElement
          :card="card"
        /><UserCardElement
        :card="card"
      /><UserCardElement
        :card="card"
      /><UserCardElement
        :card="card"
      />
      </div>
    </q-infinite-scroll>

  </AppPageTemplate>
</template>

<script>
import AppPageTemplate from "src/templates/AppPageTemplate/AppPageTemplate";
import UserCardElement from "components/Core/UserCard/UserCardElement";
import UserCard from "src/js/User/Card/UserCard";

export default {
  name: "ProfilePage",
  components: {
    UserCardElement,
    AppPageTemplate
  },
  data() {
    return {
      card: new UserCard({
        title: "title",
        img: "https://images.unsplash.com/photo-1503756234508-e32369269deb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2VhfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
      })
    };
  }
};
</script>

<style lang="scss" scoped>
$gap: 10px;
.content{
  display: grid;
  grid-template-columns: get-column(3, $gap);
  grid-gap: $gap;
}
@media (max-width: 1024px) {
  .content{
    grid-template-columns: get-column(2, $gap);
  }
}
@media (max-width: 768px) {
  .content{
    grid-template-columns: get-column(1, $gap);
  }
}
@media (max-width: 600px) {

}
</style>
