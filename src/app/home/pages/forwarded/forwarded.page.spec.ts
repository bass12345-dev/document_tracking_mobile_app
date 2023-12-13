import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ForwardedPage } from './forwarded.page';

describe('ForwardedPage', () => {
  let component: ForwardedPage;
  let fixture: ComponentFixture<ForwardedPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ForwardedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
