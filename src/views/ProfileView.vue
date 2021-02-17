<template>
  <div class="profile">
    <v-app-bar color="#999">
      <div class="container">
        <div class="header">
          <div class="header-title">Мой профиль</div>
        </div>
      </div>
    </v-app-bar>
    <v-content>
      <div class="container">
        <div class="page" v-for="user in allUsers" :key="user.id=1">
          <div class="profile-me">
            <v-avatar color="teal" rounded width="100%" height="300px">Avatar</v-avatar>
            <v-btn class="profile-edit" block elevation="2">Редактировать</v-btn>
          </div>
          <div class="profile-info">
            <div class="my-fullname">{{ user.name }}</div>
            <div class="my-adress">
              <div class="params">Город: <span>{{user.address.city}}</span></div>
              <div class="params">Улица: <span>{{user.address.street}}</span></div>
            </div>
            <div class="work-info">
              <div class="work-param">Компания: <span> {{user.company.name}} </span></div>
              <div class="work-param">Девиз: <span>{{user.company.catchPhrase}}</span></div>
            </div>
            <!-- <v-divider></v-divider> -->
          </div>
        </div>
      </div>
    </v-content>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: 'profile',
    async mounted() {
      this.$store.dispatch('fetchUsers')
  },
  computed: {
    allUsers() {
      return this.$store.getters.allUsers
    }
  }
}
</script>

<style lang="sass" scoped>
.container
  max-width: 1200px
  width: 100%
  margin: 0 auto
.header
  width: 100%
  display: flex
  justify-content: space-between
  align-items: center
  .header-title
    font-size: 25px

.v-content
  margin: 30px 0

.page
  display: flex
  // justify-content: space-between

.profile-me
  max-width: 250px
  width: 100%
.profile-edit
  margin-top: 20px

.profile-info
  margin-left: 100px
  .my-fullname
    font-size: 32px
    font-weight: 600
    border-bottom: 2px solid #eceef2
    padding-bottom: 20px

.my-adress
  margin-top: 20px
  border-bottom: 2px solid #eceef2
  .params
  color: grey
  padding-bottom: 20px
  .params span
    margin-left: 10px
    color: #2a5885

.work-info
  margin-top: 20px
  padding-bottom: 20px
  border-bottom: 2px solid #eceef2
  .work-param
    color: grey
    // padding-bottom: 20px
  .work-param span
    margin-left: 10px
    color: #2a5885
</style>
