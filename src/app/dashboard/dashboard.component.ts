import { Component, OnInit } from '@angular/core';
import { Trooper } from '../trooper';
import { TrooperService } from '../trooper.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit {
  troopers: Trooper[] = [];

  constructor(private trooperService: TrooperService) { }

  ngOnInit(): void {
    this.getTroopers();
  }

  getTroopers(): void {
    this.trooperService.getTroopers()
      .subscribe(troopers => this.troopers = troopers.slice(1, 5));
  }
}
