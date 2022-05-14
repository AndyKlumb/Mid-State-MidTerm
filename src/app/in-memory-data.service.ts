import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Trooper } from './trooper';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const troopers = [
      { id: 1, name: 'Clone Jump Trooper', health: 100, Damage: 10, personalShield: false, shieldHealth: 0 },
      { id: 2, name: 'First Order Sith Trooper', health: 120, damage: 12, personalShield: false, shieldHealth: 0 },
      { id: 3, name: 'First Order Flame Trooper', health: 200, damage: 5, personalShield: false, shieldHealth: 0 },
      { id: 4, name: 'Imperial Flame Trooper', health: 150, damage: 7, personalShield: true, shieldHealth: 25 },
      { id: 5, name: 'Imperial EVO Trooper', health: 150, damage: 5, personalShield: true, shieldHealth: 50 },
      { id: 6, name: 'Clone Scuba Trooper', health: 120, damage: 15, personalShield: false, shieldHealth: 0 },
      { id: 7, name: 'Clone Arf Trooper', health: 90, damage: 25, personalShield: false, shieldHealth: 0 },
      { id: 8, name: 'Clone Arc Trooper', health: 140, damage: 10, personalShield: true, shieldHealth: 0 },
      { id: 9, name: 'Imperial Shock Trooper', health: 120, damage: 15, personalShield: true, shieldHealth: 20 },
      { id: 10, name: 'Imperial Shadow Trooper', health: 50, damage: 35, personalShield: true, shieldHealth: 50 },
      { id: 11, name: 'Imperial Storm Trooper', health: 110, damage: 15, personalShield: false, shieldHealth: 0 },
      { id: 12, name: 'Phase One Clone Trooper', health: 150, damage: 10, personalShield: false, shieldHealth: 0 },
      { id: 13, name: 'Phase Two Clone Trooper', health: 130, damage: 15, personalShield: false, shieldHealth: 0 },
      { id: 14, name: 'First Order Storm Trooper', health: 120, damage: 10, personalShield: false, shieldHealth: 0 },
      { id: 15, name: 'Imperial Scout Trooper', health: 80, damage: 15, personalShield: true, shieldHealth: 30 },
      { id: 16, name: 'Imperial Rocket Trooper', health: 120, damage: 10, personalShield: false, shieldHealth: 0 },
      { id: 17, name: 'Rebel Rocket Trooper', health: 70, damage: 20, personalShield: true, shieldHealth: 20 },
      { id: 18, name: 'Rebel Soilder', health: 100, damage: 10, personalShield: false, shieldHealth: 0 },
      { id: 19, name: 'Clone Trooper Pilot', health: 70, damage: 30, personalShield: false, shieldHealth: 0 },
      { id: 20, name: 'Imperial Dark Trooper', health: 250, damage: 7, personalShield: false, shieldHealth: 0  }
    ];
    return {troopers};
  }

  // Overrides the genId method to ensure that a trooper always has an id.
  // If the troopers array is empty,
  // the method below returns the initial number (11).
  // if the troopers array is not empty, the method below returns the highest
  // trooper id + 1.
  genId(troopers: Trooper[]): number {
    return troopers.length > 0 ? Math.max(...troopers.map(trooper => trooper.id)) + 1 : 11;
  }
}
