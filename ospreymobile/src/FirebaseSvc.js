import firebase from 'firebase';
class FirebaseSvc {
  constructor() {
    if (!firebase.apps.length) { //avoid re-initializing
      firebase.initializeApp({
        apiKey: "AIzaSyDHK9n46WoVbHCIKF5Wi6EGR7nyTW9463U",
        authDomain: "osprey-931cd.firebaseapp.com",
        databaseURL: "https://osprey-931cd.firebaseio.com",
        projectId: "osprey-931cd",
        storageBucket: "osprey-931cd.appspot.com",
        messagingSenderId: "340947148040"
      });
     }
  };

  login = async(user, success_callback, failed_callback) => {
    await firebase.auth()
      .signInWithEmailAndPassword(user.email, user.password)
    .then(success_callback, failed_callback);
  };

  parse = snapshot => {
    const { timestamp: numberStamp, text, user } = snapshot.val();
    const { key: _id } = snapshot;
    const timestamp = new Date(numberStamp);
    const message = {_id, timestamp, text, user};
    return message;
  };

  ref() {
    return firebase.database().ref('messages');
  }

  refOn = callback => {
    this.ref
      .limitToLast(20)
      .on('child_added', snapshot => callback(this.parse(snapshot)));
  };

  timestamp(){
    return firebase.database.ServerValue.TIMESTAMP;
  }

  send = messages => {
    for (let i = 0; i < messages.length; i++) {
      const { text, user } = messages[i];
      const message = {
        text,
        user,
        createdAt: this.timestamp,
      };
      this.ref.push(message);
    }
  };

  uid() {
    return (firebase.auth().currentUser || {}).uid;
  }

}
const firebaseSvc = new FirebaseSvc();
export default firebaseSvc;