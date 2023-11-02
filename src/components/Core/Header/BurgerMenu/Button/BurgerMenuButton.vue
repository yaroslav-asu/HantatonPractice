<template>
  <div class="burger-menu_button" :class="{'burger-menu--active': active}" @click="active = !active">
    <span class="burger-menu__element"/>
  </div>
</template>

<script>
export default {
  name: "BurgerMenuButton",
  data() {
    return {
      active: false,
    }
  }
};
</script>

<style lang="scss" scoped>
$burger_border-radius: 5px;
$burger_color: $text-color;
$burger-layer_delta: 8px;
$burger-element_height: 4px;

.burger-menu_button {
  width: 25px;
  height: 20px;
  border-radius: $burger_border-radius;
  position: relative;
  cursor: pointer;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &.burger-menu--active {
    &:before {
      rotate: 45deg;
      top: 50%;
      transform-origin: center center;
      transform: translateY(-50%);
      left: -5%;
    }

    .burger-menu__element {
      opacity: 0;
    }

    &:after {
      rotate: -45deg;
      top: 50%;
      transform-origin: center center;
      transform: translateY(-50%);
      left: 5%;
    }
  }

  .burger-menu__element {
    width: 100%;
    height: $burger-element_height;
    background-color: $burger_color;
    border-radius: $burger_border-radius;
    transition: all 0.3s ease;
  }

  &:before {
    content: "";
    width: 100%;
    height: $burger-element_height;
    background-color: $burger_color;
    border-radius: $burger_border-radius;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.3s ease;
  }

  &:after {
    content: "";
    width: 100%;
    height: $burger-element_height;
    background-color: $burger_color;
    border-radius: $burger_border-radius;
    position: absolute;
    bottom: 0;
    left: 0;
    transition: all 0.3s ease;
  }
}
</style>
