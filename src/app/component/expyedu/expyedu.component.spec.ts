import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpyeduComponent } from './expyedu.component';

describe('ExpyeduComponent', () => {
  let component: ExpyeduComponent;
  let fixture: ComponentFixture<ExpyeduComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpyeduComponent]
    });
    fixture = TestBed.createComponent(ExpyeduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
