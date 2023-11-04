<template>
  <AppPagesWrapper>
    <div class="top-image"/>
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
            {{ $user.email }}
          </p>
        </div>
      </div>
      <div class="middle-part">
        <slot/>
      </div>
      <div class="bottom-part">
        <slot name="bottom"/>
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
  background-image: url("src/assets/images/accountTemplateGradient.jpeg");
  background-repeat: no-repeat;
  background-position: 70% 50%;
  background-size: cover;
  border-radius: 20px 20px 0 0;
  overflow: hidden;
}

.content {
  height: 75%;
  justify-self: end;
  padding: 0 40px 30px;
  display: flex;
  flex-direction: column;

  flex-grow: 1;
  .top-part {
    display: flex;
    align-items: center;
    height: 120px;
    position: relative;
    margin-bottom: 20px;
    gap: 20px;

    .user-image-wrapper {
      box-sizing: content-box;
      align-self: end;
      width: 150px;
      height: 150px;
      border: 3px solid $light;
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
    flex-grow: 1;

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

@media (max-width: 600px) {
  .content {
    padding: 0 20px 15px;
  }
  .top-part {
    transform: translateY(-25px);
    margin-bottom: 0 !important;

    .user-image-wrapper {
      width: 100px !important;
      height: 100px !important;
    }
  }
  .top-image{
    height: 17% !important;
  }
}

@media (max-width: 420px) {
  .content {
    padding: 0 10px 10px;
  }
  .top-part {
    transform: translateY(-10px);

    .user-image-wrapper {
      width: 80px !important;
      height: 80px !important;
    }
  }
}
</style>
