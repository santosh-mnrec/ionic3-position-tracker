import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'Firebase';
import { HomePage } from '../pages/home/home';

const config = {
  apiKey: "AIzaSyCILHg7OXna0TIc49kdYct-ZaaOnkedRnM",
    authDomain: "gps-tracker-3d346.firebaseapp.com",
    databaseURL: "https://gps-tracker-3d346.firebaseio.com",
    projectId: "gps-tracker-3d346",
    storageBucket: "gps-tracker-3d346.appspot.com",
    messagingSenderId: "344137631377"
};

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
}
