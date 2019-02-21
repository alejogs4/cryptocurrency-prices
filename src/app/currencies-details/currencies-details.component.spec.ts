import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrenciesDetailsComponent } from './currencies-details.component';

describe('CurrenciesDetailsComponent', () => {
  let component: CurrenciesDetailsComponent;
  let fixture: ComponentFixture<CurrenciesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrenciesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrenciesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
