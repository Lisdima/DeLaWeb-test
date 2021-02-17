<template>
  <div class="home">
    <v-app-bar color="#999">
      <div class="container">
        <p class="company-name">DeLaWeb</p>
        <v-dialog v-model="dialog" width="400">
          <template v-slot:activator="{ on, attrs }">
            <v-btn elevation="2" class="input-btn" v-bind="attrs" v-on="on">Войти</v-btn>
          </template>

          <v-card>
            <v-card-title class="headline grey lighten-2">
              Авторизация
            </v-card-title>

            <div class="datasets">
              <input class="dataset" type="email" v-model="email" placeholder="Введите email" />
              <input class="dataset" type="password" v-model="password" placeholder="Введите пароль" />
            </div>

            <v-divider></v-divider>

            <v-card-actions>
              <v-btn class="exit-dialog" color="primary" text @click="dialog = false">
                Закрыть
              </v-btn>
              <v-btn class="input-profile" color="primary" text @click="login">
                Выполнить
                <!-- @click="$router.push('/profile')" -->
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </v-app-bar>

    <div class="inner">
      <div class="container">
        <div class="inner-main">
          <div class="inner-title">Vue CLI</div>
          <div class="inner-cards">
            <div class="card">
              <h3>Богатые возможности</h3>
              <h4>
                Поддержка из коробки Babel, TypeScript, ESLint, PostCSS, PWA, модульное тестирование & End-to-end тестирование.
              </h4>
            </div>

            <div class="card">
              <h3>Расширяемость</h3>
              <h4>
                Система плагинов позволяет сообществу создавать и делиться решениями для общих задач.
              </h4>
            </div>

            <div class="card">
              <h3>Конфигурация внутри</h3>
              <h4>
                Vue CLI полностью настраивается без извлечения конфигурации. Это позволит обновлять проект без проблем в долгой гонке.
              </h4>
            </div>
          </div>

          <div class="inner-cards">
            <div class="card">
              <h3>Графический пользовательский интерфейс</h3>
              <h4>
                Создание, разработка и управление вашими проектами через графический интерфейс.
              </h4>
            </div>

            <div class="card">
              <h3>Мгновенное прототипирование</h3>
              <h4>
                Мгновенный прототип ваших новых идей в одном файле Vue.
              </h4>
            </div>

            <div class="card">
              <h3>Готовность к будущему</h3>
              <h4>
                С лёгкостью поставлять код в ES2015 для современных браузеров, или создавать ваши компоненты Vue как нативные веб-компоненты.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="container"> -->
    <div class="card-images">
      <v-carousel>
        <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" reverse-transition="fade-transition" transition="fade-transition"> </v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  // name: "home",
  // async mounted() {
  //   this.$store.dispatch("fetchUsers");
  // },
  // computed: {
  //   allUsers() {
  //     return this.$store.getters.allUsers;
  //   },
  // },
  // name: 'home',
  //   async mounted() {
  //  let response = await fetch ('https://jsonplaceholder.typicode.com/users?_limit=2')
  //  let users = await response.json()
  //  this.users = users
  // },
  data() {
    return (
      {
        email: "",
        password: "",
        users: [],
      },
      {
        items: [
          {
            src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
          },
          {
            src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
          },
          {
            src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
          },
          {
            src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
          },
        ],
        dialog: false,
      }
    );
  },
  methods: {
    login() {
      if (this.email === 'Sincere@april.biz' && this.password === 'Bret') {
      this.$router.push("/profile");
      } if (this.email !== 'Sincere@april.biz' && this.password !== 'Bret') {
        alert('Неверный email или пароль')
      } 
    // this.$store.dispatch("updateUsers", {
    //   email: this.email,
    //   username: this.username
    // });
      // this.$router.push("/profile");
    },
  },
};
</script>

<style lang="sass" scoped>
.container
  display: flex
  justify-content: space-between
  max-width: 1200px
  width: 100%
  margin: 0 auto

.company-name
  font-size: 20px
  margin: auto 0
  color: black
.company-name:hover
  cursor: default

.card-images
  width: 100%
  margin: 50px auto


.inner
  margin: 30px 0

.inner-main
  width: 100%

.inner-title
  font-size: 46px
  margin: 0 auto 30px
  text-align: center

.inner-cards
  display: flex
  justify-content: space-between
  margin-bottom: 30px
  .card
    max-width: 300px
    width: 100%
    h3
      margin-bottom: 15px
      font-size: 20px
      color: #3a5169
    h4
      font-size: 14px
      color: #4e6e8e
.v-card__title
  justify-content: center
.v-card__actions
  justify-content: space-between

.datasets
  text-align: center
  margin: 30px
  .dataset
    margin: 20px 0
    padding: 10px 15px
    border: 3px solid #eceef2
    border-radius: 15px
    opacity: 0.7
    transition: border 0.5s linear, background-color 0.3s linear
  .dataset:invalid
    border: 3px solid red
  .dataset:hover
    opacity: 1
    border: 3px solid grey
  .dataset:focus
    background-color: #eceef2
    outline: none
    border: 3px solid grey
</style>
