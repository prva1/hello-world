import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortuserDateTableComponent } from './sortuser-date-table.component';

describe('SortuserDateTableComponent', () => {
  let component: SortuserDateTableComponent;
  let fixture: ComponentFixture<SortuserDateTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortuserDateTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortuserDateTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
