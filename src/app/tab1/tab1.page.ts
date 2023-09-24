import { Component } from '@angular/core';
import { Treino } from '../interfaces/treino';
import { DatabaseService } from '../database.service';
import { RouterEvent, Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  treinos : Treino [] = []

  constructor(private databaseService: DatabaseService, private router: Router) {
    this.refresh(null);
  }

  ngOnInit() {
    
  }

  

  navToExercicios(item: Treino){
    this.router.navigate(["/exercicios/"+item.id])
  }

  refresh(event: any) {
    this.databaseService.getUserStats().then(e => {
      this.databaseService.getUserStats().then((e) => {
        if (e !== null) {
          this.treinos = e.treino || [];
        }
      });
      if (!!event) {
        event.target.complete();
      }
    })
  }

  
}
