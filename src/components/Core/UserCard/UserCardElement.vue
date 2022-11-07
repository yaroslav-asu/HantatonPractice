<template>
  <router-link
    class="user-card"
    :to="card.link"
  >
    <q-img
      :src="card.img"
      class="card-image"
      :ratio="16/9"
    >
      <div class="user-info_wrapper">
        <UserImage
          class="user-image"
        />
        <p class="user-email">
          {{ $user.email }}
        </p>
      </div>
      <div class="buttons-wrapper">
        <q-icon class="like-btn icon" name="favorite" />
        <div class="right-wrapper">
          <q-icon class="comment-btn icon" name="maps_ugc" />
          <q-icon class="share-btn icon" name="reply" />
        </div>
      </div>
    </q-img>
    <p class="title">
      {{ card.title }}
    </p>
  </router-link>
</template>

<script>
import UserCard from "src/js/User/Card/UserCard.js";
import UserImage from "components/Core/UserImage/UserImage";

export default {
  name: "UserCardElement",
  components: {
    UserImage
  },
  props: {
    card: {
      type: UserCard,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>

.user-card {
  cursor: pointer;


  .card-image {
    border-radius: 18px;
    margin: 10px 0 10px 0;

    .user-info_wrapper {
      background: none;
      width: 100%;
      padding: 5px;


      .user-image {
        display: inline-block;
        cursor: pointer;
        position: relative;
        float: left;
        border: 2px solid $light;
      }

      .user-email {
        color: $dark;
        position: relative;
        z-index: 1;
        width: fit-content;
        vertical-align: center;
        display: block;
        float: right;
        margin-right: 5px;
        margin-top: 3px;

        &:before {
          content: "";
          width: calc(100% + 15px);
          height: 26px;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          background-color: $light;
          z-index: -1;
          border-radius: 30px;
          opacity: .9;
        }
      }
    }

    .buttons-wrapper {
      position: absolute;
      bottom: 0;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: none;
      padding: 10px;
      font-size: 20px;
      color: $dark;

      .like-btn {
        position: relative;
        z-index: 1;
        transition: color 0.2s ease;

        &:before {
          content: "";
          position: absolute;
          width: calc(100% + 10px);
          height: calc(100% + 10px);
          background-color: $light;
          z-index: -1;
          border-radius: 50%;
          opacity: .9;
          transition: background-color 0.2s ease;
        }

        &:hover {
          color: $light;

          &:before {
            background-color: $primary;
          }
        }
      }

      .right-wrapper {
        position: relative;
        z-index: 1;
        display: flex;
        align-items: center;

        .comment-btn {
          margin-right: 2px;
        }

        &:before {
          content: "";
          position: absolute;
          left: 50%;
          bottom: 50%;
          transform: translate(-50%, 50%);
          width: calc(100% + 15px);
          height: calc(100% + 10px);
          background-color: $light;
          z-index: -1;
          border-radius: 30px;
          opacity: .9;
        }
      }
    }
  }

  .title {
    font-size: 22px;
    font-weight: 500;
    margin-left: 5px;
  }
}
</style>
