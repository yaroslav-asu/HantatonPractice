<template>
  <q-avatar class="user-image_wrapper">
    <q-img
      class="user-image"
      src="https://sun1-26.userapi.com/s/v1/ig2/LV10_OFN1o0g-pjzVrAIZlg9iPwNxsaSzE2IZTkjvdVNNWcinl88L_zDIWwaGizbTFj4XX24c90UgHwg-9zwxZEN.jpg?size=200x200&quality=95&crop=102,0,581,581&ava=1"
    />
    <div
      class="edit"
      v-if="editable"
      @click="openDialog"
    >
      <q-file
        class="file-picker"
        accept=".jpg, .pdf, image/*"
        loading
        borderless
        v-model="file"
        ref="file-picker"
      />
      <q-icon
        class="edit-icon"
        name="photo_camera"
      />
    </div>
  </q-avatar>
</template>

<script>
export default {
  name: "UserImage",
  props: {
    editable: Boolean
  },
  data() {
    return {
      file: null
    };
  },
  methods: {
    openDialog() {
      this.$refs["file-picker"].pickFiles();
    },
    saveImage() {

    }
  },
  watch: {
    file(){
      this.saveImage()
    }
  }
};
</script>

<style lang="scss" scoped>
.user-image_wrapper {
  box-sizing: content-box;
  background-color: $grey;
  overflow: hidden;

  .user-image {
    height: 100%;
  }

  .edit {
    position: absolute;
    width: 100%;
    height: 100%;
    transition: background-color 0.1s ease;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.5);

      .edit-icon {
        display: block;
      }
    }

    .file-picker {
      display: none;
    }

    .edit-icon {
      display: none;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: $light;
    }
  }
}
</style>
