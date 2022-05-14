import { Component, OnInit } from '@angular/core';

import { Trooper } from '../trooper';
import { DeployedTrooper } from '../deployedTrooper';
import { TrooperService } from '../trooper.service';
import { MessageService } from '../message.service';
import { TROOPERS } from '../mock-trooper';
import { first, skipWhile } from 'rxjs';

@Component({
  selector: 'app-troopers',
  templateUrl: './deploy.component.html',
  styleUrls: ['./deploy.component.scss']
})
export class DeployComponent implements OnInit {
  troopers: Trooper[] = [];
  deployedTroopers: DeployedTrooper[] = [];

  constructor(private trooperService: TrooperService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getTroopers();
  }

  getTroopers(): void {
    this.trooperService.getTroopers()
    .subscribe(troopers => this.troopers = troopers);
  }

  getDeployedTroopers(deployedTrooper1: string, deployedTrooper2: string): void {
    let troops = this.troopers;
    var i = troops.length - 1;
    var i2 = troops.length - 1;

    var firstTrooper = null;
    var secondTrooper = null;

    if(troops.length > 0){
          while (i >= 0)
          {
                if(troops[i].name === deployedTrooper1)
                {
                  firstTrooper = troops[i];
                  break;
                }
          
            i--;
          }

          while(i2 >= 0)
          {
              if(troops[i2].name === deployedTrooper2)
                {
                  secondTrooper = troops[i2];
                  break;
                }
            i2--;
          }
    if(firstTrooper != null)
    {
      while(firstTrooper?.health > 0)
      {
        if(secondTrooper != null)
        {
          while(secondTrooper?.health > 0)
          {
            if(firstTrooper?.shieldHealth >= 0)
            {
              firstTrooper.shieldHealth -= secondTrooper.damage;
            }
            else
            {
              firstTrooper.health -= secondTrooper.damage;
            }
            
            if(secondTrooper.shieldHealth > 0)
            {
                secondTrooper.shieldHealth -= firstTrooper?.damage;
            }
            else{
              secondTrooper.health -= firstTrooper?.damage;
            }

            if(firstTrooper?.health <= 0)
            {
              alert(secondTrooper.name + " defeated " + firstTrooper?.name + "!");
              this.logTrooper(secondTrooper.name + " defeated " + firstTrooper?.name + "!");
              break;
            }
            else if(secondTrooper?.health <= 0)
            {
              alert(firstTrooper.name + " defeated " + secondTrooper?.name + "!");
              this.logTrooper(firstTrooper.name + " defeated " + secondTrooper?.name + "!");
              break;
            }
          } 
        }
        else
        {
          alert("The second trooper is null.");
          break;
        } 
      }
    }
  }
    else
    {
      alert("The first trooper is null.");
    }
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


  /** Log a TrooperService message with the MessageService */
  private logTrooper(message: string) {
    this.messageService.add(`TrooperService: ${message}`);
  }
}