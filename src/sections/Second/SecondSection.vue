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
        <div class="photo-wrapper photo">
          <q-img class="photo-wrapper__photo" src="../../assets/images/woman.jpg" />
        </div>
        <div class="photo-wrapper fake-photo" />
        <div class="help-data">

        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ServiceProsElement from "components/Core/ServicePros/ServiceProsElement";
import { ServiceProsClass } from "src/js/ServiceProsClass";

export default {
  name: "SecondSection",
  components: {
    ServiceProsElement
  },
  data() {
    return {
      servicePros: [
        new ServiceProsClass({
          icon: "inbox",
          iconColor: "#5149bf",
          title: this.$t("servicePros.first.title"),
          description: this.$t("servicePros.first.description")
        }),
        new ServiceProsClass({
          icon: "visibility",
          iconColor: "#e42e57",
          title: this.$t("servicePros.second.title"),
          description: this.$t("servicePros.second.description")
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
.second-section {
  height: 100vh;
  display: flex;
  align-items: center;

  .limiter {
    display: flex;

    .text-part {
      width: 50%;

      .title {
        font-size: 70px;
        line-height: 90px;
        font-weight: 400;
        margin-bottom: 60px;
      }

      .pros {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }

    .photo-part {
      width: 50%;
      position: relative;

      .photo-wrapper {
        width: 380px;
        height: 480px;
        border-radius: $border-radius;
        overflow: hidden;
        position: absolute;
        left: 50%;
        top: 50%;
        translate: -50% -50%;
        transform-origin: center center;

        .photo-wrapper__photo {
          height: 100%;
        }
      }

      .photo {
        z-index: 1;
        rotate: -8deg;
        box-shadow: $lite-shadow;
      }

      .fake-photo {
        background-color: $dark;
        z-index: 0;
        rotate: 2deg;
      }
      .help-data{
        width: 250px;
        height: 170px;
        background-color: $light;
        position: absolute;
        border-radius: $border-radius;
        right: 0;
        bottom: 50%;
        translate: 0 50%;
        z-index: 2;
        box-shadow: $lite-shadow;
      }
    }
  }

}


</style>
