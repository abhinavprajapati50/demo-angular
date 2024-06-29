import { Injectable } from '@angular/core';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private uid?: string
  constructor() {

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      console.log(this.isAuthenticated());
      
      if (user) {

        const uid = user.uid;
        this.uid =uid 
        console.log("🚀 ~ User is loggedin:", user.email)
      } else {
        this.uid = undefined;
        console.log("🚀 ~ User is loggedout:")

      }
    });
  }

  isAuthenticated() {
    return this.uid ? true : false;
  }

  getUid() {
  return this.uid;
  }
  registerUser(email: string, password: string) {

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log("🚀 ~ AuthService ~ .then ~ user:", user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("🚀 ~ AuthService ~ registerUser ~ errorMessage:", errorMessage)
        // ..
      });
  }

  loginUser(email: string, password: string) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("🚀 ~ AuthService ~ .then ~ user:", user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("🚀 ~ AuthService ~ loginUser ~ errorMessage:", errorMessage)
      });

  }


  logout() {

    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      console.log("🚀 ~ AuthService ~ signOut ~ error:", error)
      // An error happened.
    });
  }
}