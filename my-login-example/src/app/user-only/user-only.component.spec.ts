import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOnlyComponent } from './user-only.component';

describe('UserOnlyComponent', () => {
  let component: UserOnlyComponent;
  let fixture: ComponentFixture<UserOnlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserOnlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
