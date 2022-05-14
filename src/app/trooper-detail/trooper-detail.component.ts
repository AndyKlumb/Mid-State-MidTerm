import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Trooper } from '../trooper';
import { TrooperService } from '../trooper.service';

@Component({
  selector: 'app-trooper-detail',
  templateUrl: './trooper-detail.component.html',
  styleUrls: [ './trooper-detail.component.scss' ]
})
export class TrooperDetailComponent implements OnInit {
  trooper: Trooper | undefined;

  constructor(
    private route: ActivatedRoute,
    private trooperService: TrooperService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getTrooper();
  }

  getTrooper(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.trooperService.getTrooper(id)
      .subscribe(trooper => this.trooper = trooper);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.trooper) {
      this.trooperService.updateTrooper(this.trooper)
        .subscribe(() => this.goBack());
    }
  }
}
