import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoresAddComponent } from './stores-add.component';

describe('StoresAddComponent', () => {
  let component: StoresAddComponent;
  let fixture: ComponentFixture<StoresAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoresAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoresAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
