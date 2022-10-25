<template>
  <div class="photo">
    <slot/>
  </div>
</template>

<script>
export default {
  name: "PhotoComponent"
};
</script>

<style lang="scss" scoped>
.photo {
  width: 350px;
  height: 600px;
  border-radius: 20px;
}

</style>
