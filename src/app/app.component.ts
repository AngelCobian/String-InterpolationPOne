import { Component, OnInit } from '@angular/core';
// this is importing the info form the file and it named Person.
import { Person } from './classes/person';
 @Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
title = 'app';
// creating new people. Using the method shown to us on yesterday? i'm not sure.
hello: Person[] = [
  new Person('Mrs/Mr','hello','World',''),
  new Person('Mr/Mrs', 'World', 'Hello', 'Coalinga')
];


// this is a used on {{heading}} in html page
heading = 'Person Details';
// Person is the being used for the constructor and piping in the info form file
Person: any;

// this is setting up newpl with info for the constructor
// public newpl: Person = new Person(); // Nevermind


// this is for display in html
result: any;

// this setting up to display.
constructor(){
  this.result = this.hello;
  // just for test
  // console.log(this.newpl.peoples)
}

ngOnInit() {

}
}
