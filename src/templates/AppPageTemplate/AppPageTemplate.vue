<template>
  <AppPagesWrapper>
    <div class="top-image" />
    <div class="content">
      <div class="top-part">
        <UserImage
          class="user-image-wrapper"
          :editable="editableUserImage"
        />

        <div class="text">
          <h3 class="title">
            {{ title }}
          </h3>
          <p class="email">
            asdf
          </p>
        </div>
      </div>
      <div class="middle-part">
        <slot />
      </div>
      <div class="bottom-part">
        <slot name="bottom" />
      </div>
    </div>
  </AppPagesWrapper>
</template>

<script>
import UserImage from "components/Core/UserImage/UserImage";
import AppPagesWrapper from "components/Pages/App/AppPagesWrapper";

export default {
  name: "AppPageTemplate",
  components: {
    UserImage,
    AppPagesWrapper
  },
  props: {
    title: {
      type: String,
      required: true
    },
    editableUserImage: Boolean
  }

};
</script>

<style lang="scss" scoped>

.top-image {
  height: 25%;
  width: 100%;
  background: rgb(206, 75, 245);
  background: linear-gradient(30deg, rgba(206, 75, 245, 1) 0%, rgba(254, 245, 155, 1) 44%, rgba(245, 72, 112, 1) 100%);
  border-radius: 20px 20px 0 0;
  overflow: hidden;
}

.content {
  height: 75%;
  justify-self: end;
  padding: 0 40px 30px;
  display: flex;
  flex-direction: column;

  .top-part {
    display: flex;
    align-items: center;
    height: 120px;
    position: relative;
    margin-bottom: 20px;

    .user-image-wrapper {
      box-sizing: content-box;
      align-self: end;
      width: 150px;
      height: 150px;
      border: 3px solid $light;
      margin-right: 20px;
      box-shadow: $lite-shadow-2;

    }

    .text {
      .title {
        font-size: 35px;
        font-weight: 600;
        color: $dark;
        opacity: 1;

      }
    }
  }

  .middle-part {
    display: flex;
    flex-direction: column;
    overflow: auto;

    .separator {
      height: 2px;
      background-color: $grey;
      position: absolute;
      bottom: 0;
      width: 100%;
    }

    .tab-panels {
      overflow-y: auto;
    }
  }
}
</style>
