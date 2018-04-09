import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherFoundComponent } from './weather-found.component';

describe('WeatherFoundComponent', () => {
  let component: WeatherFoundComponent;
  let fixture: ComponentFixture<WeatherFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
