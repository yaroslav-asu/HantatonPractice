<template>
  <section class="section second-section">
    <div class="limiter">
      <div class="text-part">
        <p class="title">
          {{ $t("secondSection.title") }}
        </p>
        <div class="pros">
          <ServiceProsElement
            v-for="el in servicePros"
            :key="el.title"
            :service-pros-element="el"
            class="q-mb-lg"
          />
        </div>

      </div>
      <div class="photo-part">
        <PhotoComponent class="first-photo" />
        <PhotoComponent class="second-photo" />
      </div>
    </div>
  </section>
</template>

<script>
import PhotoComponent from "components/Core/Photo/PhotoComponent";
import ServiceProsElement from "components/Core/ServicePros/ServiceProsElement";
import { ServiceProsClass } from "src/js/ServiceProsClass";

export default {
  name: "SecondSection",
  components: {
    PhotoComponent,
    ServiceProsElement
  },
  data() {
    return {
      servicePros: [
        new ServiceProsClass({
          icon: "inbox",
          iconColor: "#5149bf",
          title: this.$t("servicePros.first.title"),
          description: this.$t("servicePros.first.description"),
        }),
        new ServiceProsClass({
          icon: "visibility",
          iconColor: "#e42e57",
          title: this.$t("servicePros.second.title"),
          description: this.$t("servicePros.second.description"),
        }),
        new ServiceProsClass({
          icon: "favorite_border",
          iconColor: "#f5b345",
          title: this.$t("servicePros.third.title"),
          description: this.$t("servicePros.third.description")
        })

      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.text-part {
  width: 50%;

  .title {
    font-size: 70px;
    line-height: 90px;
    font-weight: 400;
    margin-bottom: 60px;
  }
  .pros{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    //padding-right: 30px;
  }
}
</style>
