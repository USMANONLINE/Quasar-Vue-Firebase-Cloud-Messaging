<template>
  <q-layout>
    <q-page-container>
      <q-page padding>
        <q-list bordered>
          <q-item clickable v-ripple v-for="(user, index) in users" :key="index" @click="pushMessage(user)">
            <q-item-section>{{ user.doc._id }}</q-item-section>
          </q-item>
        </q-list>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import Axios from 'axios'
import { remoteDB } from 'boot/config'
export default {
  data: () => ({
    users: []
  }),
  methods: {
    pushMessage (user) {
      user.doc.message = 'Testing fcm'
      Axios.post('http://localhost:3000/send', user.doc).then(response => {
        console.log(response)
      }).catch(error => {
        console.log(error)
      })
    }
  },
  mounted () {
    remoteDB.allDocs({ include_docs: true }).then(response => {
      this.users = response.rows
    }).catch(error => {
      console.log(error)
      return error
    })
  }
}
</script>
