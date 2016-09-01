// CORE DEPS
import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AngularFireModule } from 'angularfire2';

// APP
import { AppComponent} from './app.component';

 // import { CommonModule } from '@angular/common';
 // import { FormsModule } from '@angular/forms';
 // import * as firebase from 'firebase';

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyA9wBgcRsLyoQQiaNb4HgFxnBlos-HWKDA',
  authDomain: 'pokerapp-6892e.firebaseapp.com',
  databaseURL: 'https://pokerapp-6892e.firebaseio.com',
  storageBucket: 'pokerapp-6892e.appspot.com'
};

@NgModule({
   imports: [
    BrowserModule,
   // CommonModule,
   // FormsModule,
    AngularFireModule.initializeApp(firebaseConfig)
     /*,
      {
        method: AuthMethods.Popup,
        // method: AuthMethods.Redirect
      })
    */
  ],
  declarations: [
    AppComponent
  ],
 // providers: [],
 // entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
