<template>
  <div class="email-input">
    <q-input
      v-model="value"
      borderless
      class="input"
      :placeholder="$t('emailInput.placeholder')"
      />
    <q-btn
      :label="$t('header.userEntry.signUp')"
      color="primary"
      class="button big-button"
      :ripple="false"
      no-caps
    />
  </div>

</template>

<script>
export default {
  name: "EmailInput",
  props: {
    modelValue: {}
  },
  data() {
    return {
      value: this.modelValue
    };
  }
};
</script>

<style lang="scss" scoped>
.email-input {
  box-shadow: 5px 7px 200px -10px rgba(34, 60, 80, 0.2);
  //padding-bottom: 0;
  height: 70px;
  padding: 0 10px 0 20px;
  width: 70%;
  display: flex;
  align-items: center;
}
.input{
  width: 70%;
  font-size: 20px;
}

.button {
  border-radius: 5px;
  width: 30%;
}
</style>
