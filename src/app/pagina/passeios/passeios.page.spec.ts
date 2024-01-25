import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PasseiosPage } from './passeios.page';

describe('PasseiosPage', () => {
  let component: PasseiosPage;
  let fixture: ComponentFixture<PasseiosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PasseiosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
