import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpddateHotelComponent } from './upddate-hotel.component';

describe('UpddateHotelComponent', () => {
  let component: UpddateHotelComponent;
  let fixture: ComponentFixture<UpddateHotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpddateHotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpddateHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
