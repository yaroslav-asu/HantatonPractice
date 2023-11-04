<template>
  <div class="logo">
    <img src="~/assets/logo-round.png" alt="logo" class="logo-image"/>
    <p class="logo-text" v-if="!dense">
      & Exp
    </p>
  </div>
</template>

<script>
export default {
  name: "LogoComponent",
  props: {
    dense: Boolean
  }
};
</script>

<style lang="scss" scoped>
.logo {
  display: flex;
  align-items: center;
}

.logo-image {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  object-fit: cover;
}

.logo-text {
  font-size: 1.5rem;
  margin-left: 10px !important;
  white-space: nowrap;
}
</style>
