import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { CommonModule } from '@angular/common';
import { UserType } from '../models/users';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from '../../firebaseConfig';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserProfileComponent, CommonModule, RouterOutlet, NavbarComponent, HttpClientModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'my-app';

  // users = [
  //   { id: 1, isDoubled: true, name: "abhinav", age: 20 },
  //   { id: 2, isDoubled: true, name: "user", age: 21 },
  //   { id: 3, isDoubled: true, name: "user", age: 22 },
  //   { id: 4, isDoubled: false, name: "User", age: 23 },
  //   { id: 5, isDoubled: true, name: "test", age: 84 },
  //   { id: 6, isDoubled: true, name: "User", age: 95 },
  //   { id: 7, isDoubled: true, name: "dd", age: 106 },

  // ]

  // receivedData(e: UserType) {
  //   console.log("🚀 ~ AppComponent ~ receivedData ~ e:", e)

  // }
constructor(){
  initializeApp(firebaseConfig);
}
}
