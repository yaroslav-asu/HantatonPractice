<template>
  <div
    class="burger-menu_button"
  />
</template>

<script>
export default {
  name: "BurgerMenuButton",
};
</script>

<style lang="scss" scoped>
$burger_border-radius: 5px;
$burger_color: $primary;
$burger-layer_delta: 8px;
.burger-menu_button {
  width: 25px;
  height: 4px;
  background-color: $burger_color;
  border-radius: $burger_border-radius;
  position: relative;
  cursor: pointer;
  z-index: 1000;

  &:after {
    content: "";
    width: 100%;
    height: 100%;
    background-color: $burger_color;
    border-radius: $burger_border-radius;
    position: absolute;
    top: $burger-layer_delta;
    left: 0;
  }

  &:before {
    content: "";
    width: 100%;
    height: 100%;
    background-color: $burger_color;
    border-radius: $burger_border-radius;
    position: absolute;
    top: -$burger-layer_delta;
    left: 0;
  }
}
</style>
