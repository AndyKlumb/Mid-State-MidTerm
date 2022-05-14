import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TroopersComponent } from './troopers.component';

describe('TroopersComponent', () => {
  let component: TroopersComponent;
  let fixture: ComponentFixture<TroopersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TroopersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TroopersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
