import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarCircleComponent } from './avatar-circle.component';

describe('AvatarCircleComponent', () => {
  let component: AvatarCircleComponent;
  let fixture: ComponentFixture<AvatarCircleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvatarCircleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
