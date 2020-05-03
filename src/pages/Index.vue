<template>
  <q-layout>
    <q-page-container>
      <q-page padding class="flex flex-center">
        <q-card style="width:400px">
          <q-toolbar class="bg-primary text-white text-center">
            <q-toolbar-title>Register</q-toolbar-title>
          </q-toolbar>
          <q-card-section>
            <q-form @submit.prevent="register">
              <q-input
                v-model="user._id"
                label="username"
                type="text"
                outlined
                name="username"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type something']"
              />
              <q-input
                v-model="user.password"
                label="password"
                type="password"
                outlined
                name="password"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type something']"
              />
              <q-btn
                label="Register"
                color="primary"
                type="submit"
              />
            </q-form>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { messaging, remoteDB } from 'boot/config'
export default {
  data: () => ({
    user: {
      date: new Date().toLocaleDateString()
    }
  }),
  methods: {
    register () {
      messaging.getToken().then(token => {
        return remoteDB.put({
          _id: this.user._id,
          password: this.user.password,
          token
        }).then(response => {
          alert('Account Created Successfully')
        })
      }).catch(error => {
        alert('Unable to create account')
        return error
      })
    }
  },
  mounted () {
    messaging.requestPermission().then(response => {
      alert('You have successfully enabled push notifications')
    }).catch(error => {
      alert('You wont receive push notifications in future')
      return error
    })
  }
}
</script>

<style>

</style>
