<template>
  <footer class="footer">
    <div class="limiter">
      <div class="wrapper">
        <div class="logo-part">
          <LogoComponent />
          <p class="description">
            {{ $t("footer.description") }}
          </p>
          <div class="social-networks">

          </div>
        </div>
        <div class="content-part">
          <div class="content">

            <div
              v-for="category in categories"
              :key="category"
              :class="`category-${category.title}`"
            >
              <h4 class="category-title">
                {{ $t(`footer.${category.title}`) }}
              </h4>
              <ul>
                <li
                  class="item"
                  v-for="item in category.items"
                  :key="item"
                >
                  <router-link :to="item.link" class="link">
                    {{ $t(`footer.${item.title}`) }}
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import LogoComponent from "components/Core/Logo/LogoComponent";

export default {
  name: "FooterComponent",
  components: {
    LogoComponent
  },
  data() {
    return {
      categories: {
        about: {
          title: "about",
          items: [
            {
              title: "aboutUs",
              link: "/"
            },
            {
              title: "ourTeam",
              link: "/"
            },
            {
              title: "ourServices",
              link: "/"
            },
            {
              title: "ourClients",
              link: "/"
            }
          ]
        },
        contact: {
          title: "company",
          items: [
            {
              title: "contactUs",
              link: "/"
            },
            {
              title: "ourAddress",
              link: "/"
            },
            {
              title: "ourPhone",
              link: "/"
            },
            {
              title: "ourEmail",
              link: "/"
            }
          ]
        },
        support: {
          title: "support",
          items: [
            {
              title: "faq",
              link: "/"
            },
            {
              title: "privacyPolicy",
              link: "/"
            },
            {
              title: "termsOfUse",
              link: "/"
            },
            {
              title: "support",
              link: "/"
            }
          ]
        }
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.footer {
  height: 50vh;
  padding: 20px 0;

  .limiter {
    display: flex;
    height: 100%;

    .wrapper {
      display: flex;
      align-items: center;
      width: 100%;

      .logo-part {
        width: 30%;

        .logo {
          margin-bottom: 20px;
        }

        .description {
          font-size: 18px;
        }
      }

      .content-part {
        width: 70%;
        display: flex;
        justify-content: center;
      }

      .content {
        width: 80%;
        display: flex;
        justify-content: space-between;
        text-align: center;
        padding: 0 40px;

        .category-title {
          margin-bottom: 30px;
          font-size: 22px;
        }

        .item {
          font-size: 18px;
          margin-bottom: 20px;
        }
      }
    }

  }
}


</style>
