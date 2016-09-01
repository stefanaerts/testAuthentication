import { Component } from '@angular/core';
 import { AngularFire, FirebaseListObservable} from 'angularfire2';
// import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { Subject } from 'rxjs/Subject';
@Component({
  selector: 'app-root',
 templateUrl: 'app.component.html',
 // template: `
 // <h1>{{ items | async | json }}</h1>
//   `,

  styleUrls: ['app.component.css']
})
export class AppComponent {
 // title = 'app werkt';
 // isAuth = false;
//  authColor = 'warn';
//  user = {};
// item: FirebaseObjectObservable<any>;
items: FirebaseListObservable<any>;
sizeSubject: Subject<any>;
constructor(
    af: AngularFire
  ) {
  this.sizeSubject = new Subject();
 // this.item = af.database.object('/item');
  // this.item = af.database.object('/item', { preserveSnapshot: true });
  //this.items = af.database.list('/messages');
   this.items = af.database.list('/messages', {
      query: {
        orderByChild: 'text',
        equalTo: this.sizeSubject
      }
   });
  }
  // const promise = this.items.push({ name: "newlist" });
  // promise
  // .then(_ => console.log('success'))
 // .catch(err => console.log(err, 'You do not have access!'));
 // this.items.subscribe(snapshot => {
 // console.log(snapshot.key)
 // console.log(snapshot.val())
 // });
 //   this.af.auth.subscribe(
 //     user => this._changeState(user),
 //     error => console.trace(error)
 //   );
  filterBy(text: string) {
    this.sizeSubject.next(text);
  }

 /*addItem(newName: string) {
    this.items.push({ text: newName });
  }
  updateItem(key: string, newText: string) {
    this.items.update(key, { text: newText });
  }
  deleteItem(key: string) {
    this.items.remove(key);
  }
  deleteEverything() {
    this.items.remove();
  }
  */
 /*save(newName: string) {
    this.item.set({ name: newName });
  }
  update(newSize: string) {
    this.item.update({ size: newSize });
  }
  delete() {
    const promise = this.item.remove();
    promise
      .then(_ => console.log('success'))
      .catch(err => console.log('no permissions to remove'));
  }
  */
/*
login() {
  this.af.auth.login({
    provider: AuthProviders.Google
  });
}
*/

/*login(from: string) {
    this.af.auth.login({
      provider: this._getProvider(from)
    });
  }
  logout() {
    this.af.auth.logout();
  }

private _changeState(user: any = null) {
    if (user) {
      this.isAuth = true;
      this.authColor = 'primary';
      this.user = this._getUserInfo(user);
    } else {
      this.isAuth = false;
      this.authColor = 'warn';
      this.user = {};
    }
}

private _getUserInfo(user: any): any {
    if (!user) {
      return {};
    }
    let data = user.auth.providerData[0];
    return {
      name: data.displayName,
      avatar: data.photoURL,
      email: data.email,
      provider: data.providerId
    };
  }

private _getProvider(from: string) {
    switch (from) {
      case 'twitter': return AuthProviders.Twitter;
      case 'facebook': return AuthProviders.Facebook;
      case 'github': return AuthProviders.Github;
      case 'google': return AuthProviders.Google;
    }
  }
  */
}
