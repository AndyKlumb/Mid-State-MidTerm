import { Component, OnInit } from '@angular/core';

import { Trooper } from '../trooper';
import { TrooperService } from '../trooper.service';

@Component({
  selector: 'app-troopers',
  templateUrl: './troopers.component.html',
  styleUrls: ['./troopers.component.scss']
})
export class TroopersComponent implements OnInit {
  troopers: Trooper[] = [];

  constructor(private trooperService: TrooperService) { }

  ngOnInit(): void {
    this.getTroopers();
  }

  getTroopers(): void {
    this.trooperService.getTroopers()
    .subscribe(troopers => this.troopers = troopers);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.trooperService.addTrooper({ name } as Trooper)
      .subscribe(trooper => {
        this.troopers.push(trooper);
      });
  }

  delete(trooper: Trooper): void {
    this.troopers = this.troopers.filter(t => t !== trooper);
    this.trooperService.deleteTrooper(trooper.id).subscribe();
  }

}