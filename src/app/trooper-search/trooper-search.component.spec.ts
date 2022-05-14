import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrooperSearchComponent } from './trooper-search.component';

describe('TrooperSearchComponent', () => {
  let component: TrooperSearchComponent;
  let fixture: ComponentFixture<TrooperSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrooperSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrooperSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
