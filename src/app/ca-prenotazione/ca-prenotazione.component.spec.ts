import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaPrenotazioneComponent } from './ca-prenotazione.component';

describe('CaPrenotazioneComponent', () => {
  let component: CaPrenotazioneComponent;
  let fixture: ComponentFixture<CaPrenotazioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaPrenotazioneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaPrenotazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
