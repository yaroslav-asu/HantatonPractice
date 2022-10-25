<template>
  <div class="wrapper">
    <q-icon
      class="icon"
      :name="name"
      :style="{
          color: color
        }"
    />
  </div>
</template>

<script>
export default {
  name: "IconComponent",
  props: {
    name: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: false
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 15px;
  background-color: $light;
  border-radius: 10px;
  box-shadow: $lite-shadow;

  .icon {
    font-size: 30px;
  }
}
</style>
