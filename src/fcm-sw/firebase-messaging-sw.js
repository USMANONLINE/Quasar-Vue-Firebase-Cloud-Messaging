importScripts('https://www.gstatic.com/firebasejs/7.14.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/7.14.0/firebase-messaging.js')

// fill in the empty quotes with your credentials
firebase.initializeApp({
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
  measurementId: ''
})

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  const title = 'Message title';
  const options = {
    icon: '../statics/myicon.png',
    body: payload.data.msg
  };
  return self.registration.showNotification(title, options)
});
