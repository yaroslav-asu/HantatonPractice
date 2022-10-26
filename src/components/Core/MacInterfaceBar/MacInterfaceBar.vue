<template>
  <div class="mac-interface-bar">
    <div class="buttons">
      <div class="interface-button close"></div>
      <div class="interface-button full-size"></div>
      <div class="interface-button minimize"></div>
    </div>
    <div class="title">
      <span class="mac-interface-bar__title-text">Title</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "MacInterfaceBar"
};
</script>

<style lang="scss" scoped>
.mac-interface-bar {
  display: flex;
  align-items: center;
  padding: 10px 10px;
}

.buttons {
  display: flex;
  opacity: .6;

  .close {
    background-color: #FF0012;
  }

  .full-size {
    background-color: #ffb100;
  }

  .minimize {
    background-color: #00aa00;
  }

  .interface-button {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    margin-right: 5px;
  }

}

</style>
