import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'FirebaseRead';

  public items: Observable<any>;

  constructor(db: AngularFireDatabase){
    this.items = db.list('Pubg').snapshotChanges();
  }
}
