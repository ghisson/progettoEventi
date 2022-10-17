import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaProfiloComponent } from './ca-profilo.component';

describe('CaProfiloComponent', () => {
  let component: CaProfiloComponent;
  let fixture: ComponentFixture<CaProfiloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaProfiloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaProfiloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
