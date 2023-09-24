import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../database.service';
import { Historico } from '../interfaces/historico';
import { user } from '@angular/fire/auth';
import { UserStats } from '../interfaces/user-stats';
import { RefresherCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  historico : Historico[] = [];


  constructor(private databaseService: DatabaseService, private router: Router) {
    this.refresh(null);
  }

  ngOnInit() {
    
  }

  refresh(event: any) {
    this.databaseService.getUserStats().then(userStats => {
      if (!!userStats && !!userStats.historico) {
        this.historico = userStats.historico;
      }
      if (!!event) {
        event.target.complete();
      }
    })
  }
}
