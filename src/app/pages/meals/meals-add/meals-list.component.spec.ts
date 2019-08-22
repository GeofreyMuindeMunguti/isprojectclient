import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealsAddComponent } from './meals-list.component';

describe('MealsListComponent', () => {
  let component: MealsAddComponent;
  let fixture: ComponentFixture<MealsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
