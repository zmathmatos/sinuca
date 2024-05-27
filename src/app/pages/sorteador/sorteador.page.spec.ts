import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SorteadorPage } from './sorteador.page';

describe('SorteadorPage', () => {
  let component: SorteadorPage;
  let fixture: ComponentFixture<SorteadorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SorteadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
