import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
    apiKey: "AIzaSyDJZZotV5ewKIYbpW28MyVbONJisZWb7rc",
    authDomain: "tunisian-recipe-book.firebaseapp.com",
    databaseURL: "https://tunisian-recipe-book.firebaseio.com",
    projectId: "tunisian-recipe-book",
    storageBucket: "",
    messagingSenderId: "653517602714",
    appId: "1:653517602714:web:a793b6c4380bfa14"
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
