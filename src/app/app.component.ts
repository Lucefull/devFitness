import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    const app = initializeApp(environment.firebaseConfig);
    const database = getDatabase(app);
  }
}
