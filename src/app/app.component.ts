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
      apiKey: 'AIzaSyCJyHbR_IbXrlU0FR2sLN-N6o3dz0CEF7s',
      authDomain: 'ng-recipe-book-9e371.firebaseapp.com'
    });
  }

  OnNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
