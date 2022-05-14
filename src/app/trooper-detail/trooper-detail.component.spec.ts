import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrooperDetailComponent } from './trooper-detail.component';

describe('TrooperDetailComponent', () => {
  let component: TrooperDetailComponent;
  let fixture: ComponentFixture<TrooperDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrooperDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrooperDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
