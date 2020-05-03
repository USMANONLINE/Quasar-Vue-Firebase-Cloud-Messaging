import PouchDB from 'pouchdb'
import firebase from 'firebase/app'
import '@firebase/messaging'

const remoteDB = new PouchDB('https://database_url')

const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
  measurementId: ''
}

firebase.initializeApp(firebaseConfig)

const messaging = firebase.messaging()
messaging.onMessage(function (payload) {
  console.log('On message ' + payload)
})

export { remoteDB, messaging }
