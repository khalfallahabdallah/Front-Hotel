import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeDetaillsComponent } from './demande-detaills.component';

describe('DemandeDetaillsComponent', () => {
  let component: DemandeDetaillsComponent;
  let fixture: ComponentFixture<DemandeDetaillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandeDetaillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeDetaillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
