import fireBase from 'firebase/app';
import 'firebase/auth';

const fireBaseConfig =
  {
    apiKey: 'AIzaSyDZJVskBXf6JtE4dmLfeSRjNNSkQRqeN4U',
    authDomain: 'dev1-85af9.firebaseapp.com',
    databaseURL: 'https://dev1-85af9.firebaseio.com',
    projectId: 'dev1-85af9',
    storageBucket: 'dev1-85af9.appspot.com',
    messagingSenderId: '944045209522'
  };


export const fireBaseApp = fireBase.initializeApp(fireBaseConfig);
