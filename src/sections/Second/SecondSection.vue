<template>
  <section class="section second-section">
    <div class="limiter">
      <div class="text-part">
        <p class="title">
          {{ $t("secondSection.title") }}
        </p>
      </div>
      <div class="photo-part">
        <PhotoComponent class="first-photo"/>
        <PhotoComponent class="second-photo"/>
      </div>
    </div>
  </section>
</template>

<script>
import PhotoComponent from "components/Core/Photo/PhotoComponent";
export default {
  name: "SecondSection",
  components: {
    PhotoComponent
  }
};
</script>

<style lang="scss" scoped>
.text-part {
  width: 50%;

  .title {
    font-size: 70px;
    font-weight: 400;
    margin-bottom: 20px;
  }
}
</style>
