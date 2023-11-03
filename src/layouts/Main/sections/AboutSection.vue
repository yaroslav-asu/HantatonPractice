<template>
  <section class="section second-section">
    <div class="limiter">
      <h2 class="category-title">
        {{ $t("secondSection.title") }}
      </h2>
      <div class="photo-wrapper">
        <div class="photo-substrate">
          <q-img class="photo" src="~assets/images/woman.jpg"/>
        </div>
      </div>

      <div class="pros">
        <ServiceProsElement
          v-for="el in servicePros"
          :key="el.title"
          :service-pros-element="el"
          class="q-mb-lg"
        />
      </div>
    </div>
  </section>
</template>

<script>
import ServiceProsElement from "components/Core/ServicePros/ServiceProsElement.vue";
import {ServiceProsClass} from "src/js/ServiceProsClass";

export default {
  name: "SecondSection",
  components: {
    ServiceProsElement
  },
  data() {
    return {
      show: true,
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
  display: flex;
  align-items: center;

  .limiter {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: min-content auto;
    grid-row-gap: 60px;

    .pros {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .photo-wrapper {
      grid-column: 2;
      grid-row: 1 / 3;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      .photo-substrate {
        aspect-ratio: 380/480;
        width: 380px;
        height: fit-content;
        border-radius: $border-radius;
        background: rgb(206, 75, 245);
        background: linear-gradient(30deg, rgba(206, 75, 245, 1) 0%, rgba(254, 245, 155, 1) 44%, rgba(245, 72, 112, 1) 100%);
        z-index: 0;
        rotate: 2deg;

        .photo {
          z-index: 1;
          rotate: -8deg;
          box-shadow: $lite-shadow;
          height: 100%;
          border-radius: $border-radius;
        }
      }
    }
  }
}

@media (max-width: 1000px) {
  .limiter {
    grid-gap: 20px;
    grid-template-columns: 60% 40% !important;

    .category-title {
      grid-column: 1/3;
      grid-row: 1;
      text-align: center;
    }

    .pros {
      grid-row: 2;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .photo-wrapper {
      grid-row: 2 !important;

      .photo-substrate {
        width: 70% !important;
      }
    }
  }
}

@media (max-width: 700px) {
  .limiter {
    display: flex !important;
    flex-direction: column;
    align-items: center;

    .photo-wrapper {
      display: none !important;
    }
  }
}
</style>
