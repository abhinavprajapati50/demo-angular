import { CommonModule, NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output, booleanAttribute } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {UserType} from '../../../models/users'
import { CountryCodePipe } from '../../pipes/country-code.pipe';
function transformFunc  (value: string) {
  // return `Hello ${value.toUpperCase()}`;
  return `${value}`;
}
@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule, CommonModule, CountryCodePipe],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})

export class UserProfileComponent {
  // Get data from parent component
  
  
  // @Input({alias:"Username", transform:transformFunc }) name=""
  
  // ----------------------------------------------------
  // getting data from parent component
  @Input({transform:transformFunc }) name=""
  @Input({ transform:booleanAttribute}) isDoubled=true
  // alias - get the name from the variable name is Username
  // 
  // ----------------------------------------


  // name = "abhjav"
  // age = 20
  // hobbies = false
  // isDisabled = true

  // twoWayDataBind = "Two Way ts to html"

  // oneWayDataBind = "One Way ts to html"
  // onChange(e:Event){

  //   const value = (e.target as HTMLInputElement).value
  //   this.oneWayDataBind=value
  //   console.log("fgfgfg",value)
  // }

  // users=[
  //   {id:1, name:"abhinav", age:20},
  //   {id:2, name:"User", age:21},
  //   {id:3, name:"User", age:22},
  //   {id:4, name:"User", age:23},
  //   {id:5, name:"test", age:84},
  //   {id:6, name:"User", age:95},
  //   {id:7, name:"dd", age:106},
    
  // ]

  // pass the data from child to parent
  phoneNo=1234567891
  @Output() myEvent = new EventEmitter<UserType >()

  sendDataFromChildToParent(){
    this.myEvent.emit({name:this.name, isDoubled:this.isDoubled})
  }


































}
