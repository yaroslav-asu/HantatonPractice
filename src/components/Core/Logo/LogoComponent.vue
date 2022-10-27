<template>
  <div class="logo">
    <div class="logo-image" />
    <p class="logo-text">
     & Exp
    </p>
  </div>

</template>

<script>
export default {
  name: "LogoComponent"
};
</script>

<style lang="scss" scoped>
.logo{
  display: flex;
  align-items: center;
}
.logo-image {
  height: 50px;
  width: 50px;
  background-color: #aeea5a;
  opacity: 0.8;
  border-radius: 50%;
}
.logo-text {
  font-size: 1.5rem;
  margin-left: 10px !important;
}

</style>
