import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillylogrosComponent } from './skillylogros.component';

describe('SkillylogrosComponent', () => {
  let component: SkillylogrosComponent;
  let fixture: ComponentFixture<SkillylogrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkillylogrosComponent]
    });
    fixture = TestBed.createComponent(SkillylogrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
